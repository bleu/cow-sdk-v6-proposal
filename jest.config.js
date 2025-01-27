/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  projects: ['<rootDir>/pkg/*'],
  collectCoverage: true,
  coverageDirectory: './coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: './test-results',
      outputName: 'jest.results.json',
      usePathForSuiteName: true,
      ancestorSeparator: ' › ',
      classNameTemplate: '{classname}',
      titleTemplate: '{title}'
    }]
  ],
  testEnvironment: 'node',
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest', {
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
      ]
    }]
  },
  moduleNameMapper: {
    '^@cowprotocol/(.*)$': '<rootDir>/pkg/$1/src',
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '^(\\.{1,2}/.*)\\.ts$': '$1',
    '^../common(.*)$': '<rootDir>/pkg/cow-common/src$1',
    '^../order-book(.*)$': '<rootDir>/pkg/cow-order-book/src$1',
    '^../contracts(.*)$': '<rootDir>/pkg/contracts/src$1'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@cowprotocol|@ethersproject|ethers)/)'
  ],
  moduleDirectories: ['node_modules', 'src', 'pkg'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
};
