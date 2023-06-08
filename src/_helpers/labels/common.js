import { LANGUAGES } from '../enums';

export const LABEL_APP_NAME = 'POEYA Console';

export function LABEL_ADDED_AT({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Added on', FR: 'Ajouté le' }[language];
}
export function LABEL_CONFIRMATION({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Confirmation', FR: 'Confirmation' }[language];
}
export function LABEL_SIGN_IN({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Login', FR: 'Connexion' }[language];
}
export function LABEL_SIGN_UP({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Sign up', FR: 'Inscription' }[language];
}
export function LABEL_WELCOME_BACK({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Welcome back', FR: 'Bon retour' }[language];
}

export function LABEL_SIGN_IN_SUB_TITLE({ language = LANGUAGES.FR } = {}) {
  return {
    EN: 'Enter your credentials to get started.',
    FR: 'Merci de bien vouloir entrer vos identifiants pour accéder à votre compte.',
  }[language];
}
export function LABEL_SIGN_UP_SUB_TITLE({ language = LANGUAGES.FR } = {}) {
  return {
    EN: 'Fill out this form, join us and take your farm to the next level.',
    FR: 'Remplissez ce formulaire, rejoignez-nous et amenez votre exploitation au niveau supérieur.',
  }[language];
}
export function LABEL_NOT_YET_REGISTERED({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Not registered?', FR: 'Pas encore inscrit ?' }[language];
}
export function LABEL_CONTACT_ADMINISTRATOR({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Contact administrator', FR: "Contacter l'administrateur" }[language];
}
export function LABEL_ALREADY_REGISTERED({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Already registered?', FR: 'Déjà inscrit ?' }[language];
}
export function LABEL_SIGN_OUT_CONFIRMATION({ language = LANGUAGES.FR } = {}) {
  return { EN: 'You are about to end your session, do you confirm this action?', FR: 'Vous êtes sur le point de terminer votre session, confirmez-vous cette action ?' }[language];
}
export function LABEL_DELETE_ENTRY({ language = LANGUAGES.FR } = {}) {
  return { EN: 'You are about to delete an entry. Do you confirm this action?', FR: 'Vous êtes sur le point de supprimer une entrée. Confirmez-vous cette action ?' }[language];
}

export function LABEL_FULL_NAME({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Fullname', FR: 'Nom(s) et prénom(s)' }[language];
}
export function LABEL_LAST_NAME({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Lastname', FR: 'Nom(s)' }[language];
}
export function LABEL_FIRST_NAME({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Firstname', FR: 'Prénom(s)' }[language];
}
export function LABEL_INPUT_PHONE({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Phone', FR: 'Téléphone' }[language];
}
export function LABEL_EMAIL({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Email', FR: 'Adresse email' }[language];
}
export function LABEL_PASSWORD({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Password', FR: 'Mot de passe' }[language];
}
export function LABEL_CONFIRM_PASSWORD({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Confirm password', FR: 'Confirmation du mot de passe' }[language];
}
export function LABEL_PASSWORDS_ARE_DIFFERENT({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Your passwords does not match', FR: 'Mots de passe différents' }[language];
}
export function LABEL_INPUT_ADDRESS({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Address', FR: 'Adresse' }[language];
}
export function LABEL_INPUT_QUANTITY({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Quantity', FR: 'Quantité' }[language];
}
export function LABEL_INPUT_UNIT({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Unit', FR: 'Unité' }[language];
}
export function LABEL_INPUT_UNIT_PRICE({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Unit price', FR: 'Prix unitaire' }[language];
}
export function LABEL_INPUT_COMMENT({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Comment', FR: 'Commentaire' }[language];
}
export function LABEL_INPUT_FILES({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Files', FR: 'Fichiers' }[language];
}
export function LABEL_INPUT_SUPPLIER({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Supplier', FR: 'Fournisseur' }[language];
}
export function LABEL_INPUT_CUSTOMER({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Customer', FR: 'Client' }[language];
}

export function LABEL_BUTTON_OK({ language = LANGUAGES.FR } = {}) {
  return { EN: 'OK', FR: 'OK' }[language];
}
export function LABEL_SEND({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Send', FR: 'Envoyer' }[language];
}
export function LABEL_RESEND({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Resend', FR: 'Renvoyer' }[language];
}
export function LABEL_SAVE({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Save', FR: 'Enregistrer' }[language];
}
export function LABEL_EDIT({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Edit', FR: 'Modifier' }[language];
}
export function LABEL_DELETE({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Delete', FR: 'Supprimer' }[language];
}

export function LABEL_TABLE_COLUMN_ACTIONS({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Actions', FR: 'Actions' }[language];
}

export function LABEL_MENU_ACTION_VIEW({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Open', FR: 'Consulter' }[language];
}
export function LABEL_MENU_ACTION_EDIT({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Edit', FR: 'Modifier' }[language];
}
export function LABEL_MENU_ACTION_PRINT({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Print', FR: 'Imprimer' }[language];
}
export function LABEL_MENU_ACTION_DELETE({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Delete', FR: 'Supprimer' }[language];
}

export function LABEL_SELECT({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Select', FR: 'Sélectionner' }[language];
}

export function LABEL_MENU_LOGOUT({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Logout', FR: 'Déconnexion' }[language];
}
export function LABEL_MENU_PROFILE({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Profile', FR: 'Profil' }[language];
}
export function LABEL_MENU_DETAILS({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Details', FR: 'Détails' }[language];
}
export function LABEL_MENU_SURVEYS({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Surveys', FR: 'Formulaires' }[language];
}
export function LABEL_MENU_ACCOUNTS({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Accounts', FR: 'Comptes' }[language];
}
export function LABEL_MENU_HOME({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Home', FR: 'Accueil' }[language];
}

export function LABEL_DAILY({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Today', FR: "Aujourd'hui" }[language];
}
export function LABEL_WEEKLY({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Week', FR: 'Cette semaine' }[language];
}
export function LABEL_MONTHLY({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Month', FR: 'Ce mois' }[language];
}
export function LABEL_TOTAL({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Total', FR: 'Total' }[language];
}

export function LABEL_CREATED_AT({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Created at', FR: 'Date de création' }[language];
}
