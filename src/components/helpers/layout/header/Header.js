import React from 'react';
import { useDispatch } from 'react-redux';

import { signOut } from '../../../../store/auth/auth.slice';
import { LABEL_MENU_LOGOUT, LABEL_SIGN_OUT_CONFIRMATION } from '../../../../_helpers/labels';

import { Avatar, Button, Icon, Menu, Text } from '../../../library';
import { Breadcrumb } from './Breadcrumb';
import HeaderStyled from './Header.styled';
import useAlert from '../../../hooks/useAlert';

export function Header() {
  const dispatch = useDispatch();
  const { showAlert, hideAlert } = useAlert();

  function handleSignOut() {
    showAlert({
      message: LABEL_SIGN_OUT_CONFIRMATION(),
      actions: (
        <Button colorScheme="secondary" onClick={processSignOut}>
          {LABEL_MENU_LOGOUT()}
        </Button>
      ),
    });
  }

  function processSignOut() {
    hideAlert();
    dispatch(signOut());
  }

  return (
    <HeaderStyled>
      <main>
        <section>
          <Text>LA REGIE DES ENERGIES</Text>
          <Breadcrumb />
        </section>

        <Menu trigger={<Avatar />}>
          <Menu.Item icon={<Icon name="logout" />} label={LABEL_MENU_LOGOUT()} onClick={handleSignOut} />
        </Menu>
      </main>
    </HeaderStyled>
  );
}
