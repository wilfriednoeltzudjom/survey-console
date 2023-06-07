import moment from 'moment';

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
    customer: survey.fullName,
    taxNoticeNumber: formatTaxNoticeNumber(survey),
    taxNoticeReference: formatTaxNoticeReference(survey),
  }));
}

function formatTaxNoticeNumber({ occupants: [occupant] = [] } = {}) {
  return occupant?.taxNoticeNumber;
}

function formatTaxNoticeReference({ occupants: [occupant] = [] } = {}) {
  return occupant?.taxNoticeReference;
}

function filterCurrentDaySurveysCount(surveys = []) {
  return surveys.filter((survey) => {
    return moment(survey.createdAt).isSame(moment(), 'day');
  }).length;
}

function filterCurrentWeekSurveysCount(surveys = []) {
  return surveys.filter((survey) => {
    return moment(survey.createdAt).isBetween(moment().startOf('week'), moment().endOf('week'));
  }).length;
}

function filterCurrentMonthSurveysCount(surveys = []) {
  return surveys.filter((survey) => {
    return moment(survey.createdAt).isBetween(moment().startOf('month'), moment().endOf('month'));
  }).length;
}

export default {
  translateHouseholdSituation,
  translateMPRProfile,
  getHouseholdSituationColorScheme,
  formatSurveysForTable,
  filterCurrentDaySurveysCount,
  filterCurrentWeekSurveysCount,
  filterCurrentMonthSurveysCount,
};
