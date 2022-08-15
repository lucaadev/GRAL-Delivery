import React from 'react';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AlertTemplate from 'react-alert-template-basic';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const options = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '30px',
  color: '#fff',
  type: 'error',
  transition: transitions.SCALE,
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AlertProvider template={ AlertTemplate } { ...options }>
        <App />
      </AlertProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
