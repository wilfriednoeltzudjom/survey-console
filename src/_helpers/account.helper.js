import { isNullishOrEmpty } from './dataValidator.helper';
import { ROLES } from './enums';

function translateRole(role) {
  return { [ROLES.ADMINISTRATOR]: 'Administrateur', [ROLES.OPERATOR]: 'Opérateur' }[role];
}

function getRoleColorScheme(role) {
  return { [ROLES.ADMINISTRATOR]: 'green', [ROLES.OPERATOR]: 'gray' }[role];
}

function formatAccountsForTable(accounts, profile) {
  if (isNullishOrEmpty(profile) || isNullishOrEmpty(accounts)) return accounts;

  return accounts.filter((account) => account.id !== profile.id);
}

export default { translateRole, getRoleColorScheme, formatAccountsForTable };
