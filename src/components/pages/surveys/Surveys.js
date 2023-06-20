import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createSurvey, deleteSurvey, generateSurveyReport, getSurveys } from '../../../store/surveys/surveys.slice';
import { FORM_MODES } from '../../../_helpers/enums';
import { LABEL_DELETE, LABEL_DELETE_SURVEY, MODAL_TITLE_SURVEY } from '../../../_helpers/labels';
import { isNonEmptyObject } from '../../../_helpers/dataValidator.helper';
import formValidatorHelper from '../../../_helpers/formValidator.helper';
import { surveyFormFieldsDescriptor } from '../../../_helpers/form_fields_descriptors';
import browserHelper from '../../../_helpers/browser.helper';
import surveyHelper from '../../../_helpers/survey.helper';

import { Divider, HomeContainer } from '../../helpers';
import SurveysStyled from './Surveys.styled';
import SurveysHeader from './core/SurveysHeader';
import SurveysBody from './core/SurveysBody';
import useDisclosure from '../../hooks/useDisclosure';
import useForm from '../../hooks/useForm';
import { Button, Modal } from '../../library';
import useAlert from '../../hooks/useAlert';
import SurveyForm from './core/SurveyForm';

function Surveys() {
  const dispatch = useDispatch();
  const { surveys, requesting } = useSelector((state) => state.core.surveysState);
  const { profile } = useSelector((state) => state.core.authState);
  const surveyModal = useDisclosure();
  const surveyForm = useForm();
  const { showAlert, hideAlert } = useAlert();
  const [selectedSurvey, setSelectedSurvey] = useState({});

  useEffect(() => {
    dispatch(getSurveys());
  }, [dispatch]);

  function handleCreateSurvey() {
    setSelectedSurvey({});
    openSurveyModal({}, { mode: FORM_MODES.CREATION });
  }

  function openSurveyModal(survey = {}, { mode } = {}) {
    surveyForm.setMode(mode);
    surveyForm.resetFormState(survey);
    surveyModal.handleShow();
  }

  function handlePrintSurvey(survey) {
    browserHelper.openUrlInNewTab(survey.fileUrl);
  }

  function handleGenerateSurveyReport(survey) {
    dispatch(generateSurveyReport({ surveyId: survey.id }));
  }

  function handleDeleteSurvey(survey) {
    showAlert({
      message: LABEL_DELETE_SURVEY({ survey }),
      actions: (
        <Button colorScheme="red" onClick={() => processDeleteSurvey(survey)}>
          {LABEL_DELETE()}
        </Button>
      ),
    });
  }

  function handleSubmit() {
    if (isNonEmptyObject(selectedSurvey)) return;
    processCreateSurvey();
  }

  function processCreateSurvey() {
    const { formState } = surveyForm;
    const { validForm, formErrors } = formValidatorHelper.validateForm(formState, surveyFormFieldsDescriptor());
    surveyForm.setFormErrors(formErrors);
    if (validForm) dispatch(createSurvey({ formState, onSurveyCreated: surveyModal.handleHide }));
  }

  function processDeleteSurvey(survey) {
    hideAlert();
    dispatch(deleteSurvey({ surveyId: survey.id }));
  }

  return (
    <HomeContainer>
      <SurveysStyled>
        <SurveysHeader surveys={surveys} profile={profile} onOpenCreateSurveyForm={handleCreateSurvey} />

        <Divider />

        <SurveysBody
          surveys={surveyHelper.formatSurveysForTable(surveys)}
          requesting={requesting}
          profile={profile}
          onPrintSurvey={handlePrintSurvey}
          onGenerateSurveyReport={handleGenerateSurveyReport}
          onDeleteSurvey={handleDeleteSurvey}
        />
      </SurveysStyled>

      {surveyModal.shown && (
        <Modal shown title={MODAL_TITLE_SURVEY()} onHide={surveyModal.handleHide}>
          <SurveyForm mode={surveyForm.mode} formState={surveyForm.formState} formErrors={surveyForm.formErrors} onChange={surveyForm.handleChange} onSubmit={handleSubmit} />
        </Modal>
      )}
    </HomeContainer>
  );
}

export default Surveys;
