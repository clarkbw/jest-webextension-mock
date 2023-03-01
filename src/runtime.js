export let onMessageListeners = [];
export let onMessageExternalListeners = [];
export const runtime = {
  connect: jest.fn(function ({ name }) {
    return {
      name,
      postMessage: jest.fn(),
      onDisconnect: {
        addListener: jest.fn(),
      },
      onMessage: {
        addListener: jest.fn((listener) => {
          onMessageListeners.push(listener);
        }),
      },
      disconnect: jest.fn(),
    };
  }),
  sendMessage: jest.fn((message, cb) => {
    onMessageListeners.forEach((listener) => listener(message));
    if (cb !== undefined) {
      return cb();
    }
    return Promise.resolve();
  }),
  onMessage: {
    addListener: jest.fn((listener) => {
      onMessageListeners.push(listener);
    }),
    removeListener: jest.fn((listener) => {
      onMessageListeners = onMessageListeners.filter(
        (lstn) => lstn !== listener
      );
    }),
    hasListener: jest.fn((listener) => onMessageListeners.includes(listener)),
  },
  onMessageExternal: {
    addListener: jest.fn((listener) => {
      onMessageExternalListeners.push(listener);
    }),
    removeListener: jest.fn((listener) => {
      onMessageExternalListeners = onMessageExternalListeners.filter(
        (lstn) => lstn !== listener
      );
    }),
    hasListener: jest.fn((listener) => onMessageExternalListeners.includes(listener)),
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
  getURL: jest.fn(function (path) {
    const origin = globalThis[Symbol.for('jest-webextension-mock')].extensionPath;
    return String(new URL(path, origin));
  }),
  openOptionsPage: jest.fn(),
  getManifest: jest.fn(() => ({ manifest_version: 3 })),
};
