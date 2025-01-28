// Jest setup file
require('@testing-library/jest-dom');

// Mock fetch globally
require('jest-fetch-mock').enableMocks();

// Global test setup
beforeAll(() => {
  // Add any global test setup here
});

// Global test teardown
afterAll(() => {
  // Add any global test cleanup here
});

// Reset all mocks before each test
beforeEach(() => {
  jest.clearAllMocks();
  fetchMock.resetMocks();
});
