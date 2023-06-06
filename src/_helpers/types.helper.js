import { cloneDeep } from 'lodash';

function roundNumberToTwoDecimal(number) {
  return Math.round((Number(number) + Number.EPSILON) * 100) / 100;
}

function formatAmount(price) {
  const roundedPrice = roundNumberToTwoDecimal(price);
  const formattedAmountPrefixes = [];
  let priceString = String(roundedPrice);
  if (priceString.includes('-')) {
    formattedAmountPrefixes.push('-');
    priceString = priceString.substring(1);
  }
  const priceParts = priceString.split('.');

  const integerPart = extractAndFormatIntegerPart(priceParts);
  const decimalPart = extractAndFormatDecimalPart(priceParts);

  return formattedAmountPrefixes.join('').concat(`${integerPart}${decimalPart}`).trim();
}

function extractAndFormatIntegerPart(priceParts) {
  let integerPart = priceParts[0];
  if (integerPart.length > 3) {
    const integerPartChunks = [];
    const reversedIntegerPart = reverseString(integerPart);
    const threeDigitsGroups = reversedIntegerPart.match(/\d{3}/g);
    const restWithoutThreeDigitsGroups = reversedIntegerPart.substring(threeDigitsGroups.join('').length);
    if (restWithoutThreeDigitsGroups) integerPartChunks.push(reverseString(restWithoutThreeDigitsGroups));
    threeDigitsGroups.reverse().forEach((group) => {
      integerPartChunks.push(reverseString(group));
    });

    return integerPartChunks.join(',');
  }

  return integerPart;
}

function reverseString(value = '') {
  return value.split('').reverse().join('');
}

function extractAndFormatDecimalPart(priceParts) {
  return '.'.concat(String(priceParts[1] || '').padEnd(2, '0'));
}

function formatCode(code) {
  return '#'.concat(code);
}

function formatPhoneNumber(phone) {
  if (/\d{9}/.test(phone)) {
    const threeGroupDigits = phone.match(/\d{3}/g);

    return threeGroupDigits.join('-');
  }

  return phone;
}

function getRandomEnumValue(enumeration) {
  const values = Object.values(enumeration);

  return values[Math.floor(Math.random() * values.length)];
}

function getRandomArrayValue(array = []) {
  return array[Math.floor(Math.random() * array.length)];
}

function formatStatisticValue(value) {
  return value ? value : null;
}

function sortItemsByDateAscending(items = []) {
  return Array.from(items).sort((prevItem, nextItem) => {
    const prevItemTimestamp = Date.parse(prevItem.date);
    const nextItemTimestamp = Date.parse(nextItem.date);
    if (prevItemTimestamp < nextItemTimestamp) return -1;
    if (prevItemTimestamp > nextItemTimestamp) return 1;

    return 0;
  });
}

function cloneObject(object) {
  return cloneDeep(object);
}

export {
  formatCode,
  formatPhoneNumber,
  getRandomEnumValue,
  getRandomArrayValue,
  formatStatisticValue,
  sortItemsByDateAscending,
  formatAmount,
  roundNumberToTwoDecimal,
  cloneObject,
};
