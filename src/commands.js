// https://developer.chrome.com/extensions/commands

export const commands = {
  getAll: jest.fn((cb) => {
    if (cb !== undefined) {
      return cb();
    }
    return Promise.resolve();
  }),
  onCommand: {
    addListener: jest.fn(),
  },
};
