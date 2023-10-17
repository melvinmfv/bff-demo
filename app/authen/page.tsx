'use client';
import { useState } from 'react';
import '../globals.css'

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('')

  const handleLogin = async () => {
    const response = await fetch('http://localhost:3000/api/bff-auth', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      setResponse('Authenticated user:' + data.user);
    } else {
      const errorData = await response.json();
      setResponse(errorData.error);
    }
  };

  return (
    <div className='login-form'>
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <div className='result'>Result: {response}</div>
    </div>
  );
}
