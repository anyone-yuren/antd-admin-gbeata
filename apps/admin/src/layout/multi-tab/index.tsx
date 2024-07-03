import { Dropdown, type MenuProps, Tabs, type TabsProps } from 'antd';
import { useCallback, useMemo, useRef, useState } from 'react';
import { DragDropContext, Draggable, Droppable, type OnDragEndResponder } from 'react-beautiful-dnd';
import { useTranslation } from 'react-i18next';

import IconifyIcon from '@/components/iconify-icon';

import useKeepAlive, { type KeepAliveTab } from '@/hooks/web/useKeepAlive';

import { useRouter } from '@/router/hooks';
import { replaceDynamicParams } from '@/router/hooks/use-match-route-meta';

import useStyles from './style';

import { MultiTabOperation, ThemeLayout } from '#/enum';

type Props = {
  offsetTop?: boolean;
};

export default function MultiTabs({ offsetTop = true }: Props) {
  const { t } = useTranslation();
  const { push } = useRouter();
  const { styles } = useStyles();
  const tabContentRef = useRef(null);
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [openDropdownTabKey, setopenDropdownTabKey] = useState('');

  const [hoveringTabKey, setHoveringTabKey] = useState('');

  const { tabs, activeTabRoutePath, setTabs, closeTab, refreshTab, closeOthersTab, closeAll, closeLeft, closeRight } =
    useKeepAlive();

  const menuItems = useMemo<MenuProps['items']>(() => {
    return [
      {
        label: t('刷新'),
        key: MultiTabOperation.REFRESH,
        icon: <IconifyIcon icon='ant-design:reload-outlined' size={16} />,
      },
      {
        label: t('关闭当前'),
        key: MultiTabOperation.CLOSE,
        icon: <IconifyIcon icon='ant-design:close-circle-outlined' size={16} />,
      },
      {
        type: 'divider',
      },
      {
        label: t('关闭右侧'),
        key: MultiTabOperation.CLOSERIGHT,
        icon: <IconifyIcon icon='ant-design:close-circle-outlined' size={16} />,
      },
      {
        label: t('关闭左侧'),
        key: MultiTabOperation.CLOSELEFT,
        icon: <IconifyIcon icon='ant-design:close-circle-outlined' size={16} />,
      },
      {
        label: t('关闭其他'),
        key: MultiTabOperation.CLOSEOTHERS,
        icon: <IconifyIcon icon='ant-design:close-circle-outlined' size={16} />,
      },
      {
        label: t('关闭全部'),
        key: MultiTabOperation.CLOSEALL,
        icon: <IconifyIcon icon='ant-design:close-circle-outlined' size={16} />,
      },
    ];
  }, [openDropdownTabKey, t, tabs]);
  /**
   * tab dropdown click
   */
  const menuClick = useCallback(
    (menuInfo: any, tab: KeepAliveTab) => {
      const { key, domEvent } = menuInfo;
      domEvent.stopPropagation();
      switch (key) {
        case MultiTabOperation.REFRESH:
          refreshTab(tab.key);
          break;
        case MultiTabOperation.CLOSE:
          closeTab(tab.key);
          break;
        case MultiTabOperation.CLOSEOTHERS:
          closeOthersTab(tab.key);
          break;
        case MultiTabOperation.CLOSELEFT:
          closeLeft(tab.key);
          break;
        case MultiTabOperation.CLOSERIGHT:
          closeRight(tab.key);
          break;
        case MultiTabOperation.CLOSEALL:
          closeAll();
          break;
        default:
          break;
      }
    },
    [refreshTab, closeTab, closeOthersTab, closeLeft, closeRight, closeAll],
  );

  /**
   * 当前显示dorpdown的tab
   */
  const onOpenChange = (open: boolean, tab: KeepAliveTab) => {
    if (open) {
      setopenDropdownTabKey(tab.key);
    } else {
      setopenDropdownTabKey('');
    }
  };

  /**
   * 渲染单个tab
   */
  const renderTabLabel = useCallback(
    (tab: KeepAliveTab) => {
      return (
        <Dropdown
          trigger={['contextMenu']}
          menu={{ items: menuItems, onClick: (menuInfo) => menuClick(menuInfo, tab) }}
          onOpenChange={(open) => onOpenChange(open, tab)}
        >
          <div
            onMouseEnter={() => {
              if (tab.key === activeTabRoutePath) return;
              setHoveringTabKey(tab.key);
            }}
            onMouseLeave={() => setHoveringTabKey('')}
          >
            <div>{t(tab.label)}</div>
            <IconifyIcon
              icon='ion:close-outline'
              size={18}
              className='cursor-pointer opacity-50'
              onClick={(e) => {
                e.stopPropagation();
                closeTab(tab.key);
              }}
              style={{
                visibility:
                  (tab.key !== activeTabRoutePath && tab.key !== hoveringTabKey) || tabs.length === 1
                    ? 'hidden'
                    : 'visible',
              }}
            />
          </div>
        </Dropdown>
      );
    },
    [t, menuItems, activeTabRoutePath, hoveringTabKey, tabs.length, menuClick, closeTab],
  );

  /**
   * 所有tab
   */

  const tabItems = useMemo(() => {
    return tabs?.map((tab) => ({
      label: renderTabLabel(tab),
      key: tab.key,
      closable: tabs.length > 1, // 保留一个
      children: (
        <div ref={tabContentRef} key={tab.timeStamp}>
          {tab.children}
        </div>
      ),
    }));
  }, [tabs, renderTabLabel]);
  /**
   * 拖拽结束事件
   */
  const onDragEnd: OnDragEndResponder = ({ destination, source }) => {
    // 拖拽到非法非 droppable区域
    if (!destination) {
      return;
    }
    // 原地放下
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const newTabs = Array.from(tabs);
    const [movedTab] = newTabs.splice(source.index, 1);
    newTabs.splice(destination.index, 0, movedTab);
    setTabs(newTabs);
  };
  const handleTabClick = ({ key, params = {} }: KeepAliveTab) => {
    const tabKey = replaceDynamicParams(key, params);
    push(tabKey);
  };
  const renderTabBar: TabsProps['renderTabBar'] = () => {
    return (
      <div className={styles.tab_bar}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='tabsDroppable' direction='horizontal'>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} className='flex w-full'>
                <div ref={scrollContainer} className='hide-scrollbar flex w-full px-2'>
                  {tabs.map((tab, index) => (
                    <div
                      id={`tab-${index}`}
                      className='flex-shrink-0'
                      key={tab.key}
                      onClick={() => handleTabClick(tab)}
                    >
                      <Draggable key={tab.key} draggableId={tab.key} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className='w-auto'
                          >
                            {renderTabLabel(tab)}
                          </div>
                        )}
                      </Draggable>
                    </div>
                  ))}
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  };

  return (
    <Tabs
      size='small'
      type='card'
      tabBarGutter={4}
      activeKey={activeTabRoutePath}
      items={tabItems}
      renderTabBar={renderTabBar}
    />
  );
}
