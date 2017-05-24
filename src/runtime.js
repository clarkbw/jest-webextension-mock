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
  sendMessage: jest.fn((message, callback = () => {}) => callback()),
  onMessage: {
    addListener: jest.fn(),
  },
  onConnect: {
    addListener: jest.fn(),
  },
};
