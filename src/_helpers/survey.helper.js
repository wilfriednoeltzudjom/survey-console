import { HOUSEHOLD_SITUATIONS, MPR_PROFILES } from './enums';

function translateMPRProfile(mprProfile) {
  return { [MPR_PROFILES.BLUE]: 'Bleu', [MPR_PROFILES.NONE]: 'Aucun', [MPR_PROFILES.PURPLE]: 'Violet', [MPR_PROFILES.PINK]: 'Rose', [MPR_PROFILES.YELLOW]: 'Jaune' }[mprProfile];
}

function translateHouseholdSituation(householdSituation) {
  return { [HOUSEHOLD_SITUATIONS.PRECARITY]: 'Précaire', [HOUSEHOLD_SITUATIONS.MODEST]: 'Modeste', [HOUSEHOLD_SITUATIONS.CLASSIC]: 'Classique' }[householdSituation];
}

function getHouseholdSituationColorScheme(householdSituation) {
  return { [HOUSEHOLD_SITUATIONS.PRECARITY]: 'blue', [HOUSEHOLD_SITUATIONS.MODEST]: 'yellow', [HOUSEHOLD_SITUATIONS.CLASSIC]: 'purple' }[householdSituation];
}

function formatSurveysForTable(surveys = []) {
  return surveys.map((survey) => ({
    ...survey,
    customer: formatCustomer(survey),
    taxNoticeNumber: formatTaxNoticeNumber(survey),
    taxNoticeReference: formatTaxNoticeReference(survey),
  }));
}

function formatCustomer({ lastName, firstName }) {
  return [lastName, firstName].join(' ');
}

function formatTaxNoticeNumber({ occupants: [occupant] = [] } = {}) {
  return occupant?.taxNoticeNumber;
}

function formatTaxNoticeReference({ occupants: [occupant] = [] } = {}) {
  return occupant?.taxNoticeReference;
}

export default { translateHouseholdSituation, translateMPRProfile, getHouseholdSituationColorScheme, formatSurveysForTable };
