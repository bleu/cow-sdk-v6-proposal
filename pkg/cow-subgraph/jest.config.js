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
  moduleNameMapper: {
    '^@cowprotocol/order-signing/(.*)$': '<rootDir>/src/$1',
    '^@cowprotocol/common$': '<rootDir>/../../pkg/cow-common/src/index.ts',
    '^@cowprotocol/common/(.*)$': '<rootDir>/../../pkg/cow-common/src/$1',
    '^@cowprotocol/config$': '<rootDir>/../../pkg/cow-config/src/index.ts',
    '^@cowprotocol/config/(.*)$': '<rootDir>/../../pkg/cow-config/src/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[tj]sx?$',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
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
  // Add this to ensure node_modules can be resolved correctly
  moduleDirectories: ['node_modules', '../../node_modules'],
}
