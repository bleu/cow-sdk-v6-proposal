/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  testMatch: ['<rootDir>/pkg/**/*.spec.ts', '<rootDir>/pkg/**/*.test.ts'],
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest', { 
      configFile: './babel.config.js'
    }]
  },
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'mjs'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '^ethers$': require.resolve('ethers'),
    '^@cowprotocol/common/(.*)$': '<rootDir>/pkg/cow-common/src/$1',
    '^@cowprotocol/order-book/(.*)$': '<rootDir>/pkg/cow-order-book/src/$1',
    '^@cowprotocol/order-signing/(.*)$': '<rootDir>/pkg/cow-order-signing/src/$1',
    '^@cowprotocol/contracts$': '<rootDir>/node_modules/@cowprotocol/contracts',
    '^@cowprotocol/(.*)$': '<rootDir>/pkg/$1/src',
    '^src/(.*)$': '<rootDir>/pkg/cow-order-book/src/$1',
    '\\.\\./order-book$': '<rootDir>/pkg/cow-order-book/src',
    '\\.\\./common/generated$': '<rootDir>/pkg/cow-common/src/generated',
    '\\.\\./order-signing$': '<rootDir>/pkg/cow-order-signing/src',
    '\\.\\./common/chains$': '<rootDir>/pkg/cow-common/src/chains',
    '\\.\\./utils$': '<rootDir>/pkg/cow-composable/src/utils',
    '\\.\\./api$': '<rootDir>/pkg/cow-order-book/src/api'
  },
  collectCoverage: true,
  coverageDirectory: './coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: './test-results',
      outputName: 'jest.results.json'
    }]
  ],
  rootDir: '.',
  transformIgnorePatterns: [
    'node_modules/(?!(@cowprotocol|@ethersproject|ethers|web3|bn\.js|hash\.js|elliptic|lodash-es)/)'
  ],
  moduleDirectories: ['node_modules', 'src', 'pkg'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
};
