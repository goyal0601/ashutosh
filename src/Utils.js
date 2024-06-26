const values = { 1: '3232' };

export function saveValues() {
  return {
    getItems: () => {
      return values;
    },
    getItem: i => {
      return values[i] || null;
    },
    setItem: (value, key) => {
      values[key] = value;
    }
  };
}
