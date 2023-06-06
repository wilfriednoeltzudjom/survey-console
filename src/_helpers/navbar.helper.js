import { ROUTE_SURVEYS, ROUTE_ACCOUNTS } from '../routes';
import { LANGUAGES } from './enums';
import { LABEL_MENU_SURVEYS, LABEL_MENU_ACCOUNTS } from './labels';

function getHomeNavItems({ language = LANGUAGES.FR } = {}) {
  return [
    { label: LABEL_MENU_SURVEYS({ language }), url: ROUTE_SURVEYS },
    { label: LABEL_MENU_ACCOUNTS({ language }), url: ROUTE_ACCOUNTS },
  ];
}

export default { getHomeNavItems };
