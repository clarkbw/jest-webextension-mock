// https://developer.chrome.com/extensions/tabs

export const tabs = {
  get: jest.fn((id = '', cb = () => {}) => cb({})),
  getCurrent: jest.fn(cb => cb({})),
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
  create: jest.fn((props = {}, cb = () => {}) => cb(props)),
  duplicate: jest.fn((id = '', cb = () => {}) => cb(Object.assign({}, { id }))),
  query: jest.fn((query = '', cb = () => {}) => cb([{}])),
  highlight: jest.fn((info = {}, cb = () => {}) => cb()),
  update: jest.fn((id = '', props = {}, cb = () => {}) =>
    cb(Object.assign({}, props, { id }))
  ),
  move: jest.fn((ids = [], props = {}, cb = () => {}) =>
    cb(ids.map(id => Object.assign({}, props, { id })))
  ),
};
