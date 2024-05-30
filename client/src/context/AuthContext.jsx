import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // Initialize currentUser state from localStorage
  const [currentUser, setCurrentUser] = useState(() => {
    const user = localStorage.getItem('user');
    try {
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error('Error parsing user from localStorage', error);
      return null;
    }
  });

  // Function to update currentUser
  const updateUser = (data) => {
    setCurrentUser(data);
  };

  // Sync currentUser with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  // Provide currentUser and updateUser function to children components
  return (
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};