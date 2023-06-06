import React from 'react';
import PropTypes from 'prop-types';

import { LABEL_CREATE_SURVEY, LABELS_SURVEYS, LABEL_DAILY, LABEL_MONTHLY, LABEL_WEEKLY } from '../../../../_helpers/labels';

import { Button, MainCard, Stack, Text, Statistic } from '../../../library';

export default function SurveysHeader({ onOpenCreateSurveyForm }) {
  return (
    <>
      <MainCard>
        <MainCard.Header>
          <Text.Title>{LABELS_SURVEYS()}</Text.Title>
        </MainCard.Header>
        <MainCard.Body>
          <Stack spacing={1.5}>
            <Statistic variant="default" label={LABEL_DAILY()} />
            <Statistic variant="default" label={LABEL_WEEKLY()} />
            <Statistic variant="default" label={LABEL_MONTHLY()} />
          </Stack>
        </MainCard.Body>
        <MainCard.Footer>
          <Button onClick={onOpenCreateSurveyForm}>{LABEL_CREATE_SURVEY()}</Button>
        </MainCard.Footer>
      </MainCard>
    </>
  );
}
SurveysHeader.propTypes = {
  onOpenCreateSurveyForm: PropTypes.func.isRequired,
};
