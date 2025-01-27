module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: { node: 'current' },
      modules: 'commonjs'
    }],
    ['@babel/preset-typescript', {
      allowNamespaces: true,
      allowDeclareFields: true,
      onlyRemoveTypeImports: true,
      isTSX: true,
      allExtensions: true
    }]
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    ['@babel/plugin-transform-modules-commonjs', {
      allowTopLevelThis: true,
      strict: true,
      strictMode: true
    }]
  ]
};
