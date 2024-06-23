import { useState } from 'react';
export const useCopy = () => {
  const [copiedText, setCopiedText] = useState();
  const copy = async text => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');

      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
    } catch (error) {
      console.error(`Failed copying the text ${text}`, error);
      setCopiedText(null);
    }
  };
  return [copiedText, copy];
};
