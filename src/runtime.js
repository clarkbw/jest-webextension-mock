let listeners = [];
export const runtime = {
  connect: jest.fn(function({ name }) {
    const connection = {
      name,
      postMessage: jest.fn(),
      onDisconnect: {
        addListener: jest.fn(),
      },
      onMessage: {
        addListener: jest.fn(listener => {
          listeners.push(listener);
        }),
      },
    };
    return connection;
  }),
  sendMessage: jest.fn((message, cb) => {
    listeners.forEach(listener => listener(message));
    if (cb !== undefined) {
      return cb();
    }
    return Promise.resolve();
  }),
  onMessage: {
    addListener: jest.fn(listener => {
      listeners.push(listener);
    }),
    removeListener: jest.fn(),
    hasListener: jest.fn(),
  },
  onConnect: {
    addListener: jest.fn(),
    removeListener: jest.fn(),
    hasListener: jest.fn(),
  },
  onInstalled: {
    addListener: jest.fn(),
    removeListener: jest.fn(),
    hasListener: jest.fn(),
  },
  getURL: jest.fn(function(path) {
    return path;
  }),
};
