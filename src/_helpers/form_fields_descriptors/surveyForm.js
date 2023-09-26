import { HEATING_TYPES, LANGUAGES } from '../enums';
import {
  LABEL_BASEMENT_AREA_FOR_BOILER,
  LABEL_BASEMENT_INCLUDED,
  LABEL_BASEMENT_INSULATED,
  LABEL_BIRTHDATE,
  LABEL_BOILER_RELEASE_YEAR,
  LABEL_BUILDING_AGE,
  LABEL_CITY,
  LABEL_COMMENTS,
  LABEL_EMAIL,
  LABEL_FIREPLACE_INCLUDED,
  LABEL_FULL_NAME,
  LABEL_HEATING_TYPE,
  LABEL_HEATING_TYPE_COMMENTS,
  LABEL_INSULATION_TYPE,
  LABEL_LIVING_SPACE_AREA,
  LABEL_LOFT_AREA,
  LABEL_LOFT_COMMENTS,
  LABEL_LOFT_INCLUDED,
  LABEL_LOFT_INSULATED,
  LABEL_LOFT_INSULATION_PERIOD,
  LABEL_LOFT_TYPE,
  LABEL_LOW_FLOOR_INSULATION_PERIOD,
  LABEL_MPR_BENEFICIARY,
  LABEL_NUMBER_OF_DEPENDENTS,
  LABEL_OIL_HEATING_TYPE_BOILER,
  LABEL_ONE_EURO_BENEFICIARY,
  LABEL_OPERATION_TYPE,
  LABEL_OWNING_TYPE,
  LABEL_PHONE_NUMBER,
  LABEL_POSTAL_CODE,
  LABEL_RADIATOR_TYPE,
  LABEL_REFERENCE_TAX_INCOME,
  LABEL_STREET_NAME,
  LABEL_STREET_NUMBER,
  LABEL_TAX_NOTICE_NUMBER,
  LABEL_TAX_NOTICE_REFERENCE,
  LABEL_WALL_INSULATION_TYPE,
  LABEL_WATER_HEATING_COMMENTS,
  LABEL_WATER_HEATING_TYPE,
  LABEL_WATER_HEATING_TYPE_SPECIFIED,
} from '../labels';

