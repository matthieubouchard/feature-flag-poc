import map from 'lodash-es/map';
import { Account, ACCOUNT_PERMISSION, ACCOUNT_TIER } from '../types';

export const mockAccounts: Record<string, Account> = {
  free_account: {
    tier: ACCOUNT_TIER.FREE,
    name: 'FREE Account',
    userEmail: 'user@free.com',
    role: ACCOUNT_PERMISSION.USER,
  },
  silver_account: {
    tier: ACCOUNT_TIER.SILVER,
    name: 'SILVER Account',
    userEmail: 'admin@silver.com',
    role: ACCOUNT_PERMISSION.ADMIN,
  },
  gold_account: {
    tier: ACCOUNT_TIER.GOLD,
    name: 'GOLD Account',
    userEmail: 'admin@gold.com',
    role: ACCOUNT_PERMISSION.ADMIN,
  },
  platinum_account: {
    tier: ACCOUNT_TIER.PLATINUM,
    name: 'PLATINUM Account',
    userEmail: 'user@platinum.com',
    role: ACCOUNT_PERMISSION.USER,
  },
};

export const mockAccountListOptions = map(mockAccounts, ({ name }, key) => ({
  id: key,
  name,
}));
