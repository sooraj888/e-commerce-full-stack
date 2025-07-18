import baseConfig from '@repo/jest-config';
export default {
  ...baseConfig,
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
};
