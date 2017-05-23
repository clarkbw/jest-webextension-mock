'use strict';

// https://developer.chrome.com/extensions/omnibox

var omnibox = {
  setDefaultSuggestion: jest.fn(),
  onInputStarted: {
    addListener: jest.fn()
  },
  onInputChanged: {
    addListener: jest.fn()
  },
  onInputEntered: {
    addListener: jest.fn()
  },
  onInputCancelled: {
    addListener: jest.fn()
  }
};

// https://developer.chrome.com/extensions/tabs

var RT_TAB = function RT_TAB() {
  return TAB;
};

var tabs = {
  get: jest.fn(function () {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : RT_TAB;
    return cb(TAB);
  }),
  getCurrent: jest.fn(function (cb) {
    return cb(TAB);
  }),
  connect: jest.fn(), // id, obj
  create: jest.fn(function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : RT_TAB;
    return cb(Object.assign(props, TAB));
  }),
  duplicate: jest.fn(function () {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : RT_TAB;
    return cb(Object.assign(TAB, { id: id }));
  }),
  query: jest.fn(function () {
    var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : RT_TAB;
    return cb([TAB]);
  }),
  highlight: jest.fn(function () {
    var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : RT_TAB;
    return cb();
  }),
  update: jest.fn(function () {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : RT_TAB;
    return cb(TAB);
  }),
  move: jest.fn(function () {
    var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : RT_TAB;
    return cb([TAB]);
  })
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
var TAB = {};

var runtime = {
  connect: jest.fn(function (_ref) {
    var name = _ref.name;

    var connection = {
      name: name,
      postMessage: jest.fn(),
      onDisconnect: {
        addListener: jest.fn()
      }
    };
    return connection;
  }),
  sendMessage: jest.fn(function (message) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    return callback();
  }),
  onMessage: {
    addListener: jest.fn()
  },
  onConnect: {
    addListener: jest.fn()
  }
};

var geckoProfiler = {
  stop: jest.fn(),
  start: jest.fn(),
  pause: jest.fn(),
  resume: jest.fn(),
  getProfile: jest.fn(),
  getProfileAsArrayBuffer: jest.fn(),
  getSymbols: jest.fn(function (debugName, breakpadId) {
    return this;
  }),
  onRunning: {
    addListener: jest.fn()
  }
};

var chrome = {
  omnibox: omnibox,
  tabs: tabs,
  runtime: runtime,
  geckoProfiler: geckoProfiler
};

 // Firefox uses 'browser' but aliases it to chrome

/**
 * This is a setup file we specify as our 'main' entry point
 * from the package.json file.  This allows developers to
 * directly call the module in their `setupFiles` property.
 */
global.chrome = chrome;
global.browser = chrome;

// Firefox specific globals
// if (navigator.userAgent.indexOf('Firefox') !== -1) {
// https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Content_scripts#exportFunction
global.exportFunction = jest.fn(function (func) {
  return func;
});
// https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Content_scripts#cloneInto
global.cloneInto = jest.fn(function (obj) {
  return obj;
});
// }
