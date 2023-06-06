import axios from 'axios';
import { showFailureDialog } from '../store/ui/dialog.slice';

import { stopRequesting } from '../store/ui/form.slice';

export const HTTP_STATUS_NOT_FOUND = 404;

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  withCredentials: true,
});

const jsonContentTypeHeader = { 'Content-Type': 'application/json' };

function processHttpErrorResponse({ dispatch, error, failureDialogShown = true }) {
  const { errorMessage, errors } = parseErrorResponse(error);
  dispatch(stopRequesting({ errorMessage, errors }));
  if (failureDialogShown && errorMessage) dispatch(showFailureDialog({ message: errorMessage }));
}

function isNotFoundError(error) {
  return error?.response?.status === HTTP_STATUS_NOT_FOUND;
}

function parseErrorResponse(error) {
  const errorMessage = error.response?.data?.message ?? error.message;
  const errors = error.response?.data?.data;

  return { errorMessage, errors };
}

export { httpClient, jsonContentTypeHeader, processHttpErrorResponse, parseErrorResponse, isNotFoundError };
