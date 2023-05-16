# Thanks for taking a look!

## Overview

This is POC for an implmentation I recently did for feature flagging. 

### Requirements: 
  - The application allows a single user to be part of many accounts
  - A user can have a different role per account
  - Accounts can have different subscription tiers
  - When a user switches between accounts - they should see the feature set - both role based and account subscription features update

### Architecture:
  - Create `FeatureFlagProvider` and `FeatureFlag` as HOCs so that if we decide to use a different provider in the future, we have minimal refactor
  - `FeatureFlag` subscribes to properties on application state that are dependent on the `selectedAccount` in this case, affected by the dropdown `onChange` event
    - the properties that change per account are `ACCOUNT_TIER` and `USER_ROLE`
    - in the application, I have a hook that refreshes these properties from the api on every route change, and any functionality that depends on these flags is also protected by the api


### Example
```typescript
export const FeatureFlag: React.FC<Props> = ({ children, featureName, attributes = {} }) => {
  const currentAccount = useSelector(selectSelectedAccount());

  return (
    <SplitTreatments
      names={[featureName]}
      attributes={{ ...attributes, ACCOUNT_TIER: currentAccount.tier, USER_ROLE: currentAccount.userRole }}
    >
      {({ treatments }) => {
        const treatment = treatments[featureName]?.treatment;

        return treatment === 'on' ? children : null;
      }}
    </SplitTreatments>
  );
};
```

