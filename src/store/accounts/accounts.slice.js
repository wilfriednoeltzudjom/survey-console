import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { processHttpErrorResponse } from '../../api';
import { showSuccessDialog } from '../ui/dialog.slice';
import { startRequesting, stopRequesting } from '../ui/form.slice';
import accountsService from './accounts.service';

const initialState = {
  accounts: [],
  requesting: false,
  analytics: {},
};

export const getAccounts = createAsyncThunk('accounts/getAccounts', async (_, { rejectWithValue }) => {
  try {
    const {
      data: { data: accounts },
    } = await accountsService.getAccounts();

    return { accounts };
  } catch (error) {
    return rejectWithValue(error?.response?.data);
  }
});

export const createAccount = createAsyncThunk('accounts/createAccount', async ({ formState, onAccountCreated }, { dispatch, rejectWithValue }) => {
  dispatch(startRequesting());

  try {
    const {
      data: { data: account, message },
    } = await accountsService.createAccount(formState);
    if (onAccountCreated) onAccountCreated();
    dispatch(stopRequesting());
    dispatch(showSuccessDialog({ message }));

    return { account };
  } catch (error) {
    processHttpErrorResponse({ dispatch, error });

    return rejectWithValue(error?.response?.data);
  }
});

export const deleteAccount = createAsyncThunk('accounts/deleteAccount', async ({ accountId }, { dispatch, rejectWithValue }) => {
  dispatch(startRequesting());

  try {
    const {
      data: { data: account, message },
    } = await accountsService.deleteAccount(accountId);
    dispatch(stopRequesting());
    dispatch(showSuccessDialog({ message }));

    return { account };
  } catch (error) {
    processHttpErrorResponse({ dispatch, error });

    return rejectWithValue(error?.response?.data);
  }
});

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAccounts.pending, (state) => {
      state.requesting = true;
    });
    builder.addCase(getAccounts.fulfilled, (state, { payload }) => {
      state.requesting = false;
      state.accounts = payload.accounts;
    });
    builder.addCase(getAccounts.rejected, (state) => {
      state.requesting = false;
    });

    builder.addCase(createAccount.fulfilled, (state, { payload }) => {
      state.accounts.unshift(payload.account);
    });

    builder.addCase(deleteAccount.fulfilled, (state, { payload }) => {
      state.accounts = state.accounts.filter((account) => account.id !== payload.account.id);
    });
  },
});

export default accountsSlice.reducer;
