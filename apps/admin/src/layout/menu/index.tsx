/* eslint-disable consistent-return */
/* eslint-disable implicit-arrow-linebreak */
import { Menu, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import IconifyIcon from '@/components/iconify-icon';
import SvgIcon from '@/components/SvgIcon';

import { getOpenKeys } from '@/utils/helper/menuHelper';

import { getAsyncMenus } from '@/router/menus';
import { useMenuActions } from '@/stores/modules/menu';

// import { setMenuList as setMenuListAction } from '@/stores/modules/menu';
import type { AppMenu } from '@/router/types';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem =>
  ({
    label,
    key,
    icon,
    children,
    type,
  }) as MenuItem;

const LayoutMenu = (props: any) => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  const [menuList, setMenuList] = useState<MenuItem[]>([]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname]);
  const { t, i18n } = useTranslation();
  const { setMenuList: setMenuListAction } = useMenuActions();

  useEffect(() => {
    setSelectedKeys([pathname]);

    setOpenKeys(getOpenKeys(pathname));
  }, [pathname]);

  const addIcon = (icon?: string, iconSize?: number) => {
    if (!icon) return null;
    // gbeata-标识的为自定义图标 出自iconify
    if (icon.startsWith('gbeata-')) {
      return (
        <span className='anticon'>
          <IconifyIcon icon={icon.replace('gbeata-', '')} size={iconSize || 16} />
        </span>
      );
    }
    return (
      <span className='anticon'>
        <SvgIcon name={icon} size={iconSize || 16} />
      </span>
    );
  };

  const getMenuItem = (data: AppMenu[], list: MenuItem[] = []) => {
    data.forEach((item: AppMenu) => {
      if (!item?.children?.length) {
        return list.push(getItem(t(item.name), item.path, addIcon(item.icon, item.iconSize)));
      }
      list.push(getItem(t(item.name), item.path, addIcon(item.icon, item.iconSize), getMenuItem(item.children)));
    });
    return list;
  };

  const getMenuList = async () => {
    setLoading(true);
    try {
      const menus = await getAsyncMenus();
      setMenuList(getMenuItem(menus));
      setMenuListAction(menus);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMenuList();
  }, [i18n.language]);

  const handleOpenChange: MenuProps['onOpenChange'] = (keys: string[]) => {
    if (keys.length === 0 || keys.length === 1) return setOpenKeys(keys);
    const latestKey = keys[keys.length - 1];
    if (latestKey.includes(keys[0])) return setOpenKeys(keys);
    setOpenKeys([latestKey]);
  };

  const navigate = useNavigate();
  const handleMenuClick: MenuProps['onClick'] = ({ key }: { key: string }) => {
    navigate(key);
  };
  const a = 1;
  console.log(a);

  return (
    <div className='layout_menu'>
      <Spin spinning={loading} tip='Loading...'>
        <Menu
          // theme='dark'
          style={{
            border: 'none',
          }}
          mode='inline'
          triggerSubMenuAction='click'
          inlineIndent={20}
          subMenuOpenDelay={0.2}
          openKeys={openKeys}
          selectedKeys={selectedKeys}
          items={menuList}
          onClick={handleMenuClick}
          onOpenChange={handleOpenChange}
        />
      </Spin>
    </div>
  );
};

export default LayoutMenu;
