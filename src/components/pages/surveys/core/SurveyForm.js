import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  FORM_MODES,
  BUILDING_AGES,
  YES_NO,
  LOFT_TYPES,
  INSULATION_PERIODS,
  OWNING_TYPES,
  WALL_INSULATIONS,
  HEATING_TYPES,
  WATER_HEATING_TYPES,
  OPERATION_TYPES,
  INSULATION_TYPES,
} from '../../../../_helpers/enums';
import {
  LABEL_BASEMENT_AREA_FOR_BOILER,
  LABEL_BASEMENT_INCLUDED,
  LABEL_BASEMENT_INSULATED,
  LABEL_BIRTHDATE,
  LABEL_BOILER_RELEASE_YEAR,
  LABEL_BUILDING_AGE,
  LABEL_CITY,
  LABEL_EMAIL,
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
  LABEL_NEXT,
  LABEL_NUMBER_OF_DEPENDENTS,
  LABEL_OIL_HEATING_TYPE_BOILER,
  LABEL_ONE_EURO_BENEFICIARY,
  LABEL_OPERATION_TYPE,
  LABEL_OWNING_TYPE,
  LABEL_PHONE_NUMBER,
  LABEL_POSTAL_CODE,
  LABEL_PREV,
  LABEL_REFERENCE_TAX_INCOME,
  LABEL_SAVE,
  LABEL_STREET_NAME,
  LABEL_STREET_NUMBER,
  LABEL_TAX_NOTICE_NUMBER,
  LABEL_TAX_NOTICE_REFERENCE,
  LABEL_TITLE_CUSTOMER_INFORMATION,
  LABEL_TITLE_HEATING,
  LABEL_TITLE_INSULATION,
  LABEL_TITLE_TAXATION,
  LABEL_WALL_INSULATION_TYPE,
  LABEL_WATER_HEATING_COMMENTS,
  LABEL_WATER_HEATING_TYPE,
  SUB_LABEL_OIL_HEATING_TYPE_BOILER,
} from '../../../../_helpers/labels';
import { formPropTypes } from '../../../../_helpers/propTypes.schemas';
import { formatSelectOptions, toSelectOption } from '../../../../_helpers/library.helper';
import { isNullishOrEmpty } from '../../../../_helpers/dataValidator.helper';

import { Form } from '../../../helpers';
import { Button, Field, Stack } from '../../../library';
import { Stepper } from '../../../library/stepper/Stepper';

const steps = [
  { position: 1, title: LABEL_TITLE_CUSTOMER_INFORMATION() },
  { position: 2, title: LABEL_TITLE_INSULATION() },
  { position: 3, title: LABEL_TITLE_HEATING() },
  { position: 4, title: LABEL_TITLE_TAXATION() },
];

