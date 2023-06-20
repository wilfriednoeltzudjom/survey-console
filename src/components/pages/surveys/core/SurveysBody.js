import React from 'react';
import PropTypes from 'prop-types';

import surveyHelper from '../../../../_helpers/survey.helper';
import {
  LABEL_CREATED_AT,
  LABEL_CREATED_BY,
  LABEL_CUSTOMER,
  LABEL_MENU_ACTION_DELETE,
  LABEL_MENU_ACTION_PRINT,
  LABEL_MENU_ACTION_REGENERATE,
  LABEL_NO_SURVEYS,
  LABEL_PREMIUM_PROFILE,
  LABEL_REFERENCE,
  LABEL_TAX_NOTICE_NUMBER,
  LABEL_TAX_NOTICE_REFERENCE,
} from '../../../../_helpers/labels';
import { isNonEmptyObject, isNonEmptyString, isNullishOrEmpty } from '../../../../_helpers/dataValidator.helper';
import { ROLES } from '../../../../_helpers/enums';

import { Badge, Card, Icon, Table, Text } from '../../../library';

export default function SurveysBody({ surveys = [], requesting = false, profile = {}, onPrintSurvey, onGenerateSurveyReport, onDeleteSurvey }) {
  const additionColumns = [];
  if (profile?.role === ROLES.ADMINISTRATOR) {
    additionColumns.push({
      title: LABEL_CREATED_BY(),
      key: 'createdBy',
      dataIndex: 'createdBy',
      sortable: true,
      formatter: formatCreatedBy,
      render({ createdBy = {} }) {
        return <Text weight="medium">{formatCreatedBy(createdBy)}</Text>;
      },
    });
  }

  return (
    <Card>
      <Table
        columns={[
          {
            title: LABEL_REFERENCE(),
            key: 'reference',
            dataIndex: 'reference',
            dataType: 'code',
            sortable: true,
          },
          {
            title: LABEL_CREATED_AT(),
            key: 'createdAt',
            dataIndex: 'createdAt',
            dataType: 'date',
            sortable: true,
          },
          {
            title: LABEL_CUSTOMER(),
            key: 'customer',
            dataIndex: 'customer',
            sortable: true,
          },
          {
            title: LABEL_TAX_NOTICE_NUMBER(),
            key: 'taxNoticeNumber',
            dataIndex: 'taxNoticeNumber',
          },
          {
            title: LABEL_TAX_NOTICE_REFERENCE(),
            key: 'taxNoticeReference',
            dataIndex: 'taxNoticeReference',
          },
          {
            title: LABEL_PREMIUM_PROFILE(),
            key: 'householdSituation',
            dataIndex: 'householdSituation',
            sortable: true,
            formatter: surveyHelper.translateHouseholdSituation,
            render: ({ householdSituation }) => (
              <Badge colorScheme={surveyHelper.getHouseholdSituationColorScheme(householdSituation)}>{surveyHelper.translateHouseholdSituation(householdSituation)}</Badge>
            ),
          },
          ...additionColumns,
        ]}
        noDataMessage={LABEL_NO_SURVEYS()}
        dataSource={surveys}
        requesting={requesting}
        actions={[
          {
            icon: <Icon name="print" />,
            label: LABEL_MENU_ACTION_PRINT(),
            isDisabled(survey) {
              return isNullishOrEmpty(survey.fileUrl);
            },
            onClick: onPrintSurvey,
          },
          {
            icon: <Icon name="refresh" />,
            label: LABEL_MENU_ACTION_REGENERATE(),
            isDisabled(survey) {
              return isNonEmptyString(survey.fileUrl);
            },
            onClick: onGenerateSurveyReport,
          },
          { icon: <Icon name="delete" />, label: LABEL_MENU_ACTION_DELETE(), onClick: onDeleteSurvey },
        ]}
      />
    </Card>
  );
}
SurveysBody.propTypes = {
  surveys: PropTypes.arrayOf(PropTypes.shape({})),
  requesting: PropTypes.bool,
  profile: PropTypes.shape({}),
  onPrintSurvey: PropTypes.func.isRequired,
  onGenerateSurveyReport: PropTypes.func.isRequired,
  onDeleteSurvey: PropTypes.func.isRequired,
};

function formatCreatedBy(createdBy) {
  return isNonEmptyObject(createdBy) ? createdBy.lastName : '';
}