export default function ({ language = LANGUAGES.FR } = {}) {
  return [
    {
      property: 'operationType',
      type: 'string',
      label: LABEL_OPERATION_TYPE({ language }),
      required: true,
    },
    {
      property: 'fullName',
      type: 'string',
      label: LABEL_FULL_NAME({ language }),
      required: true,
    },
    {
      property: 'buildingAge',
      type: 'string',
      label: LABEL_BUILDING_AGE({ language }),
      required: true,
    },
    {
      property: 'livingSpaceArea',
      type: 'number',
      label: LABEL_LIVING_SPACE_AREA({ language }),
      required: true,
    },
    {
      property: 'loftIncluded',
      type: 'boolean',
      label: LABEL_LOFT_INCLUDED({ language }),
      required: true,
    },
    {
      property: 'loftType',
      type: 'string',
      label: LABEL_LOFT_TYPE({ language }),
      required({ loftIncluded }) {
        return loftIncluded;
      },
    },
    {
      property: 'loftArea',
      type: 'number',
      label: LABEL_LOFT_AREA({ language }),
      required({ loftIncluded }) {
        return loftIncluded;
      },
    },
    {
      property: 'loftInsulated',
      type: 'boolean',
      label: LABEL_LOFT_INSULATED({ language }),
      required({ loftIncluded }) {
        return loftIncluded;
      },
    },
    {
      property: 'loftInsulationPeriod',
      type: 'string',
      label: LABEL_LOFT_INSULATION_PERIOD({ language }),
      required({ loftInsulated }) {
        return loftInsulated;
      },
    },
    {
      property: 'loftComments',
      type: 'string',
      label: LABEL_LOFT_COMMENTS({ language }),
    },
    {
      property: 'mprBeneficiary',
      type: 'boolean',
      label: LABEL_MPR_BENEFICIARY({ language }),
      required: true,
    },
    {
      property: 'oneEuroBeneficiary',
      type: 'boolean',
      label: LABEL_ONE_EURO_BENEFICIARY({ language }),
      required: true,
    },
    {
      property: 'occupants',
      type: 'array',
      required: true,
      minLength: 1,
      fields: [
        {
          property: 'taxNoticeNumber',
          type: 'string',
          label: LABEL_TAX_NOTICE_NUMBER({ language }),
          required({ currentIndex }) {
            return currentIndex === 0;
          },
        },
        {
          property: 'taxNoticeReference',
          type: 'string',
          label: LABEL_TAX_NOTICE_REFERENCE({ language }),
          required({ currentIndex }) {
            return currentIndex === 0;
          },
        },
        {
          property: 'referenceTaxIncome',
          type: 'number',
          label: LABEL_REFERENCE_TAX_INCOME({ language }),
          required({ currentIndex }) {
            return currentIndex === 0;
          },
        },
        {
          property: 'birthDate',
          type: 'object',
          label: LABEL_BIRTHDATE({ language }),
          required({ currentIndex }) {
            return currentIndex === 0;
          },
        },
      ],
    },
    {
      property: 'numberOfDependents',
      type: 'number',
      label: LABEL_NUMBER_OF_DEPENDENTS({ language }),
      required: true,
    },
    {
      property: 'streetNumber',
      type: 'string',
      label: LABEL_STREET_NUMBER({ language }),
      required: true,
    },
    {
      property: 'streetName',
      type: 'string',
      label: LABEL_STREET_NAME({ language }),
      required: true,
    },
    {
      property: 'city',
      type: 'string',
      label: LABEL_CITY({ language }),
      required: true,
    },
    {
      property: 'postalCode',
      type: 'string',
      label: LABEL_POSTAL_CODE({ language }),
      required: true,
    },
    {
      property: 'owningType',
      type: 'string',
      label: LABEL_OWNING_TYPE({ language }),
      required: true,
    },
    {
      property: 'wallInsulationType',
      type: 'string',
      label: LABEL_WALL_INSULATION_TYPE({ language }),
      required: true,
    },
    {
      property: 'heatingType',
      type: 'string',
      label: LABEL_HEATING_TYPE({ language }),
      required: true,
    },
    {
      property: 'oilHeatingTypeBoiler',
      type: 'boolean',
      label: LABEL_OIL_HEATING_TYPE_BOILER({ language }),
      required({ heatingType }) {
        return heatingType === HEATING_TYPES.GAS;
      },
    },
    {
      property: 'waterHeatingType',
      type: 'string',
      label: LABEL_WATER_HEATING_TYPE({ language }),
      required: true,
    },
    {
      property: 'waterHeatingTypeSpecified',
      type: 'string',
      label: LABEL_WATER_HEATING_TYPE_SPECIFIED({ language }),
    },
    {
      property: 'basementIncluded',
      type: 'boolean',
      label: LABEL_BASEMENT_INCLUDED({ language }),
      required: true,
    },
    {
      property: 'lowFloorInsulationPeriod',
      type: 'string',
      label: LABEL_LOW_FLOOR_INSULATION_PERIOD({ language }),
      required({ basementIncluded }) {
        return basementIncluded;
      },
    },
    {
      property: 'basementAreaForBoiler',
      type: 'boolean',
      label: LABEL_BASEMENT_AREA_FOR_BOILER({ language }),
      required({ basementIncluded }) {
        return basementIncluded;
      },
    },
    {
      property: 'radiatorType',
      type: 'string',
      label: LABEL_RADIATOR_TYPE({ language }),
    },
    {
      property: 'fireplaceIncluded',
      type: 'boolean',
      label: LABEL_FIREPLACE_INCLUDED({ language }),
    },
    {
      property: 'phone',
      type: 'string',
      dataType: 'phone',
      label: LABEL_PHONE_NUMBER({ language }),
      required: true,
    },
    {
      property: 'email',
      type: 'string',
      dataType: 'email',
      label: LABEL_EMAIL({ language }),
    },
    {
      property: 'comments',
      type: 'string',
      label: LABEL_COMMENTS({ language }),
    },
    {
      property: 'insulationType',
      type: 'string',
      label: LABEL_INSULATION_TYPE({ language }),
      required: true,
    },
    {
      property: 'basementInsulated',
      type: 'boolean',
      label: LABEL_BASEMENT_INSULATED({ language }),
      required({ basementIncluded }) {
        return basementIncluded;
      },
    },
    {
      property: 'boilerReleaseYear',
      type: 'number',
      label: LABEL_BOILER_RELEASE_YEAR({ language }),
    },
    {
      property: 'heatingTypeComments',
      type: 'string',
      label: LABEL_HEATING_TYPE_COMMENTS({ language }),
    },
    {
      property: 'waterHeatingComments',
      type: 'string',
      label: LABEL_WATER_HEATING_COMMENTS({ language }),
    },
  ];
}
