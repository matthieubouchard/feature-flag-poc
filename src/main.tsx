import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { FeatureFlagProvider } from './components/FeatureFlag/FeatureFlagProvider';
import App from './components/App/App';
import store from './state/rootReducer';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <FeatureFlagProvider>
        <App />
      </FeatureFlagProvider>
    </Provider>
  </React.StrictMode>,
);
