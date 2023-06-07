import React from 'react';
import PropTypes from 'prop-types';

import { LABELS_ACCOUNTS, LABEL_CREATE_ACCOUNT, LABEL_TOTAL } from '../../../../_helpers/labels';

import { Button, MainCard, Stack, Statistic, Text } from '../../../library';

export default function AccountsHeader({ accounts = [], onOpenCreateAccountForm }) {
  return (
    <>
      <MainCard>
        <MainCard.Header>
          <Text.Title>{LABELS_ACCOUNTS()}</Text.Title>
        </MainCard.Header>
        <MainCard.Body>
          <Stack spacing={1.5}>
            <Statistic variant="default" label={LABEL_TOTAL()} value={accounts.length} />
          </Stack>
        </MainCard.Body>
        <MainCard.Footer>
          <Button onClick={onOpenCreateAccountForm}>{LABEL_CREATE_ACCOUNT()}</Button>
        </MainCard.Footer>
      </MainCard>
    </>
  );
}
AccountsHeader.propTypes = {
  accounts: PropTypes.arrayOf(PropTypes.shape({})),
  onOpenCreateAccountForm: PropTypes.func.isRequired,
};
