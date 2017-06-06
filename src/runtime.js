export const runtime = {
  connect: jest.fn(function({ name }) {
    const connection = {
      name,
      postMessage: jest.fn(),
      onDisconnect: {
        addListener: jest.fn(),
      },
    };
    return connection;
  }),
  sendMessage: jest.fn((message, cb) => {
    if (cb !== undefined) {
      return cb();
    }
    return Promise.resolve();
  }),
  onMessage: {
    addListener: jest.fn(),
  },
  onConnect: {
    addListener: jest.fn(),
  },
};
