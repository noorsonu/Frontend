import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setCurrentUser({ name: payload.name || payload.sub || 'User' });
      } catch (error) {
        console.error('Error parsing token:', error);
        setCurrentUser({ name: 'User' });
      }
    } else {
      setCurrentUser({ name: 'Guest' });
    }
  }, []);

  return { currentUser };
};