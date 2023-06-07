import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createAccount, deleteAccount, getAccounts } from '../../../store/accounts/accounts.slice';
import { FORM_MODES } from '../../../_helpers/enums';
import { LABEL_DELETE, LABEL_DELETE_SURVEY, MODAL_TITLE_SURVEY } from '../../../_helpers/labels';
import { isNonEmptyObject } from '../../../_helpers/dataValidator.helper';
import formValidatorHelper from '../../../_helpers/formValidator.helper';
import { accountFormFieldsDescriptor } from '../../../_helpers/form_fields_descriptors';
import accountHelper from '../../../_helpers/account.helper';

import { Divider, HomeContainer } from '../../helpers';
import AccountsStyled from './Accounts.styled';
import AccountsHeader from './core/AccountsHeader';
import AccountsBody from './core/AccountsBody';
import useDisclosure from '../../hooks/useDisclosure';
import useForm from '../../hooks/useForm';
import { Button, Modal } from '../../library';
import AccountForm from './core/AccountForm';
import useAlert from '../../hooks/useAlert';

function Accounts() {
  const dispatch = useDispatch();
  const { accounts, requesting } = useSelector((state) => state.core.accountsState);
  const { profile } = useSelector((state) => state.core.authState);
  const accountModal = useDisclosure();
  const accountForm = useForm();
  const { showAlert, hideAlert } = useAlert();
  const [selectedAccount, setSelectedAccount] = useState({});

  useEffect(() => {
    dispatch(getAccounts());
  }, [dispatch]);

  function handleCreateAccount() {
    setSelectedAccount({});
    openAccountModal({}, { mode: FORM_MODES.CREATION });
  }

  function openAccountModal(account = {}, { mode } = {}) {
    accountForm.setMode(mode);
    accountForm.resetFormState(account);
    accountModal.handleShow();
  }

  function handleDeleteAccount(account) {
    showAlert({
      message: LABEL_DELETE_SURVEY({ account }),
      actions: (
        <Button colorScheme="red" onClick={() => processDeleteAccount(account)}>
          {LABEL_DELETE()}
        </Button>
      ),
    });
  }

  function handleSubmit() {
    if (isNonEmptyObject(selectedAccount)) return;
    processCreateAccount();
  }

  function processCreateAccount() {
    const { formState } = accountForm;
    const { validForm, formErrors } = formValidatorHelper.validateForm(formState, accountFormFieldsDescriptor());
    accountForm.setFormErrors(formErrors);
    if (validForm) dispatch(createAccount({ formState: { ...formState, deletable: true }, onAccountCreated: accountModal.handleHide }));
  }

  function processDeleteAccount(account) {
    hideAlert();
    dispatch(deleteAccount({ accountId: account.id }));
  }

  return (
    <HomeContainer>
      <AccountsStyled>
        <AccountsHeader accounts={accounts} onOpenCreateAccountForm={handleCreateAccount} />

        <Divider />

        <AccountsBody accounts={accountHelper.formatAccountsForTable(accounts, profile)} requesting={requesting} onDeleteAccount={handleDeleteAccount} />
      </AccountsStyled>

      {accountModal.shown && (
        <Modal shown title={MODAL_TITLE_SURVEY()} onHide={accountModal.handleHide}>
          <AccountForm mode={accountForm.mode} formState={accountForm.formState} formErrors={accountForm.formErrors} onChange={accountForm.handleChange} onSubmit={handleSubmit} />
        </Modal>
      )}
    </HomeContainer>
  );
}

export default Accounts;
