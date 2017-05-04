// https://developer.chrome.com/extensions/tabs

export const tabs = {
  get: jest.fn((id, cb) => cb(TAB)),
  getCurrent: jest.fn(cb => cb(TAB)),
  connect: jest.fn(), // id, obj
  create: jest.fn((props, cb) => cb(Object.assign(props, TAB))),
  duplicate: jest.fn((id, cb) => cb(Object.assign(TAB, { id }))),
  query: jest.fn((query, cb) => cb([TAB])),
  highlight: jest.fn((info, cb) => cb()),
  update: jest.fn((id, props, cb) => cb(TAB)),
  move: jest.fn((ids, props, cb) => cb([TAB])),
};

let TAB = {
  index: 1,
  windowId: 1,
  highlighted: false,
  active: false,
  pinned: false,
  discarded: false,
  autoDiscardable: false,
  incognito: false,
};

export function mock(tab) {
  TAB = tab;
}
