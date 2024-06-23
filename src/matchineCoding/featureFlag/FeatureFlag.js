import React from 'react';
import { FeatureFlagProvider } from './FeatureFlagContext';
import FeatureFlagExample from './FeatureFlagExample';

const FeatureFlag = () => {
  return (
    <FeatureFlagProvider>
      <FeatureFlagExample />
    </FeatureFlagProvider>
  );
};

export default FeatureFlag;
