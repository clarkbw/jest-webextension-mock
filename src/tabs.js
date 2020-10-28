// https://developer.chrome.com/extensions/tabs
import { onMessageListeners } from './runtime';

export const tabs = {
  get: jest.fn((id = '', cb = () => {}) => cb({})),
  getCurrent: jest.fn((cb) => cb({})),
  connect: jest.fn((id = '', info = {}) => {
    // returns a Port
    return {
      name: info.name,
      disconnect: jest.fn(),
      onDisconnect: {
        addListener: jest.fn(),
      },
      onMessage: {
        addListener: jest.fn(),
      },
      postMessage: jest.fn(),
      // TODO: add sender
    };
  }),
  create: jest.fn((props = {}, cb) => {
    if (cb !== undefined) {
      return cb(props);
    }
    return Promise.resolve(props);
  }),
  remove: jest.fn((tabIds, cb) => {
    if (cb !== undefined) {
      return cb();
    }
    return Promise.resolve();
  }),
  duplicate: jest.fn((id = '', cb = () => {}) => cb(Object.assign({}, { id }))),
  query: jest.fn((query = '', cb = () => {}) => cb([{}])),
  highlight: jest.fn((info = {}, cb = () => {}) => cb()),
  update: jest.fn((id = '', props = {}, cb = () => {}) =>
    cb(Object.assign({}, props, { id }))
  ),
  move: jest.fn((ids = [], props = {}, cb = () => {}) =>
    cb(ids.map((id) => Object.assign({}, props, { id })))
  ),
  onCreated: {
    addListener: jest.fn(),
    removeListener: jest.fn(),
    hasListener: jest.fn(),
  },
  onUpdated: {
    addListener: jest.fn(),
    removeListener: jest.fn(),
    hasListener: jest.fn(),
  },
  onMoved: {
    addListener: jest.fn(),
    removeListener: jest.fn(),
    hasListener: jest.fn(),
  },
  onActivated: {
    addListener: jest.fn(),
    removeListener: jest.fn(),
    hasListener: jest.fn(),
  },
  onHighlighted: {
    addListener: jest.fn(),
    removeListener: jest.fn(),
    hasListener: jest.fn(),
  },
  onDetached: {
    addListener: jest.fn(),
    removeListener: jest.fn(),
    hasListener: jest.fn(),
  },
  onAttached: {
    addListener: jest.fn(),
    removeListener: jest.fn(),
    hasListener: jest.fn(),
  },
  onRemoved: {
    addListener: jest.fn(),
    removeListener: jest.fn(),
    hasListener: jest.fn(),
  },
  onReplaced: {
    addListener: jest.fn(),
    removeListener: jest.fn(),
    hasListener: jest.fn(),
  },
  onZoomChange: {
    addListener: jest.fn(),
    removeListener: jest.fn(),
    hasListener: jest.fn(),
  },
  sendMessage: jest.fn((tabId, message, cb) => {
    onMessageListeners.forEach((listener) => listener(tabId, message));
    if (cb !== undefined) {
      return cb();
    }
    return Promise.resolve();
  }),
  reload: jest.fn((tabId, reloadProperties, cb) => cb()),
};
