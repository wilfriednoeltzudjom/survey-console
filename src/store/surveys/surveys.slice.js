import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { processHttpErrorResponse } from '../../api';
import { showSuccessDialog } from '../ui/dialog.slice';
import { startRequesting, stopRequesting } from '../ui/form.slice';
import surveysService from './surveys.service';

const initialState = {
  surveys: [],
  requesting: false,
  analytics: {},
};

export const getSurveys = createAsyncThunk('surveys/getSurveys', async (_, { rejectWithValue }) => {
  try {
    const {
      data: { data: surveys },
    } = await surveysService.getSurveys();

    return { surveys };
  } catch (error) {
    return rejectWithValue(error?.response?.data);
  }
});

export const createSurvey = createAsyncThunk('surveys/createSurvey', async ({ formState, onSurveyCreated }, { dispatch, rejectWithValue }) => {
  dispatch(startRequesting());

  try {
    const {
      data: { data: survey, message },
    } = await surveysService.createSurvey(formState);
    if (onSurveyCreated) onSurveyCreated();
    dispatch(stopRequesting());
    dispatch(showSuccessDialog({ message }));

    return { survey };
  } catch (error) {
    processHttpErrorResponse({ dispatch, error });

    return rejectWithValue(error?.response?.data);
  }
});

export const deleteSurvey = createAsyncThunk('surveys/deleteSurvey', async ({ surveyId }, { dispatch, rejectWithValue }) => {
  dispatch(startRequesting());

  try {
    const {
      data: { data: survey, message },
    } = await surveysService.deleteSurvey(surveyId);
    dispatch(stopRequesting());
    dispatch(showSuccessDialog({ message }));

    return { survey };
  } catch (error) {
    processHttpErrorResponse({ dispatch, error });

    return rejectWithValue(error?.response?.data);
  }
});

const surveysSlice = createSlice({
  name: 'surveys',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSurveys.pending, (state) => {
      state.requesting = true;
    });
    builder.addCase(getSurveys.fulfilled, (state, { payload }) => {
      state.requesting = false;
      state.surveys = payload.surveys;
    });
    builder.addCase(getSurveys.rejected, (state) => {
      state.requesting = false;
    });

    builder.addCase(createSurvey.fulfilled, (state, { payload }) => {
      state.surveys.unshift(payload.survey);
    });

    builder.addCase(deleteSurvey.fulfilled, (state, { payload }) => {
      state.surveys = state.surveys.filter((survey) => survey.id !== payload.survey.id);
    });
  },
});

export default surveysSlice.reducer;
