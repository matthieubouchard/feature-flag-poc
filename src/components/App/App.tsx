import { useCallback } from 'react';
import map from 'lodash-es/map';
import { useDispatch } from 'react-redux';

import './App.css';

import { mockAccountListOptions } from '../../state/mockData';
import { selectUserEmail, setSelectedAccount } from '../../state/userAccess.slice';
import { FeatureFlag } from '../FeatureFlag/FeatureFlag';
import { useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail());

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      console.log(e.currentTarget.value);
      dispatch(setSelectedAccount(e.currentTarget.value));
    },
    [dispatch],
  );

  return (
    <div style={{ height: '100%' }}>
      <div style={{ width: '100%', position: 'absolute', top: 0, left: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'end', padding: '1rem 3rem' }}>
          <FeatureFlag featureName="ADMIN">
            <button onClick={() => alert('mock admin settings!')}>
              <h5 style={{ color: 'white' }}>Admin Settings</h5>
            </button>
          </FeatureFlag>
          <h6 style={{ display: 'inline', marginLeft: '2rem' }}>{userEmail}</h6>
        </div>
      </div>

      <select onChange={handleChange}>
        {map(mockAccountListOptions, (option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      <h1 style={{ color: '#BCB88A' }}>WELCOME</h1>
      <div>
        <FeatureFlag featureName="SILVER_FEATURE">
          <h1 style={{ color: 'silver' }}>SILVER FEATURE</h1>
        </FeatureFlag>
        <FeatureFlag featureName="GOLD_FEATURE">
          <h1 style={{ color: 'gold' }}>GOLD FEATURE</h1>
        </FeatureFlag>
        <FeatureFlag featureName="PLATINUM_FEATURE">
          <h1
            className="element"
            style={{
              color: 'steelblue',
              padding: '1rem',
              background: 'linear-gradient(to bottom right, red, orange, yellow, green, blue, indigo, violet)',
            }}
          >
            PLATINUM FEATURE
          </h1>
        </FeatureFlag>
      </div>
    </div>
  );
}

export default App;
