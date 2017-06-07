export const geckoProfiler = {
  stop: jest.fn(() => Promise.resolve()),
  start: jest.fn(() => Promise.resolve()),
  pause: jest.fn(() => Promise.resolve()),
  resume: jest.fn(() => Promise.resolve()),
  getProfile: jest.fn(() => Promise.resolve()),
  getProfileAsArrayBuffer: jest.fn(() => Promise.resolve()),
  getSymbols: jest.fn((debugName, breakpadId) => Promise.resolve()),
  onRunning: {
    addListener: jest.fn(),
  },
};
