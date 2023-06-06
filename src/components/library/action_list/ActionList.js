import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';

import { ActionListItem } from './ActionListItem';
import ActionListStyled from './ActionList.styled';
import { Icon, Text } from '..';

export function ActionList({ children, actions }) {
  return (
    <ActionListStyled>
      {children.length === 0 ? (
        <div className="empty">
          <Icon name="inventory" size="xl" colorScheme="gray" />
          <Text.Label>Aucune entrée</Text.Label>
        </div>
      ) : (
        children.map((child) => cloneElement(child, { actions }))
      )}
    </ActionListStyled>
  );
}
ActionList.propTypes = {
  children: PropTypes.node,
  actions: PropTypes.arrayOf(PropTypes.shape({})),
};
ActionList.Item = ActionListItem;
