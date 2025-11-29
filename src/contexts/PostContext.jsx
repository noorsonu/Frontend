import React, { createContext, useContext, useState } from 'react';

const PostContext = createContext();

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePostContext must be used within a PostProvider');
  }
  return context;
};

export const PostProvider = ({ children }) => {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const triggerRefresh = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <PostContext.Provider value={{ refreshTrigger, triggerRefresh }}>
      {children}
    </PostContext.Provider>
  );
};