export enum ACCOUNT_TIER {
  FREE = 'FREE',
  SILVER = 'SILVER',
  GOLD = 'GOLD',
  PLATINUM = 'PLATINUM',
}

export enum USER_ROLE {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export type Account = {
  id: string;
  tier: ACCOUNT_TIER;
  name: string;
  userEmail: string;
  userRole: USER_ROLE;
};
