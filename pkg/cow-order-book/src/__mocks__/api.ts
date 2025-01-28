// Mock API implementation
export const mockApi = {
  getQuote: jest.fn(),
  postOrder: jest.fn(),
  getOrders: jest.fn(),
  getOrder: jest.fn(),
  getOrderStatus: jest.fn(),
  getQuoteAmountsAndCosts: jest.fn(),
};

export default mockApi;
