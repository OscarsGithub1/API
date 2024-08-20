import React, { useState } from 'react';  // <-- Ensure useState is imported here
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './Login';
import './index.css';

function Main() {
  const [isRegistering, setIsRegistering] = useState(true);

  return (
    <div>
      <button onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? 'Go to Login' : 'Go to Register'}
      </button>
      {isRegistering ? <App /> : <Login />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
