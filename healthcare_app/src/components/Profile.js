
import React, { useEffect } from 'react';

const Profile = () => {

  useEffect(() => {
    // Simulated useEffect logic without Firebase, just a placeholder
    const unsubscribe = () => {
      console.log('Component cleanup');
    };

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      // Simulated logout logic
      console.log('User logged out');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
      <h1>User Profile</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
