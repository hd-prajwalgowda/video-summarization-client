import React from 'react';
import App from './App';
import { AuthProvider } from './provider/AuthProvider';
function Wrapper() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

export default Wrapper;
