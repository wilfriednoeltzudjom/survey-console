import React from 'react';
import PropTypes from 'prop-types';

import { Button, Icon, Menu } from '..';
import ActionListItemStyled from './ActionListItem.styled';

export function ActionListItem({ children, item, actions = [] }) {
  return (
    <ActionListItemStyled>
      {children}
      <Menu trigger={<Button variant="ghost" size="sm" icon={<Icon name="more" />} />}>
        {actions.map(({ icon, label, onClick }) => (
          <Menu.Item
            key={label}
            icon={icon}
            label={label}
            onClick={() => {
              if (onClick) onClick(item);
            }}
          />
        ))}
      </Menu>
    </ActionListItemStyled>
  );
}
ActionListItem.propTypes = {
  children: PropTypes.node,
  item: PropTypes.shape({}),
  actions: PropTypes.arrayOf(PropTypes.shape({})),
};
