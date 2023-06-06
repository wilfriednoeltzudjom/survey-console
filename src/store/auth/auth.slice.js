import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import authService from './auth.service';
import { startRequesting, stopRequesting } from '../ui/form.slice';
import { processHttpErrorResponse, isNotFoundError } from '../../api';
import sessionHelper from '../../_helpers/session.helper';

const initialState = {
  profile: {},
};

export const signUp = createAsyncThunk('auth/signUp', async (formState, { dispatch, rejectWithValue }) => {
  dispatch(startRequesting());

  try {
    const {
      data: { data: profile },
    } = await authService.signUp(formState);
    dispatch(stopRequesting());
    sessionHelper.createSession();

    return { profile };
  } catch (error) {
    processHttpErrorResponse({ dispatch, error, failureDialogShown: false });

    return rejectWithValue(error?.response?.data);
  }
});

export const signIn = createAsyncThunk('auth/signIn', async (formState, { dispatch, rejectWithValue }) => {
  dispatch(startRequesting());

  try {
    const {
      data: { data: profile },
    } = await authService.signIn(formState);
    dispatch(stopRequesting());
    sessionHelper.createSession();

    return { profile };
  } catch (error) {
    processHttpErrorResponse({ dispatch, error, failureDialogShown: false });

    return rejectWithValue(error?.response?.data);
  }
});

export const getProfile = createAsyncThunk('auth/getProfile', async (_, { dispatch, rejectWithValue }) => {
  try {
    const {
      data: { data: profile },
    } = await authService.getProfile();

    return { profile };
  } catch (error) {
    if (isNotFoundError(error)) dispatch(signOut({ signOutFromServer: false }));

    return rejectWithValue(error?.response?.data);
  }
});

export const signOut = createAsyncThunk('auth/signOut', async ({ signOutFromServer = true } = {}, { dispatch, rejectWithValue }) => {
  dispatch(startRequesting());

  try {
    if (signOutFromServer) await authService.signOut();
    dispatch(stopRequesting());
    sessionHelper.clearSession();

    return {};
  } catch (error) {
    processHttpErrorResponse({ dispatch, error });

    return rejectWithValue(error?.response?.data);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      state.profile = payload.profile;
    });
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      state.profile = payload.profile;
    });
    builder.addCase(getProfile.fulfilled, (state, { payload }) => {
      state.profile = payload.profile;
    });
    builder.addCase(signOut.fulfilled, (state) => {
      state.profile = {};
    });
  },
});

export default authSlice.reducer;
