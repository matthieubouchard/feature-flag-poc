import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { Account, ACCOUNT_TIER, ACCOUNT_PERMISSION } from '../types';
import { mockAccounts } from './mockData';

interface IAccountAccess {
  selectedAccount: Account;
}

const initialState: IAccountAccess = {
  selectedAccount: mockAccounts.free_account,
};

export const userAccessSlice = createSlice({
  name: 'userAccess',
  initialState,
  reducers: {
    setSelectedAccount: (state, action: PayloadAction<string>) => {
      state.selectedAccount = mockAccounts[action.payload];
    },
  },
});

export const { setSelectedAccount } = userAccessSlice.actions;

const useBaseState = () => useSelector((state: { userAccess: IAccountAccess }) => state.userAccess);

export const selectSelectedAccount = () => createSelector(useBaseState, ({ selectedAccount }) => selectedAccount);

export const selectUserEmail = () => createSelector(selectSelectedAccount(), ({ userEmail }) => userEmail);

export default userAccessSlice.reducer;
