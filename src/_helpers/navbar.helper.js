import { ROUTE_SURVEYS, ROUTE_ACCOUNTS } from '../routes';
import { LANGUAGES, ROLES } from './enums';
import { LABEL_MENU_SURVEYS, LABEL_MENU_ACCOUNTS } from './labels';

function getHomeNavItems({ profile = {}, language = LANGUAGES.FR } = {}) {
  const navItems = [{ label: LABEL_MENU_SURVEYS({ language }), url: ROUTE_SURVEYS }];
  if (profile?.role === ROLES.ADMINISTRATOR) {
    navItems.push({ label: LABEL_MENU_ACCOUNTS({ language }), url: ROUTE_ACCOUNTS });
  }

  return navItems;
}

export default { getHomeNavItems };
