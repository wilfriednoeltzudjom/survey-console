const { httpClient, jsonContentTypeHeader } = require('../../api');

async function signUp(formState) {
  return httpClient.post('/auth/sign-up', formState, {
    headers: jsonContentTypeHeader,
  });
}

async function signIn(formState) {
  return httpClient.post('/auth/sign-in', formState, {
    headers: jsonContentTypeHeader,
  });
}

async function getProfile() {
  return httpClient.get('/auth/profile');
}

async function signOut() {
  return httpClient.put('/auth/sign-out');
}

export default { signUp, signIn, getProfile, signOut };
