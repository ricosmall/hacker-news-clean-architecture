/* config-overrides.js */

const { override, addBabelPlugins } = require('customize-cra');

module.exports = override(
  ...addBabelPlugins(
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    'babel-plugin-transform-typescript-metadata',
    'babel-plugin-parameter-decorator'
  )
);
