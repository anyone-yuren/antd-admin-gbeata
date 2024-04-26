import { GAction, GCtrl, GSearchTable, type GSearchTableField, type GTableCtrlField, type Record } from 'gbeata';

import { listApi } from './api';

const fields: Array<GSearchTableField> = [
  {
    title: '组织',
    key: 'cn1',
    search: true,
    dialog: {
      required: true,
    },
  },
  {
    title: '仓库',
    key: 'index',
    sort: true,
    search: true,
    dialog: {
      required: true,
    },
  },
  {
    title: '物料编号',
    key: 'des1',
    type: 'textarea',
    dialog: true,
  },
];

const ctrl: GTableCtrlField = {
  render: (_, record: Record) => (
    <GCtrl>
      <GAction record={record} action='view'>
        详情
      </GAction>
      <GAction record={record} action='update'>
        编辑
      </GAction>
    </GCtrl>
  ),
};

export default function Demo() {
  return (
    <GSearchTable
      api={listApi}
      // ctrl={ctrl}
      fields={fields}
      rowKey='sort_id'
      dialogFormExtend={{
        fields,
      }}
    ></GSearchTable>
  );
}
