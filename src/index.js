import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components'
import { theme } from './constants/theme'
import App from 'components/App';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-07-phonebook">
        <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);