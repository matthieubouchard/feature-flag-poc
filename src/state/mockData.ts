import keyBy from 'lodash-es/keyBy';
import { Account, USER_ROLE, ACCOUNT_TIER } from '../types';

export const mockAccountListOptions: Account[] = [
  {
    id: 'free_account',
    tier: ACCOUNT_TIER.FREE,
    name: 'FREE Account',
    userEmail: 'matthew@brss_llc.com',
    userRole: USER_ROLE.USER,
  },
  {
    id: 'silver_account',
    tier: ACCOUNT_TIER.SILVER,
    name: 'SILVER Account',
    userEmail: 'matthew@brss_llc.com',
    userRole: USER_ROLE.ADMIN,
  },
  {
    id: 'gold_account',
    tier: ACCOUNT_TIER.GOLD,
    name: 'GOLD Account',
    userEmail: 'matthew@brss_llc.com',
    userRole: USER_ROLE.ADMIN,
  },
  {
    id: 'platinum_account',
    tier: ACCOUNT_TIER.PLATINUM,
    name: 'PLATINUM Account',
    userEmail: 'matthew@brss_llc.com',
    userRole: USER_ROLE.USER,
  },
];

export const mockAccounts: Record<string, Account> = keyBy(mockAccountListOptions, 'id');
