import { useCallback } from 'react';
import map from 'lodash-es/map';
import { useDispatch } from 'react-redux';

import reactLogo from '../../assets/react.svg';
import './App.css';

import { mockAccountListOptions } from '../../state/mockData';
import { setSelectedAccount } from '../../state/userAccess.slice';
import { FeatureFlag } from '../FeatureFlag/FeatureFlag';

function App() {
  const dispatch = useDispatch();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.currentTarget.value);
    dispatch(setSelectedAccount(e.currentTarget.value));
  }, []);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <select onChange={handleChange}>
        {map(mockAccountListOptions, (option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      <FeatureFlag featureName="WELCOME">
        <h1 style={{ color: 'white' }}>WELCOME</h1>
      </FeatureFlag>
      <FeatureFlag featureName="GOLD_FEATURE">
        <h1 style={{ color: 'gold' }}>SILVER + GOLD FEATURE</h1>
      </FeatureFlag>
    </>
  );
}

export default App;
