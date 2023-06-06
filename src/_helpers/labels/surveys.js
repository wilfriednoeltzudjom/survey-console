import { LANGUAGES } from '../enums';

export function LABELS_SURVEYS({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Surveys', FR: 'Questionnaires' }[language];
}
export function LABEL_CREATE_SURVEY({ language = LANGUAGES.FR } = {}) {
  return { EN: 'New survey', FR: 'Nouveau questionnaire' }[language];
}

export function LABEL_REFERENCE({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Reference', FR: 'Référence' }[language];
}
export function LABEL_CUSTOMER({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Customer', FR: 'Client' }[language];
}
export function LABEL_TAX_NOTICE_NUMBER({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Tax notice number', FR: 'Numéro fiscal' }[language];
}
export function LABEL_TAX_NOTICE_REFERENCE({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Tax notice reference', FR: "Référence de l'avis" }[language];
}
export function LABEL_PREMIUM_PROFILE({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Profile', FR: 'Profil' }[language];
}

export function LABEL_DELETE_SURVEY({ survey, language = LANGUAGES.FR } = {}) {
  return {
    EN: `You are about to delete survey <b>${survey.reference}</b>. Do you confirm this action?`,
    FR: `Vous êtes sur le point de supprimer le questionnaire <b>${survey.reference}</b>. Confirmez-vous cette action ?`,
  }[language];
}

export function LABEL_NO_SURVEYS({ language = LANGUAGES.FR } = {}) {
  return {
    EN: 'No survey created',
    FR: 'Aucun formulaire ajouté',
  }[language];
}

export function MODAL_TITLE_SURVEY({ language = LANGUAGES.FR } = {}) {
  return { EN: 'Survey', FR: 'Formulaire' }[language];
}

export function LABEL_BUILDING_AGE({ language = LANGUAGES.FR } = {}) {
  return { EN: '', FR: 'Année de contruction de la maison ?' }[language];
}
export function LABEL_LIVING_SPACE_AREA({ language = LANGUAGES.FR } = {}) {
  return { EN: '', FR: 'Surface de la maison (m²)' }[language];
}
export function LABEL_LOFT_INCLUDED({ language = LANGUAGES.FR } = {}) {
  return { EN: '', FR: "Est-ce qu'il y'a des combles ?" }[language];
}
export function LABEL_LOFT_TYPE({ language = LANGUAGES.FR } = {}) {
  return { EN: '', FR: 'Quel type de combles ?' }[language];
}
export function LABEL_LOFT_AREA({ language = LANGUAGES.FR } = {}) {
  return { EN: '', FR: 'Surface des combles (m²)' }[language];
}
export function LABEL_LOFT_INSULATED({ language = LANGUAGES.FR } = {}) {
  return { EN: '', FR: 'Les combles sont déjà isolés ?' }[language];
}
export function LABEL_LOFT_INSULATION_PERIOD({ language = LANGUAGES.FR } = {}) {
  return { EN: '', FR: 'Si les combles sont déjà isolés, depuis combien de temps ?' }[language];
}
export function LABEL_MPR_BENEFICIARY({ language = LANGUAGES.FR } = {}) {
  return { EN: '', FR: 'Est-ce que le client a déjà bénéficié des aides MaPrimeRenov ?' }[language];
}
export function LABEL_ONE_EURO_BENEFICIARY({ language = LANGUAGES.FR } = {}) {
  return { EN: '', FR: "Est-ce que le client a déjà bénéficié de l'isolation à 1 euro ?" }[language];
}
export function LABEL_REFERENCE_TAX_INCOME({ language = LANGUAGES.FR } = {}) {
  return { EN: '', FR: 'Revenu fiscal de référence' }[language];
}
export function LABEL_BIRTHDATE({ language = LANGUAGES.FR } = {}) {
  return { EN: '', FR: 'Date de naissance' }[language];
}
export function LABEL_NUMBER_OF_DEPENDENTS({ language = LANGUAGES.FR } = {}) {
  return { EN: '', FR: 'Nombre de parts dans le foyer' }[language];
}
export function LABEL_STREET_NUMBER({ language = LANGUAGES.FR } = {}) {
  return { EN: '', FR: 'Numéro de rue' }[language];
}
export function LABEL_STREET_NAME({ language = LANGUAGES.FR } = {}) {
  return { EN: '', FR: 'Nom de la rue' }[language];
}
export function LABEL_CITY({ language = LANGUAGES.FR } = {}) {
  return { EN: '', FR: 'Ville' }[language];
}
export function LABEL_POSTAL_CODE({ language = LANGUAGES.FR } = {}) {
  return { EN: '', FR: 'Code postal' }[language];
}
export function LABEL_OWNING_TYPE({ language = LANGUAGES.FR } = {}) {
  return { EN: '', FR: 'Est-ce que le client est ?' }[language];
}
export function LABEL_WALL_INSULATION_TYPE({ language = LANGUAGES.FR } = {}) {
  return { EN: '', FR: 'Est-ce les mûrs extérieurs sont isolés ?' }[language];
}
export function LABEL_HEATING_TYPE({ language = LANGUAGES.FR } = {}) {
  return { EN: '', FR: 'Quel est le moyen de chauffage utilisé ?' }[language];
}
export function LABEL_OIL_HEATING_TYPE_BOILER({ language = LANGUAGES.FR } = {}) {
  return { EN: '', FR: 'Si chauffage à gaz, est-ce une chaudière à condensation ?' }[language];
}
export function SUB_LABEL_OIL_HEATING_TYPE_BOILER({ language = LANGUAGES.FR } = {}) {
  return {
    EN: '',
    FR: "Si sous votre chaudière vous avez un autre tuyau que l'arrivée de gaz, la sortie d'eau chaude est l'entrée d'eau froide, il s'agit probablement d'une chaudière à condensation.",
  }[language];
}
export function LABEL_WATER_HEATING_TYPE({ language = LANGUAGES.FR } = {}) {
  return { EN: '', FR: "Quel est le moyen de production d'eau chaude sanitaire ?" }[language];
}
export function LABEL_WATER_HEATING_TYPE_SPECIFIED({ language = LANGUAGES.FR } = {}) {
  return { EN: '', FR: 'Préciser le type de chauffage' }[language];
}
export function LABEL_BASEMENT_INCLUDED({ language = LANGUAGES.FR } = {}) {
  return { EN: '', FR: "Est ce qu'il y'a un sous-sol ?" }[language];
}
export function LABEL_LOW_FLOOR_INSULATION_PERIOD({ language = LANGUAGES.FR } = {}) {
  return { EN: '', FR: 'Si oui, est-ce que le plancher bas est isolé ?' }[language];
}
export function LABEL_BASEMENT_AREA_FOR_BOILER({ language = LANGUAGES.FR } = {}) {
  return { EN: '', FR: "Est ce qu'il y a un espace de sous sol de 1.9m de hauteur et 2m² de surface pour une chaudière a granulés ?" }[language];
}
export function LABEL_RADIATOR_TYPE({ language = LANGUAGES.FR } = {}) {
  return { EN: '', FR: 'Si radiateur, quel type ?' }[language];
}
export function LABEL_FIREPLACE_INCLUDED({ language = LANGUAGES.FR } = {}) {
  return { EN: '', FR: "Est-ce que la maison dispose d'une cheminée" }[language];
}
export function LABEL_PHONE_NUMBER({ language = LANGUAGES.FR } = {}) {
  return { EN: '', FR: 'Numéro de portable' }[language];
}
export function LABEL_COMMENTS({ language = LANGUAGES.FR } = {}) {
  return { EN: '', FR: 'Commentaires' }[language];
}
