module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: { node: 'current' },
      modules: 'commonjs'
    }],
    ['@babel/preset-typescript', {
      allowNamespaces: true,
      allowDeclareFields: true,
      onlyRemoveTypeImports: true
    }]
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    ['@babel/plugin-transform-modules-commonjs', {
      allowTopLevelThis: true,
      strict: true,
      strictMode: true
    }]
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(@cowprotocol|@ethersproject|ethers|web3|bn\.js|hash\.js|elliptic|lodash-es)/)'
  ]
};
