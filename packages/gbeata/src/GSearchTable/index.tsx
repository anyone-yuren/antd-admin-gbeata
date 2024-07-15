import { Space } from 'antd';
import classNames from 'classnames';
import React, {
  MutableRefObject,
  ReactNode,
  Ref,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { getActionProps } from '../GAction';
import GButton from '../GButton';
import GDialogForm from '../GDialogForm';
import { GDialogFormRef } from '../GDialogForm/g-dialog-form';
import { convertChildrenToField } from '../GFields/convertFields';
import GForm, { getDefaultValue } from '../GForm';
import GSearch from '../GSearch';
import { GSearchField } from '../GSearch/g-search';
import GTable from '../GTable';
import { GTableField, LoadParams } from '../GTable/g-table';
import { AnyKeyProps } from '../types/AnyKeyProps';
import { Record } from '../types/Record';
import { isObj, omitObj, optionObj } from '../utils';
import { GSearchTableContext } from './context';
import {
  GSearchTableField,
  GSearchTableProps,
  SearchTableInitConfig,
  SortItem,
  TableRefProps,
} from './g-search-table';
import './g-search-table.less';
import useExtraBtn, {
  setSearchTableExtraDefaultValue,
} from './use/useExtraBtn';
import useSelection from './use/useSelection';

/**
 * 转化并过滤成 g-search 能用的 fields
 * @param fields 查询表格的 fields
 */
const getSearchFields = (fields: Array<GSearchTableField>) => {
  let searchFields: Array<GSearchField> = [];
  let moreSearchFields: Array<GSearchField> = [];
  fields
    .filter((field: GSearchTableField) => {
      return isObj(field.search) || field.search === true;
    })
    .forEach((field: GSearchTableField) => {
      let search = typeof field.search === 'boolean' ? {} : field.search;
      if (!search) {
        return {
          title: '配置有误',
          key: 'xxx',
          type: 'input',
        };
      }
      let searchField: GSearchField = {
        title: field.title,
        key: search.key || field.key || '',
        type: field.type || 'input',
        options: field.options || [],
        mode: field.mode,
        ...search,
        ...optionObj(field, field?.userKey?.length ? [...field?.userKey] : []),
      };

      if (field.children) {
        searchField.children = field.children;
      }

      if (searchField.position === 'more') {
        moreSearchFields.push(searchField);
      } else {
        searchFields.push(searchField);
      }
    });
  return {
    searchFields,
    moreSearchFields,
  };
};

/**
 * 过滤获得配置项
 *
 * 1、生成基础 table 需要的 fields
 * 2、添加 options (如果有的话)
 *
 * @param fields 配置项
 */
const getTableFields = (
  fields: Array<GSearchTableField>,
): Array<GTableField> => {
  return fields.map((field: GSearchTableField) => {
    let table = typeof field.table === 'boolean' ? {} : field.table;

    // false 表示表格隐藏
    if (field.table === false) {
      table = {
        hidden: true,
      };
    }
    field && !field.align && (field.align = 'center');

    let tableField: GTableField = {
      ...omitObj(field, 'table'),
      title: field.title,
      key: field.key,
      ...table,
    };

    return tableField;
  });
};

/**
 * 获取默认过滤值
 * @param fields 当前的表格配置项
 * @returns AnyKeyProps
 */
const getFiltersDefaultValue = (fields: Array<GTableField>) => {
  let filtersValue: AnyKeyProps = {};
  fields.forEach((field) => {
    if (
      field.key &&
      field.defaultFilterValue &&
      field.defaultFilterValue !== 0
    ) {
      filtersValue[field.key] = field.defaultFilterValue;
    }
  });
  return filtersValue;
};

/**
 * 获取默认排序值
 * @param fields 当前的表格配置项
 * @returns Array<{ key: string, order: 'ascend' | 'descend' }>
 */
const getSortsDefaultValue = (fields: Array<GTableField>) => {
  let sorts: Array<SortItem> = [];
  // 排序是否带了先后顺序
  let hasSortOrder = false;
  fields.forEach((field) => {
    if (field.key && field.defaultSortsValue) {
      let item: SortItem = {
        key: field.key,
        order: field.defaultSortsValue,
      };
      // 如果携带了 sortOrder
      if (field.sortOrder >= 0) {
        hasSortOrder = true;
        item.index = field.sortOrder;
      }
      sorts.push(item);
    }
  });
  // 携带了排序值需要排序一遍
  if (hasSortOrder) {
    sorts.sort(
      (a: SortItem, b: SortItem) => (a.index || 9999) - (b.index || 9999),
    );
    // 删除 index 排序值
    sorts = sorts.map((item: SortItem) => {
      return {
        key: item.key,
        order: item.order,
      };
    });
  }
  return sorts;
};

/**
 * 判断该节点是否只出现在底部
 * @param node GAction 按钮
 */
const isFooterActionOnly = (node: any) => {
  if (!node || !node.props) {
    return false;
  }
  const props = getActionProps(node.props, {});
  return props.tableFooterExtraOnly === true;
};

/**
 * 获取表格底部以及右侧 GAction 按钮
 * @param node GAction 按钮
 */
const getTableActionBtns = (
  children: ReactNode,
): { footerActions: Array<ReactNode>; rightActions: Array<ReactNode> } => {
  /** 右侧按钮 */
  const footerActions: Array<ReactNode> = [];
  /** 底部按钮 */
  const rightActions: Array<ReactNode> = [];
  if (Array.isArray(children)) {
    children.forEach((node: any) => {
      if (isFooterActionOnly(node)) {
        footerActions.push(node);
      } else if (node) {
        rightActions.push(node);
      }
    });
  } else {
    if (isFooterActionOnly(children)) {
      footerActions.push(children);
    } else if (children) {
      rightActions.push(children);
    }
  }
  return {
    rightActions,
    footerActions,
  };
};

/** 初始化查询表格配置 */
export const setSearchTableDefaultValue = (config: SearchTableInitConfig) => {
  // 初始化扩展列
  setSearchTableExtraDefaultValue(config);
};

const GSearchTable = forwardRef(function GSearchTable(
  props: GSearchTableProps,
  ref: Ref<any>,
) {
  const {
    className,
    rowClassName,
    fields: originFields,
    api,
    deleteApi,
    children,
    data,
    title,
    ctrl,
    selectionType,
    onSelectionChange,
    rowKey,
    dialogFormExtend,
    scrollX,
    height,
    filterData,
    beforeSearch,
    selectShowKey,
    onExpand,
    center,
    onLoad,
    searchVisible,
    tableExtend,
    pagination,
    btnBefore,
    extendSearchParams,
    before,
    defaultExtra,
    after,
    editMode,
    autoload,
    rowSelection,
    searchExtend,
    onParamsChange,
    tableHeader,
    compact,
    useOriginPagination,
  } = props;
  const fields = useMemo(() => {
    const childrenFields = convertChildrenToField(children);
    return [...(originFields || []), ...childrenFields];
  }, [originFields, children]);

  /** form 控制 */
  const formRef: MutableRefObject<GDialogFormRef> =
    useRef() as MutableRefObject<GDialogFormRef>;
  /** table 控制 */
  const tableRef: MutableRefObject<TableRefProps> =
    useRef() as MutableRefObject<TableRefProps>;
  /** search 控制 */
  const searchRef: MutableRefObject<AnyKeyProps> =
    useRef() as MutableRefObject<TableRefProps>;
  /** search 控制 */
  const moreSearchRef: MutableRefObject<AnyKeyProps> =
    useRef() as MutableRefObject<TableRefProps>;
  /** 查询项 */
  const { searchFields, moreSearchFields } = getSearchFields(fields);
  /** 列表项 */
  const [tableFields, setTableFields] = useState<Array<GTableField>>(
    getTableFields(fields),
  );
  /** 使用勾选 */
  const {
    header,
    message,
    tableRowSelection,
    selection,
    clearSelection,
    setSelection,
    addSelection,
    removeSelection,
  } = useSelection({
    rowKey,
    selectionType,
    onSelectionChange,
    selectShowKey,
    rowSelection,
  });
  /** action 展示，底部 or 右侧 */
  const { footerActions, rightActions } = getTableActionBtns(children);
  const [editTableRow, setEditTableRows] = useState<any>([]);

  const { extraBtns, size, isEnter, setDefaultField } = useExtraBtn(
    tableRef,
    searchRef,
    tableFields,
    setTableFields,
    props,
  );

  const doLayout = () => {
    // 刷新表格
    setTableFields(getTableFields(fields));

    // 设置顶部刷新
    if (searchRef.current && typeof searchRef.current.rezise === 'function') {
      searchRef.current.rezise();
    }
  };

  useEffect(() => {
    doLayout();
  }, [fields, isEnter]);

  /** 获取查询参数 */
  const getSearchParams = () => {
    // 更多查询数据
    let moreSearchValues = moreSearchRef.current?.getFieldsValue() || {};
    // 头顶查询数据
    let searchValues = searchRef.current?.getFieldsValue() || {};

    return {
      ...moreSearchValues,
      ...searchValues,
    };
  };

  /** 查询完成，刷新列表 */
  const onConfirm = () => {
    // 合并查询
    tableRef.current.reset(getSearchParams());
  };

  /** 暴露方法 */
  useImperativeHandle(ref, () => ({
    /**
     * 刷新页面
     */
    refresh() {
      tableRef.current.refresh();
    },
    /**
     * 回到第一页，刷新页面
     */
    reset() {
      // 跟点击【查询】逻辑一致
      onConfirm();
    },
    /**
     * 清空选项
     */
    clearSelection() {
      clearSelection();
    },
    /**
     * 获取 search 对象
     */
    getSearchRef() {
      return searchRef.current;
    },
    /**
     * 获取 moreSearch 对象，表格右侧查询框
     */
    getMoreSearchRef() {
      return moreSearchRef.current;
    },
    /**
     * 获取已经选中的对象
     */
    getSelection() {
      return selection;
    },
    /**
     * 设置选中的行
     */
    setSelection,
    /**
     * 添加选中的行
     */
    addSelection,
    /**
     * 刷新布局
     */
    doLayout,
    /**
     * 获取表格数据
     */
    getTableData() {
      return tableRef.current.getTableData();
    },
    /**
     * 设置表格数据
     */
    setTableData(tableData: Array<AnyKeyProps>) {
      return tableRef.current.setTableData(tableData);
    },
    /**
     * 清空过滤
     * @param keys
     */
    clearFilters(keys: Array<string> = []) {
      return tableRef.current.clearFilters(keys);
    },
    /**
     * 设置过滤值
     * @param filters 需要设置的过滤值，{ key: value } 格式
     */
    setFiltersValue(filters: AnyKeyProps) {
      return tableRef.current.setFiltersValue(filters);
    },
    /**
     * 设置排序值
     * @param sorts [{ key, order }] 组成格式
     */
    setSortsValue(sorts: Array<SortItem>) {
      return tableRef.current.setSortsValue(sorts);
    },
    /**
     * 清空排序
     * @param keys
     */
    clearSorts(keys: Array<string> = []) {
      return tableRef.current.clearSorts(keys);
    },
    /** 获取请求前参数 */
    getApiParams() {
      return tableRef.current.getApiParams();
    },
    /**
     * 根据 id 删除某一行数据
     */
    deleteRowByKey(key: string) {
      tableRef.current.deleteRowByKey(key);
    },
    getFromRef() {
      return formRef.current;
    },
    /**
     * 新增一行数据
     * @param row 新增的数据
     * @param type 新增在前面还是后面
     */
    addRow(record: Record, type: 'before' | 'after' = 'after') {
      tableRef.current.addRow(record, type);
    },
    /**
     * 获取编辑表单的每一行的form
     */
    getEditTableRowForm() {
      return editTableRow;
    },
    setPaginitionValue(paginition: LoadParams['pagination']) {
      tableRef.current.setPaginitionValue(paginition);
    },
  }));

  const tableProps: AnyKeyProps = {
    ref: tableRef,
    rowSelection: tableRowSelection,
    api,
    size,
    data,
    title,
    ctrl,
    rowKey,
    scrollX,
    height,
    filterData,
    beforeSearch,
    onExpand,
    onLoad,
    tableExtend,
    pagination,
    defaultFiltersValue: getFiltersDefaultValue(tableFields),
    defaultSortsValue: getSortsDefaultValue(tableFields),
    defaultSearchValue: getDefaultValue([...searchFields, ...moreSearchFields]),
    btnBefore,
    editMode,
    extendSearchParams,
    autoload,
    onParamsChange,
    tableHeader,
    getSearchParams,
    useOriginPagination,
  };

  /** 表格子元素 */
  const tableChildren = useMemo(() => {
    const children = [];
    if (moreSearchFields && moreSearchFields.length) {
      children.push(
        <GForm
          className="g-search-table-more"
          key="g-search-table-more"
          ref={moreSearchRef}
          fields={moreSearchFields}
          onConfirm={onConfirm}
        >
          <GButton
            className="g-search-table-more-submit"
            htmlType="submit"
          ></GButton>
        </GForm>,
      );
    }
    if (rightActions && rightActions.length) {
      children.push(rightActions);
    }
    if (extraBtns) {
      children.push(extraBtns);
    }
    if (children.length === 1) {
      return children[0];
    }
    return children.length ? children : null;
  }, [moreSearchRef, moreSearchFields, onConfirm, rightActions, extraBtns]);

  useEffect(() => {
    defaultExtra && setDefaultField(defaultExtra);
  }, []);
  return (
    <div
      className={classNames(
        'g-search-table',
        isEnter && 'full',
        compact && 'compact',
      )}
    >
      <GSearchTableContext.Provider
        value={{
          formRef,
          tableRef,
          selection,
          deleteApi,
          rowKey,
          setSelection,
          clearSelection,
          addSelection,
          removeSelection,
          searchTableRef: ref,
          editTableRow,
          setEditTableRow: (list: any[]) => {
            setEditTableRows((origin: any[]) => [...origin, ...list]);
          },
        }}
      >
        {before}
        {searchVisible !== false && searchFields.length > 0 ? (
          <GSearch
            ref={searchRef}
            fields={searchFields}
            onConfirm={onConfirm}
            {...searchExtend}
          />
        ) : null}
        {center}
        {dialogFormExtend ? (
          <GDialogForm ref={formRef} dialogOnly {...dialogFormExtend}>
            {children}
          </GDialogForm>
        ) : null}
        <GTable {...tableProps} fields={tableFields} header={header}>
          {tableChildren}
        </GTable>
        {selection.length && footerActions.length ? (
          <div className="g-search-table-footer-actions">
            {message}
            <Space>{footerActions}</Space>
          </div>
        ) : null}
        {after}
      </GSearchTableContext.Provider>
    </div>
  );
});
export default GSearchTable;
