import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';

import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AuthProvider >
        <Routes />
      </AuthProvider>      
    </Router>
  );
}

export default App;
