import React from 'react';
import PropTypes from 'prop-types';

import surveyHelper from '../../../../_helpers/survey.helper';
import {
  LABEL_CREATE_SURVEY,
  LABELS_SURVEYS,
  LABEL_DAILY,
  LABEL_MONTHLY,
  LABEL_WEEKLY,
  LABEL_SURVEYS_SUBTITLE,
  LABEL_WELCOME_BACK,
  LABEL_TOTAL,
} from '../../../../_helpers/labels';
import { isNonEmptyObject } from '../../../../_helpers/dataValidator.helper';
import { formatDate } from '../../../../_helpers/date.helper';

import { Button, MainCard, Stack, Text, Statistic } from '../../../library';

export default function SurveysHeader({ surveys = [], profile = {}, onOpenCreateSurveyForm }) {
  return (
    <>
      <MainCard>
        <MainCard.Header>
          <Text.Title>{LABELS_SURVEYS()}</Text.Title>
          {isNonEmptyObject(surveys[0]) && (
            <Text.SubTitle>
              {LABEL_SURVEYS_SUBTITLE()} {formatDate(surveys[0].createdAt)}
            </Text.SubTitle>
          )}
        </MainCard.Header>
        <MainCard.Body>
          <Stack orientation="vertical" spacing={1.5}>
            {isNonEmptyObject(profile) && (
              <Stack spacing={0.5}>
                <Text>{LABEL_WELCOME_BACK()}</Text>
                <Text weight="medium">{profile.fullName} !</Text>
              </Stack>
            )}
            <Stack spacing={1.5}>
              <Statistic variant="default" label={LABEL_DAILY()} value={surveyHelper.filterCurrentDaySurveysCount(surveys)} />
              <Statistic variant="default" label={LABEL_WEEKLY()} value={surveyHelper.filterCurrentWeekSurveysCount(surveys)} />
              <Statistic variant="default" label={LABEL_MONTHLY()} value={surveyHelper.filterCurrentMonthSurveysCount(surveys)} />
              <Statistic variant="default" label={LABEL_TOTAL()} value={surveys.length} />
            </Stack>
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
  surveys: PropTypes.arrayOf(PropTypes.shape({})),
  profile: PropTypes.shape({}),
  onOpenCreateSurveyForm: PropTypes.func.isRequired,
};
