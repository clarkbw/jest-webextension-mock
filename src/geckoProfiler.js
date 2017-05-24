export const geckoProfiler = {
  stop: jest.fn(),
  start: jest.fn(),
  pause: jest.fn(),
  resume: jest.fn(),
  getProfile: jest.fn(),
  getProfileAsArrayBuffer: jest.fn(),
  getSymbols: jest.fn(function(debugName, breakpadId) {
    return this;
  }),
  onRunning: {
    addListener: jest.fn(),
  },
};