export default function SurveyForm({ mode, formState, formErrors, onChange, onSubmit }) {
  const { requesting } = useDispatch((state) => state.ui.formState);
  const [activeStep, setActiveStep] = useState(steps[0]);

  function handleOccupantChange({ index, name, value }) {
    let { occupants = [] } = { ...formState };
    if (isNullishOrEmpty(occupants[index])) {
      occupants[index] = {};
    }
    occupants[index][name] = value;
    onChange({ name: 'occupants', value: occupants });
  }

  function isSectionActive(step) {
    return activeStep.position === step.position;
  }

  function handlePrev() {
    setActiveStep(steps[activeStep.position - 2]);
  }

  function handleNext() {
    setActiveStep(steps[activeStep.position]);
  }

  function handleSubmit(evt) {
    if (evt) evt.preventDefault();
    if (requesting) return;
    onSubmit();
  }

  return (
    <Form>
      <Form.Body>
        <Stepper steps={steps} activeStep={activeStep} />

        <Form.Section active={isSectionActive(steps[0])}>
          <Form.Group>
            <Field fluid type="text" name="fullName" label={LABEL_FULL_NAME()} defaultValue={formState.fullName} error={formErrors.fullName} onChange={onChange} />
          </Form.Group>
          <Form.Group>
            <Field
              fluid
              type="select"
              name="buildingAge"
              label={LABEL_BUILDING_AGE()}
              options={formatSelectOptions(BUILDING_AGES, { [BUILDING_AGES.MORE_THAN_FIFTEEN_YEARS]: 'green', [BUILDING_AGES.LESS_THAN_FIFTEEN_YEARS]: 'red' })}
              defaultOption={toSelectOption(formState.buildingAge)}
              error={formErrors.buildingAge}
              disabled={mode === FORM_MODES.EDITION}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Field
              fluid
              type="number"
              name="livingSpaceArea"
              label={LABEL_LIVING_SPACE_AREA()}
              defaultValue={formState.livingSpaceArea}
              error={formErrors.livingSpaceArea}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Field
              fluid
              type="select"
              name="owningType"
              label={LABEL_OWNING_TYPE()}
              options={formatSelectOptions(OWNING_TYPES, { [OWNING_TYPES.OWNER_OCCUPANT]: 'green' })}
              defaultOption={toSelectOption(formState.owningType)}
              error={formErrors.owningType}
              disabled={mode === FORM_MODES.EDITION}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Field
              fluid
              type="select"
              name="mprBeneficiary"
              label={LABEL_MPR_BENEFICIARY()}
              options={formatSelectOptions(YES_NO, { [YES_NO.YES]: 'red', [YES_NO.NO]: 'green' })}
              defaultOption={toSelectOption(formState.mprBeneficiary)}
              error={formErrors.mprBeneficiary}
              disabled={mode === FORM_MODES.EDITION}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Field
              fluid
              type="select"
              name="oneEuroBeneficiary"
              label={LABEL_ONE_EURO_BENEFICIARY()}
              options={formatSelectOptions(YES_NO, { [YES_NO.YES]: 'red', [YES_NO.NO]: 'green' })}
              defaultOption={toSelectOption(formState.oneEuroBeneficiary)}
              error={formErrors.oneEuroBeneficiary}
              disabled={mode === FORM_MODES.EDITION}
              onChange={onChange}
            />
          </Form.Group>
        </Form.Section>

        <Form.Section active={isSectionActive(steps[1])}>
          <Form.Group>
            <Field
              fluid
              type="select"
              name="insulationType"
              label={LABEL_INSULATION_TYPE()}
              options={formatSelectOptions(INSULATION_TYPES)}
              defaultOption={toSelectOption(formState.insulationType)}
              error={formErrors.insulationType}
              disabled={mode === FORM_MODES.EDITION}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Field
              fluid
              type="select"
              name="loftIncluded"
              label={LABEL_LOFT_INCLUDED()}
              options={formatSelectOptions(YES_NO, { [YES_NO.YES]: 'green', [YES_NO.NO]: 'red' })}
              defaultOption={toSelectOption(formState.loftIncluded)}
              error={formErrors.loftIncluded}
              disabled={mode === FORM_MODES.EDITION}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Field fluid type="number" name="loftArea" label={LABEL_LOFT_AREA()} defaultValue={formState.loftArea} error={formErrors.loftArea} onChange={onChange} />
          </Form.Group>
          <Form.Group>
            <Field
              fluid
              type="select"
              name="loftType"
              label={LABEL_LOFT_TYPE()}
              options={formatSelectOptions(LOFT_TYPES, {
                [LOFT_TYPES.LOST_ACCESSIBLE]: 'green',
                [LOFT_TYPES.LOST_INACCESSIBLE]: 'red',
                [LOFT_TYPES.FURNISHED]: 'red',
                [LOFT_TYPES.CONVERTIBLE]: 'green',
              })}
              defaultOption={toSelectOption(formState.loftType)}
              error={formErrors.loftType}
              disabled={mode === FORM_MODES.EDITION}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Field
              fluid
              type="select"
              name="loftInsulated"
              label={LABEL_LOFT_INSULATED()}
              options={formatSelectOptions(YES_NO, { [YES_NO.YES]: 'red', [YES_NO.NO]: 'green' })}
              defaultOption={toSelectOption(formState.loftInsulated)}
              error={formErrors.loftInsulated}
              disabled={mode === FORM_MODES.EDITION}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Field
              fluid
              type="select"
              name="loftInsulationPeriod"
              label={LABEL_LOFT_INSULATION_PERIOD()}
              options={formatSelectOptions(INSULATION_PERIODS, { [INSULATION_PERIODS.MORE_THAN_TEN_YEARS]: 'green', [INSULATION_PERIODS.LESS_THAN_TEN_YEARS]: 'red' })}
              defaultOption={toSelectOption(formState.loftInsulationPeriod)}
              error={formErrors.loftInsulationPeriod}
              disabled={mode === FORM_MODES.EDITION}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Field
              fluid
              type="textarea"
              name="loftComments"
              label={LABEL_LOFT_COMMENTS()}
              defaultValue={formState.loftComments}
              error={formErrors.loftComments}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Field
              fluid
              type="select"
              name="wallInsulationType"
              label={LABEL_WALL_INSULATION_TYPE()}
              options={formatSelectOptions(WALL_INSULATIONS, { [WALL_INSULATIONS.ITE]: 'red', [WALL_INSULATIONS.ITI]: 'red', [WALL_INSULATIONS.NONE]: 'green' })}
              defaultOption={toSelectOption(formState.wallInsulationType)}
              error={formErrors.wallInsulationType}
              disabled={mode === FORM_MODES.EDITION}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Divider />

          <Form.Group>
            <Field
              fluid
              type="select"
              name="basementIncluded"
              label={LABEL_BASEMENT_INCLUDED()}
              options={formatSelectOptions(YES_NO, { [YES_NO.YES]: 'green', [YES_NO.NO]: 'red' })}
              defaultOption={toSelectOption(formState.basementIncluded)}
              error={formErrors.basementIncluded}
              disabled={mode === FORM_MODES.EDITION}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Field
              fluid
              type="select"
              name="basementInsulated"
              label={LABEL_BASEMENT_INSULATED()}
              options={formatSelectOptions(YES_NO, { [YES_NO.YES]: 'red', [YES_NO.NO]: 'green' })}
              defaultOption={toSelectOption(formState.basementInsulated)}
              error={formErrors.basementInsulated}
              disabled={mode === FORM_MODES.EDITION}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Field
              fluid
              type="select"
              name="lowFloorInsulationPeriod"
              label={LABEL_LOW_FLOOR_INSULATION_PERIOD()}
              options={formatSelectOptions(INSULATION_PERIODS, { [INSULATION_PERIODS.MORE_THAN_TEN_YEARS]: 'green', [INSULATION_PERIODS.LESS_THAN_TEN_YEARS]: 'red' })}
              defaultOption={toSelectOption(formState.lowFloorInsulationPeriod)}
              error={formErrors.lowFloorInsulationPeriod}
              disabled={mode === FORM_MODES.EDITION}
              onChange={onChange}
            />
          </Form.Group>
        </Form.Section>

        <Form.Section active={isSectionActive(steps[2])}>
          <Form.Group>
            <Field
              fluid
              type="select"
              name="heatingType"
              label={LABEL_HEATING_TYPE()}
              options={formatSelectOptions(HEATING_TYPES, {
                [HEATING_TYPES.WOOD]: 'gold',
                [HEATING_TYPES.GAS]: 'silver',
                [HEATING_TYPES.OIL]: 'green',
                [HEATING_TYPES.HEATING_PUMP]: 'red',
                [HEATING_TYPES.ELECTRICITY]: 'red',
              })}
              defaultOption={toSelectOption(formState.heatingType)}
              error={formErrors.heatingType}
              disabled={mode === FORM_MODES.EDITION}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Field
              fluid
              type="select"
              name="oilHeatingTypeBoiler"
              label={LABEL_OIL_HEATING_TYPE_BOILER()}
              comment={SUB_LABEL_OIL_HEATING_TYPE_BOILER()}
              options={formatSelectOptions(YES_NO, { [YES_NO.YES]: 'red', [YES_NO.NO]: 'green' })}
              defaultOption={toSelectOption(formState.oilHeatingTypeBoiler)}
              error={formErrors.oilHeatingTypeBoiler}
              disabled={mode === FORM_MODES.EDITION}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Field
              fluid
              type="number"
              name="boilerReleaseYear"
              label={LABEL_BOILER_RELEASE_YEAR()}
              defaultValue={formState.boilerReleaseYear}
              error={formErrors.boilerReleaseYear}
              disabled={mode === FORM_MODES.EDITION}
              preventDecimal
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Field
              fluid
              type="textarea"
              name="heatingTypeComments"
              label={LABEL_HEATING_TYPE_COMMENTS()}
              defaultValue={formState.heatingTypeComments}
              error={formErrors.heatingTypeComments}
              disabled={mode === FORM_MODES.EDITION}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Field
              fluid
              type="select"
              name="waterHeatingType"
              label={LABEL_WATER_HEATING_TYPE()}
              options={formatSelectOptions(WATER_HEATING_TYPES)}
              defaultOption={toSelectOption(formState.waterHeatingType)}
              error={formErrors.waterHeatingType}
              disabled={mode === FORM_MODES.EDITION}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Field
              fluid
              type="textarea"
              name="waterHeatingComments"
              label={LABEL_WATER_HEATING_COMMENTS()}
              defaultValue={formState.waterHeatingComments}
              error={formErrors.waterHeatingComments}
              disabled={mode === FORM_MODES.EDITION}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Divider />

          <Form.Group>
            <Field
              fluid
              type="select"
              name="basementAreaForBoiler"
              label={LABEL_BASEMENT_AREA_FOR_BOILER()}
              options={formatSelectOptions(YES_NO, { [YES_NO.YES]: 'green', [YES_NO.NO]: 'red' })}
              defaultOption={toSelectOption(formState.basementAreaForBoiler)}
              error={formErrors.basementAreaForBoiler}
              disabled={mode === FORM_MODES.EDITION}
              onChange={onChange}
            />
          </Form.Group>
        </Form.Section>

        <Form.Section active={isSectionActive(steps[3])}>
          <Form.Group>
            <Field
              fluid
              type="text"
              name="taxNoticeNumber"
              index={0}
              label={LABEL_TAX_NOTICE_NUMBER()}
              defaultValue={formState.taxNoticeNumber}
              error={formErrors.occupants?.['0']?.taxNoticeNumber}
              onChange={handleOccupantChange}
            />
          </Form.Group>
          <Form.Group>
            <Field
              fluid
              type="text"
              name="taxNoticeReference"
              index={0}
              label={LABEL_TAX_NOTICE_REFERENCE()}
              defaultValue={formState.taxNoticeReference}
              error={formErrors.occupants?.['0']?.taxNoticeReference}
              onChange={handleOccupantChange}
            />
          </Form.Group>
          <Form.Group>
            <Field
              fluid
              type="number"
              name="referenceTaxIncome"
              index={0}
              label={LABEL_REFERENCE_TAX_INCOME()}
              defaultValue={formState.referenceTaxIncome}
              error={formErrors.occupants?.['0']?.referenceTaxIncome}
              onChange={handleOccupantChange}
            />
          </Form.Group>
          <Form.Group>
            <Field
              fluid
              type="date"
              name="birthDate"
              index={0}
              label={LABEL_BIRTHDATE()}
              defaultValue={formState.birthDate}
              error={formErrors.occupants?.['0']?.birthDate}
              onChange={handleOccupantChange}
            />
          </Form.Group>
          <Form.Group>
            <Field
              fluid
              type="number"
              name="numberOfDependents"
              label={LABEL_NUMBER_OF_DEPENDENTS()}
              defaultValue={formState.numberOfDependents}
              error={formErrors.numberOfDependents}
              preventDecimal
              onChange={onChange}
            />
          </Form.Group>

          <Form.Text>Si le foyer se compose de plusieurs avis d&apos;imposition</Form.Text>
          <Form.Group>
            <Field
              fluid
              type="number"
              name="referenceTaxIncome"
              index={1}
              label={LABEL_REFERENCE_TAX_INCOME()}
              defaultValue={formState.referenceTaxIncome}
              error={formErrors.occupants?.['1']?.referenceTaxIncome}
              onChange={handleOccupantChange}
            />
          </Form.Group>

          <Form.Row radio="1fr 2fr">
            <Form.Group>
              <Field
                fluid
                type="text"
                name="streetNumber"
                label={LABEL_STREET_NUMBER()}
                defaultValue={formState.streetNumber}
                error={formErrors.streetNumber}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group>
              <Field fluid type="text" name="streetName" label={LABEL_STREET_NAME()} defaultValue={formState.streetName} error={formErrors.streetName} onChange={onChange} />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group>
              <Field fluid type="text" name="city" label={LABEL_CITY()} defaultValue={formState.city} error={formErrors.city} onChange={onChange} />
            </Form.Group>
            <Form.Group>
              <Field fluid type="text" name="postalCode" label={LABEL_POSTAL_CODE()} defaultValue={formState.postalCode} error={formErrors.postalCode} onChange={onChange} />
            </Form.Group>
          </Form.Row>

          <Form.Group>
            <Field fluid type="tel" name="phone" label={LABEL_PHONE_NUMBER()} defaultValue={formState.phone} error={formErrors.phone} required onChange={onChange} />
          </Form.Group>
          <Form.Group>
            <Field fluid type="text" name="email" label={LABEL_EMAIL()} defaultValue={formState.email} error={formErrors.email} onChange={onChange} />
          </Form.Group>
          <Form.Group>
            <Field
              fluid
              type="select"
              name="operationType"
              label={LABEL_OPERATION_TYPE()}
              options={formatSelectOptions(OPERATION_TYPES)}
              defaultOption={toSelectOption(formState.operationType)}
              error={formErrors.operationType}
              disabled={mode === FORM_MODES.EDITION}
              onChange={onChange}
            />
          </Form.Group>
        </Form.Section>

        <Form.Divider />

        <Stack justify="space-between">
          <Button disabled={activeStep.position === 1} colorScheme="primary" onClick={handlePrev}>
            {LABEL_PREV()}
          </Button>
          <Button disabled={activeStep.position === steps.length} colorScheme="primary" onClick={handleNext}>
            {LABEL_NEXT()}
          </Button>
        </Stack>
      </Form.Body>

      <Form.Footer>
        <Form.Group>
          <Button disabled={requesting} colorScheme="secondary" onClick={handleSubmit}>
            {LABEL_SAVE()}
          </Button>
        </Form.Group>
      </Form.Footer>
    </Form>
  );
}
SurveyForm.propTypes = formPropTypes;
