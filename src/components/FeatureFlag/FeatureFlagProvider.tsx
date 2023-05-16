import * as React from 'react';
import { SplitFactory, SplitClient, SplitSdk } from '@splitsoftware/splitio-react';
import { useSelector } from 'react-redux';
import { ISplitClientChildProps } from '@splitsoftware/splitio-react/types/types';
import { selectUserEmail } from '../../state/userAccess.slice';

// import { selectUserEmail } from "../../features/userData/userDataSlice";

// Split.io requires a `key` value to be passed that will help identify a given user.
// We are enabling a few different options. The preferred option, if a user is
// authenticated and has a token, we will pass the user's email as the key.
// if the user is not authenticated, we will assign the user as anonymous

interface Props {
  children: JSX.Element | ((props: ISplitClientChildProps) => JSX.Element | null) | null;
}

export const FeatureFlagProvider: React.FC<Props> = ({ children }) => {
  const userEmail = useSelector(selectUserEmail());
  const factory = SplitSdk({
    core: {
      authorizationKey: 'rn412lhcvjb0v4vqg6gcjmb6g90lp6l11bom',
      key: 'anonymous',
    },
  });

  return (
    <SplitFactory factory={factory}>
      <SplitClient splitKey={userEmail || 'anonymous'}>{children}</SplitClient>
    </SplitFactory>
  );
};
