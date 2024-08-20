import { useState } from 'react';
import { registerUser } from './services/registerUser'; // Import the function

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent page refresh

    const result = await registerUser(email, password); // Call the function

    if (result.success) {
      setResponseMessage(result.message);
    } else {
      setResponseMessage(result.message);
    }
  };

  return (
    <div className="App">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Register</button>
      </form>

      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}

export default App;
