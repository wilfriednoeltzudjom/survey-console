import moment from 'moment';

import { isValidValue } from './dataValidator.helper';

function formatDate(date, format = 'DD/MM/YYYY') {
  return isValidValue(date) ? moment(date).format(format) : date;
}

function formatDateForAnalytics(date) {
  return isValidValue(date) ? formatDate(date) : '--/--/----';
}

function formatTime(date, { allowMidnight = false } = {}) {
  const formattedTime = isValidValue(date) ? moment(date).format('HH:mm') : date;
  if (formattedTime === '00:00' && !allowMidnight) return '--:--';

  return formattedTime;
}

function formatDateTime(date) {
  return isValidValue(date) ? moment(date).format('DD/MM/YYYY - HH:mm') : date;
}

function today() {
  return moment().toDate();
}

function areDatesEqual({ comparedDate = moment(), date = moment() } = {}) {
  return moment(comparedDate).isSame(date, 'day');
}

function toDate(date) {
  return moment(date).toDate();
}

function toEndOfDay(date = new Date()) {
  const processingDate = moment(date).toDate();
  processingDate.setHours(23, 59, 59, 999);

  return processingDate;
}

export { formatDate, formatDateForAnalytics, formatTime, formatDateTime, today, areDatesEqual, toDate, toEndOfDay };
