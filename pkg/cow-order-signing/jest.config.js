/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.json',
        isolatedModules: true,
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!node-rate-limiter)'],
  moduleNameMapper: {
    '^@cowprotocol/subgraph/(.*)$': '<rootDir>/src/$1',
    '^@cowprotocol/common$': '<rootDir>/../../pkg/cow-common/src/index.ts',
    '^@cowprotocol/common/(.*)$': '<rootDir>/../../pkg/cow-common/src/$1',
    '^@cowprotocol/config$': '<rootDir>/../../pkg/cow-config/src/index.ts',
    '^@cowprotocol/config/(.*)$': '<rootDir>/../../pkg/cow-config/src/$1',
    '^@cowprotocol/order-book$': '<rootDir>/../../pkg/cow-order-book/src/index.ts',
    '^@cowprotocol/order-book/(.*)$': '<rootDir>/../../pkg/cow-order-book/src/$1',
    // Published packages fallback - these will use the node_modules versions
    '^@cowprotocol/app-data$': '<rootDir>/node_modules/@cowprotocol/app-data/dist/index.js',
    '^@cowprotocol/app-data/(.*)$': '<rootDir>/node_modules/@cowprotocol/app-data/dist/$1',
<<<<<<< Updated upstream
    '^@cowprotocol/contracts$': '<rootDir>/../../node_modules/@cowprotocol/contracts/lib/commonjs',
    '^@cowprotocol/contracts/(.*)$': '<rootDir>/../../node_modules/@cowprotocol/contracts/lib/commonjs/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[tj]sx?$',
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts', '!src/**/__generated__/**', '!src/**/index.ts'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  moduleDirectories: ['node_modules', '../../node_modules'],
}
