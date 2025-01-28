/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.json',
        diagnostics: false,
        isolatedModules: true,
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!node-rate-limiter)'],
  moduleNameMapper: {
    '^@cowprotocol/cow-shed/(.*)$': '<rootDir>/src/$1',
    '^@cowprotocol/common$': '<rootDir>/../../pkg/cow-common/src/index.ts',
    '^@cowprotocol/common/(.*)$': '<rootDir>/../../pkg/cow-common/src/$1',
    '^@cowprotocol/cow-config$': '<rootDir>/../../pkg/cow-config/src/index.ts',
    '^@cowprotocol/cow-config/(.*)$': '<rootDir>/../../pkg/cow-config/src/$1',
    '^@cowprotocol/order-book$': '<rootDir>/../../pkg/cow-order-book/src/index.ts',
    '^@cowprotocol/order-book/(.*)$': '<rootDir>/../../pkg/cow-order-book/src/$1',
    '^@cowprotocol/sdk-ethers-v5$': '<rootDir>/../../pkg/cow-sdk-ethers-v5/src/index.ts',
    '^@cowprotocol/sdk-ethers-v5/(.*)$': '<rootDir>/../../pkg/cow-sdk-ethers-v5/src/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[tj]sx?$',
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts', '!src/**/__generated__/**', '!src/**/index.ts'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  moduleDirectories: ['node_modules', '../../node_modules'],
}
