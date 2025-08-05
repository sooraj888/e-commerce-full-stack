const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(__dirname, '../../');

const config = getDefaultConfig(projectRoot);

module.exports = mergeConfig(config, {
  projectRoot,
  watchFolders: [workspaceRoot],
  resolver: {
    nodeModulesPaths: [path.join(workspaceRoot, 'node_modules')],
  },
});
