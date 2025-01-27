module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: { node: 'current' }
    }],
    ['@babel/preset-typescript', {
      allowNamespaces: true,
      allowDeclareFields: true,
      onlyRemoveTypeImports: true
    }]
  ],
  plugins: [
    ['@babel/plugin-transform-modules-commonjs', { allowTopLevelThis: true }],
    '@babel/plugin-transform-class-properties',
    '@babel/plugin-transform-private-methods',
    '@babel/plugin-transform-object-rest-spread'
  ]
};
