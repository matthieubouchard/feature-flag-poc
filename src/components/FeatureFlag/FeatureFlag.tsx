import { SplitTreatments } from '@splitsoftware/splitio-react';
import { useSelector } from 'react-redux';

import { selectSelectedAccount } from '../../state/userAccess.slice';

interface Props {
  children: JSX.Element | null;
  featureName: string;
  attributes?: Record<string, string>;
}

export const FeatureFlag: React.FC<Props> = ({ children, featureName, attributes = {} }) => {
  const currentAccount = useSelector(selectSelectedAccount());
  console.log(currentAccount);

  return (
    <SplitTreatments
      names={[featureName]}
      attributes={{ ...attributes, ACCOUNT_TIER: currentAccount.tier, USER_ROLE: currentAccount.role }}
    >
      {({ treatments }) => {
        console.log(treatments);
        const treatment = treatments[featureName]?.treatment;

        return treatment === 'on' ? children : null;
      }}
    </SplitTreatments>
  );
};
