import React from 'react';
import { ToastContainer } from 'react-toastify';
// roteamento da aplicação
import { Router } from 'react-router-dom';

import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';

function App() {
  return (
    <>
      <Router history={history}>
        <Routes />
        <ToastContainer autoClose={3000} className="toast-container" />
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
