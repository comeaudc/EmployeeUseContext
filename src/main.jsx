import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import EmployeeProvider from './contexts/app_context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EmployeeProvider>
        <App />
    </EmployeeProvider>
  </React.StrictMode>
);
