import emailValidator from 'email-validator';
import { validate as uuidValidate } from 'uuid';
import { Types } from 'mongoose';

function isNullish(value) {
  return [null, undefined].includes(value);
}

function isNotNull(value) {
  return value !== null && value !== undefined;
}

function isString(value) {
  return typeof value === 'string';
}

function isObject(value) {
  return typeof value === 'object';
}

function isBoolean(value) {
  return typeof value === 'boolean';
}

function isArray(value) {
  return Array.isArray(value);
}

function isNumber(value) {
  return typeof value === 'number';
}

function isEnum(enumeration, value) {
  return Object.values(enumeration).includes(value);
}

function isValidValue(value) {
  return !isNullish(value);
}

function isDateValue(value) {
  return !isNumber(value) && !Number.isNaN(Date.parse(value));
}

function isNonEmptyObject(value) {
  return isValidValue(value) && typeof value === 'object' && Object.keys(value).length > 0;
}

function isValidEmail(value) {
  return emailValidator.validate(value);
}

function isValidPhone(value) {
  return /^[0]*\d{9}$/.test(value);
}

function toJSON(value) {
  try {
    return JSON.parse(value);
  } catch (error) {
    return {};
  }
}

function isNonEmptyString(value) {
  return isString(value) && value.length > 0;
}

function isEmptyString(value) {
  return isString(value) && value.length === 0;
}

function isUUID(value) {
  return uuidValidate(value);
}

function isEmptyObject(value) {
  return isNullish(value) || (typeof value === 'object' && Object.keys(value).length === 0);
}

function isObjectId(value) {
  return Types.ObjectId.isValid(value);
}

function isEmpty(value) {
  if (isString(value)) return value.length === 0;
  if (isNumber(value)) return value === 0;

  return false;
}

function isNullishOrEmpty(value) {
  return (
    isNullish(value) ||
    (Array.isArray(value) && value.length === 0) ||
    (isString(value) && value.length === 0) ||
    (isNumber(value) && value === 0) ||
    (isObject(value) && !(value instanceof Date) && Object.keys(value).length === 0)
  );
}

function isNonEmptyArray(array) {
  return Array.isArray(array) && array.length > 0;
}

export {
  isNullish,
  isNotNull,
  isString,
  isBoolean,
  isArray,
  isNumber,
  isEnum,
  isValidValue,
  isDateValue,
  isNonEmptyObject,
  isValidEmail,
  isValidPhone,
  toJSON,
  isNonEmptyString,
  isUUID,
  isEmptyString,
  isEmptyObject,
  isObjectId,
  isEmpty,
  isNullishOrEmpty,
  isNonEmptyArray,
};
