import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { isNonEmptyString, isObjectId } from '../../../../_helpers/dataValidator.helper';
import { LABEL_MENU_ACCOUNTS, LABEL_MENU_SURVEYS, LABEL_MENU_HOME, LABEL_MENU_DETAILS } from '../../../../_helpers/labels';
import { joinClassNames } from '../../../../_helpers/library.helper';

import { Icon } from '../../../library';
import BreadcrumbStyled from './Breadcrumb.styled';

export function Breadcrumb() {
  const [routes, setRoutes] = useState([]);
  useEffect(() => {
    setRoutes(formatPathname(window.location.pathname));
  }, [window.location.pathname]);

  function handleClick(evt, { selected }) {
    if (selected) evt.preventDefault();
  }

  return (
    <BreadcrumbStyled>
      {routes.map(({ path, label, selected }, index) => (
        <div key={index}>
          <Link to={path} className={joinClassNames(getLinkClassName(selected))} onClick={(evt) => handleClick(evt, { selected })}>
            {label}
          </Link>
          {index < routes.length - 1 && <Icon name="arrow-right" colorScheme="white" />}
        </div>
      ))}
    </BreadcrumbStyled>
  );
}

function formatPathname(pathname) {
  const routes = pathname
    .split('/')
    .filter(isNonEmptyString)
    .map((route) => ({
      path: getRoutePath(pathname, route),
      label: getRouteLabel(route),
    }));
  routes.unshift({
    path: '/',
    label: LABEL_MENU_HOME(),
  });

  return routes.map((route, index) => ({
    ...route,
    selected: index === routes.length - 1,
  }));
}

function getRoutePath(pathname, route) {
  return pathname.slice(0, pathname.indexOf(route) + route.length + 1);
}

function getRouteLabel(route) {
  if (isObjectId(route)) return LABEL_MENU_DETAILS();

  return {
    surveys: LABEL_MENU_SURVEYS(),
    accounts: LABEL_MENU_ACCOUNTS(),
  }[route];
}

function getLinkClassName(selected) {
  return selected ? 'selected' : '';
}
