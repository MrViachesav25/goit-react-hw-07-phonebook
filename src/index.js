import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* За допомогою persistor дані з локального сховища попадають в стейт */}
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);
