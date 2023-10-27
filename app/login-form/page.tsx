  'use client';
  import { useState } from 'react';
  import '../globals.css'

  export default function LoginPage() {
    const [token, setToken] = useState(null)
    const [userData, setUserData] = useState({ username: '' })

    const handleLogin = async () => {
      const response = await fetch('http://localhost:3000/api/bff-jwt', {
        method: 'POST',
        body: JSON.stringify({ username: 'melvin', password: 'verylongpassword' }),
      });

      if (response.ok) {
        const data = await response.json();
        setToken(data);
        fetchUserData(data.token)
      } else {
        console.error('Failed to authenticate')
      }
    };

    const fetchUserData = async (token: string) => {
      const response = await fetch('http://localhost:3000/api/bff-user', {
        method: 'POST',
        headers: { authorization: token }
      })

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else {
        console.error('Failed to fetch user data')
      }
    }

    return (
      <div>
        {token ? (
          <div>
            <h1>Using BFF when authentication/authorization</h1>
            <p>Authenticated as {userData && userData.username}</p>
          </div>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>
    );
  }
