import React, { useState } from 'react';

export const FeatureFlagContext = React.createContext({});

export const FeatureFlagProvider = ({ children }) => {
  const [features, setFeatures] = useState({
    darkMode: true,
    chatEnabled: true
  });

  return (
    <FeatureFlagContext.Provider value={{ features }}>
      {children}
    </FeatureFlagContext.Provider>
  );
};
