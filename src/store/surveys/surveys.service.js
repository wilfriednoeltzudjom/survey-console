const { httpClient, jsonContentTypeHeader } = require('../../api');

const BASE_URL = '/surveys';

function getSurveyBaseUrl(surveyId) {
  return BASE_URL.concat(`/${surveyId}`);
}

async function createSurvey(data) {
  return httpClient.post(BASE_URL, data, {
    headers: jsonContentTypeHeader,
  });
}

async function getSurveys() {
  return httpClient.get(BASE_URL);
}

async function deleteSurvey(surveyId) {
  return httpClient.delete(getSurveyBaseUrl(surveyId));
}

export default { createSurvey, getSurveys, deleteSurvey };
