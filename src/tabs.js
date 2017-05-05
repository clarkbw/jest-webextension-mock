// https://developer.chrome.com/extensions/tabs

const RT_TAB = () => TAB;

export const tabs = {
  get: jest.fn((id = '', cb = RT_TAB) => cb(TAB)),
  getCurrent: jest.fn(cb => cb(TAB)),
  connect: jest.fn(), // id, obj
  create: jest.fn((props = {}, cb = RT_TAB) => cb(Object.assign(props, TAB))),
  duplicate: jest.fn((id = '', cb = RT_TAB) => cb(Object.assign(TAB, { id }))),
  query: jest.fn((query = '', cb = RT_TAB) => cb([TAB])),
  highlight: jest.fn((info = {}, cb = RT_TAB) => cb()),
  update: jest.fn((id = '', props = {}, cb = RT_TAB) => cb(TAB)),
  move: jest.fn((ids = [], props = {}, cb = RT_TAB) => cb([TAB])),
};

/*
index: 1,
windowId: 1,
highlighted: false,
active: false,
pinned: false,
discarded: false,
autoDiscardable: false,
incognito: false,
*/
let TAB = {};

export function mock(tab) {
  TAB = tab;
}
