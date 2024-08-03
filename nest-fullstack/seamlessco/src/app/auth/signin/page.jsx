"use client"

import { useState } from 'react';
//import { useAuth } from '../components/context/AuthContext.jsx';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 //const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await login(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Sign In</button>
    </form>
  );
}
