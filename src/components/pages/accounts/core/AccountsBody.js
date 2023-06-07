import React from 'react';
import PropTypes from 'prop-types';

import accountHelper from '../../../../_helpers/account.helper';
import { LABEL_CREATED_AT, LABEL_EMAIL, LABEL_FULL_NAME, LABEL_MENU_ACTION_DELETE, LABEL_NO_ACCOUNTS, LABEL_ROLE } from '../../../../_helpers/labels';

import { Badge, Card, Icon, Table } from '../../../library';

export default function AccountsBody({ accounts = [], requesting = false, onDeleteAccount }) {
  return (
    <Card>
      <Table
        columns={[
          {
            title: LABEL_FULL_NAME(),
            key: 'fullName',
            dataIndex: 'fullName',
            sortable: true,
          },
          {
            title: LABEL_CREATED_AT(),
            key: 'createdAt',
            dataIndex: 'createdAt',
            dataType: 'date',
            sortable: true,
          },
          {
            title: LABEL_EMAIL(),
            key: 'email',
            dataIndex: 'email',
          },
          {
            title: LABEL_ROLE(),
            key: 'role',
            dataIndex: 'role',
            sortable: true,
            formatter: accountHelper.translateRole,
            render: ({ role }) => <Badge colorScheme={accountHelper.getRoleColorScheme(role)}>{accountHelper.translateRole(role)}</Badge>,
          },
        ]}
        noDataMessage={LABEL_NO_ACCOUNTS()}
        dataSource={accounts}
        requesting={requesting}
        actions={[{ icon: <Icon name="delete" />, label: LABEL_MENU_ACTION_DELETE(), onClick: onDeleteAccount }]}
      />
    </Card>
  );
}
AccountsBody.propTypes = {
  accounts: PropTypes.arrayOf(PropTypes.shape({})),
  requesting: PropTypes.bool,
  onDeleteAccount: PropTypes.func.isRequired,
};
