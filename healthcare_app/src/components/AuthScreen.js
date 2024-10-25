import React, { useState } from 'react';



const AuthScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Vulnerable to SQL Injection (directly using user input in the SQL query)
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const message = await response.text();
      setLoginMessage(message); // Display unsanitized message (XSS vulnerability)
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      {/* Vulnerable to XSS attack: Displaying unsanitized content */}
      <div dangerouslySetInnerHTML={{ __html: loginMessage }} />
    </div>
  );
};

export default AuthScreen;
