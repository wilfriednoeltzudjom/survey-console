import { AUTHENTICATED_KEY } from '../config/constants';

function isAuthenticated() {
  return localStorage.getItem(AUTHENTICATED_KEY);
}

function createSession() {
  localStorage.setItem(AUTHENTICATED_KEY, true);
}

function clearSession() {
  localStorage.clear(AUTHENTICATED_KEY);
}

export default { isAuthenticated, createSession, clearSession };
