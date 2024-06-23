import React from 'react';
import { FeatureFlagContext } from './FeatureFlagContext';

const Feature = ({ feature, children, value }) => {
  const { features } = React.useContext(FeatureFlagContext);
  return features[feature] === value ? children : null;
};

const FeatureFlagExample = () => {
  return (
    <div>
      <Feature feature="darkMode" value={false}>
        In dark mode
      </Feature>
      <Feature feature="chatEnabled" value={true}>
        In chatbot
      </Feature>
    </div>
  );
};

export default FeatureFlagExample;
