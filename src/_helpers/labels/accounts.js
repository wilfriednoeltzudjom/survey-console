import { LANGUAGES } from '../enums';

export function LABELS_ACCOUNTS({ language = LANGUAGES.FR } = {}) {
  return { EN: 'User accounts', FR: 'Comptes utilisateurs' }[language];
}
export function LABEL_CREATE_ACCOUNT({ language = LANGUAGES.FR } = {}) {
  return { EN: 'New user account', FR: 'Nouveau compte' }[language];
}
export function LABEL_SELECT_ROLE({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Select a role', FR: 'Sélectionner un rôle' }[language];
}
export function LABEL_NO_ACCOUNTS({ language = LANGUAGES.FR } = {}) {
  return {
    EN: 'No account created',
    FR: 'Aucun compte ajouté',
  }[language];
}
export function LABEL_ROLE({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Role', FR: 'Rôle' }[language];
}
