module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    '../../node_modules/(?!(react-native|react|react-test-renderer|@react-native|@react-navigation|@react-native-community|react-clone-referenced-element)/)',
  ],
};
