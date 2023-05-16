export enum ACCOUNT_TIER {
  FREE = 'FREE',
  SILVER = 'SILVER',
  GOLD = 'GOLD',
  PLATINUM = 'PLATINUM',
}

export enum ACCOUNT_PERMISSION {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export type Account = {
  tier: ACCOUNT_TIER;
  name: string;
  userEmail: string;
  role: ACCOUNT_PERMISSION;
};
