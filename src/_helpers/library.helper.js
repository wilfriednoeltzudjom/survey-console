import colors from '../config/colors';
import { isValidValue } from './dataValidator.helper';
import { BUILDING_AGES, HEATING_TYPES, INSULATION_PERIODS, LOFT_TYPES, OWNING_TYPES, RADIATOR_TYPES, WATER_HEATING_TYPES, WALL_INSULATIONS, YES_NO } from './enums';

function assignAdditionalProps(props, additionalProps = {}) {
  Object.keys(additionalProps)
    .filter((prop) => isValidValue(additionalProps[prop]))
    .forEach((prop) => {
      props[prop] = additionalProps[prop];
    });
}

function joinClassNames(...classNames) {
  return classNames
    .map((value) => value || '')
    .join(' ')
    .trim();
}

function getFontWeight({ weight }) {
  return { regular: 400, medium: 500, bold: 600, black: 700 }[weight];
}

function formatFormLabel(label, { required, index } = {}) {
  return label
    .concat(required ? ' * ' : '')
    .concat(isValidValue(index) ? ` ${index + 1}` : '')
    .trim();
}

function getInputCursor({ defaultCursor, disabled }) {
  return disabled ? 'not-allowed' : defaultCursor || 'initial';
}

function getButtonCursor({ disabled } = {}) {
  return disabled ? 'not-allowed' : 'pointer';
}

function getInputBackground({ disabled }) {
  return disabled ? colors.disabled : 'initial';
}

function createRipple(event) {
  const button = event.currentTarget;
  const { left, top } = button.getBoundingClientRect();

  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - left - radius}px`;
  circle.style.top = `${event.clientY - top - radius}px`;
  circle.classList.add('ripple');

  const ripple = button.getElementsByClassName('ripple')[0];
  if (ripple) ripple.remove();

  button.appendChild(circle);
}

function formatSelectOptions(enums) {
  return Object.values(enums).map(toSelectOption);
}

function toSelectOption(value) {
  return isValidValue(value) ? { label: translateSelectOption(value), value } : {};
}

function translateSelectOption(value) {
  return {
    [BUILDING_AGES.LESS_THAN_FIFTEEN_YEARS]: 'Moins de 15 ans',
    [BUILDING_AGES.MORE_THAN_FIFTEEN_YEARS]: 'Plus de 15 ans',
    [HEATING_TYPES.WOOD]: 'Bois',
    [HEATING_TYPES.GAS]: 'Gaz',
    [HEATING_TYPES.OIL]: 'Fioul',
    [HEATING_TYPES.HEATING_PUMP]: 'Pompe à chaleur',
    [HEATING_TYPES.ELECTRICITY]: 'Electricité',
    [INSULATION_PERIODS.LESS_THAN_TEN_YEARS]: 'Moins de 10 ans',
    [INSULATION_PERIODS.MORE_THAN_TEN_YEARS]: 'Plus de 10 ans',
    [LOFT_TYPES.LOST_ACCESSIBLE]: 'Perdus accessibles',
    [LOFT_TYPES.LOST_INACCESSIBLE]: 'Perdus inaccessibles',
    [LOFT_TYPES.FURNISHED]: 'Aménagés',
    [LOFT_TYPES.CONVERTIBLE]: 'Aménageable',
    [OWNING_TYPES.OWNER_OCCUPANT]: 'Propriétaire occupant',
    [OWNING_TYPES.TENANT]: 'Locataire',
    [OWNING_TYPES.SCI]: 'SCI avec 51% des parts',
    [WALL_INSULATIONS.ITE]: 'ITE',
    [WALL_INSULATIONS.ITI]: 'ITI',
    [WALL_INSULATIONS.NONE]: 'Aucune',
    [WATER_HEATING_TYPES.DEFAULT_HEATING]: 'Lié au chauffage',
    [WATER_HEATING_TYPES.BALLOON]: 'Ballon thermodynamique',
    [WATER_HEATING_TYPES.OTHER]: 'Autre',
    [WATER_HEATING_TYPES.OTHER]: 'Autre',
    [RADIATOR_TYPES.CLASSIC]: 'Classique',
    [RADIATOR_TYPES.ELECTRIC]: 'Electrique',
    [YES_NO.YES]: 'Oui',
    [YES_NO.NO]: 'Non',
  }[value];
}

export {
  assignAdditionalProps,
  joinClassNames,
  getFontWeight,
  formatFormLabel,
  getInputCursor,
  getButtonCursor,
  getInputBackground,
  createRipple,
  formatSelectOptions,
  toSelectOption,
};
