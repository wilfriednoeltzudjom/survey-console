const { httpClient, jsonContentTypeHeader } = require('../../api');

const BASE_URL = '/accounts';

function getAccountBaseUrl(accountId) {
  return BASE_URL.concat(`/${accountId}`);
}

async function createAccount(data) {
  return httpClient.post(BASE_URL, data, {
    headers: jsonContentTypeHeader,
  });
}

async function getAccounts() {
  return httpClient.get(BASE_URL);
}

async function deleteAccount(accountId) {
  return httpClient.delete(getAccountBaseUrl(accountId));
}

export default { createAccount, getAccounts, deleteAccount };
