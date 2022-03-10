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

var onMessageListeners = [];
var onMessageExternalListeners = [];
var runtime = {
  connect: jest.fn(function (_ref) {
    var name = _ref.name;
    return {
      name: name,
      postMessage: jest.fn(),
      onDisconnect: {
        addListener: jest.fn()
      },
      onMessage: {
        addListener: jest.fn(function (listener) {
          onMessageListeners.push(listener);
        })
      },
      disconnect: jest.fn()
    };
  }),
  sendMessage: jest.fn(function (message, cb) {
    onMessageListeners.forEach(function (listener) {
      return listener(message);
    });

    if (cb !== undefined) {
      return cb();
    }

    return Promise.resolve();
  }),
  onMessage: {
    addListener: jest.fn(function (listener) {
      onMessageListeners.push(listener);
    }),
    removeListener: jest.fn(function (listener) {
      onMessageListeners = onMessageListeners.filter(function (lstn) {
        return lstn !== listener;
      });
    }),
    hasListener: jest.fn(function (listener) {
      return onMessageListeners.includes(listener);
    })
  },
  onMessageExternal: {
    addListener: jest.fn(function (listener) {
      onMessageExternalListeners.push(listener);
    }),
    removeListener: jest.fn(function (listener) {
      onMessageExternalListeners = onMessageExternalListeners.filter(function (lstn) {
        return lstn !== listener;
      });
    }),
    hasListener: jest.fn(function (listener) {
      return onMessageExternalListeners.includes(listener);
    })
  },
  onConnect: {
    addListener: jest.fn(),
    removeListener: jest.fn(),
    hasListener: jest.fn()
  },
  onInstalled: {
    addListener: jest.fn(),
    removeListener: jest.fn(),
    hasListener: jest.fn()
  },
  getURL: jest.fn(function (path) {
    return path;
  }),
  openOptionsPage: jest.fn()
};

// https://developer.chrome.com/extensions/tabs
var tabs = {
  get: jest.fn(function () {
    var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    return cb({});
  }),
  getCurrent: jest.fn(function (cb) {
    return cb({});
  }),
  connect: jest.fn(function () {
    var info = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // returns a Port
    return {
      name: info.name,
      disconnect: jest.fn(),
      onDisconnect: {
        addListener: jest.fn()
      },
      onMessage: {
        addListener: jest.fn()
      },
      postMessage: jest.fn() // TODO: add sender

    };
  }),
  create: jest.fn(function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var cb = arguments.length > 1 ? arguments[1] : undefined;

    if (cb !== undefined) {
      return cb(props);
    }

    return Promise.resolve(props);
  }),
  remove: jest.fn(function (tabIds, cb) {
    if (cb !== undefined) {
      return cb();
    }

    return Promise.resolve();
  }),
  duplicate: jest.fn(function () {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    return cb(Object.assign({}, {
      id: id
    }));
  }),
  query: jest.fn(function () {
    var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    return cb([{}]);
  }),
  highlight: jest.fn(function () {
    var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    return cb();
  }),
  update: jest.fn(function () {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    return cb(Object.assign({}, props, {
      id: id
    }));
  }),
  move: jest.fn(function () {
    var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    return cb(ids.map(function (id) {
      return Object.assign({}, props, {
        id: id
      });
    }));
  }),
  onCreated: {
    addListener: jest.fn(),
    removeListener: jest.fn(),
    hasListener: jest.fn()
  },
  onUpdated: {
    addListener: jest.fn(),
    removeListener: jest.fn(),
    hasListener: jest.fn()
  },
  onMoved: {
    addListener: jest.fn(),
    removeListener: jest.fn(),
    hasListener: jest.fn()
  },
  onActivated: {
    addListener: jest.fn(),
    removeListener: jest.fn(),
    hasListener: jest.fn()
  },
  onHighlighted: {
    addListener: jest.fn(),
    removeListener: jest.fn(),
    hasListener: jest.fn()
  },
  onDetached: {
    addListener: jest.fn(),
    removeListener: jest.fn(),
    hasListener: jest.fn()
  },
  onAttached: {
    addListener: jest.fn(),
    removeListener: jest.fn(),
    hasListener: jest.fn()
  },
  onRemoved: {
    addListener: jest.fn(),
    removeListener: jest.fn(),
    hasListener: jest.fn()
  },
  onReplaced: {
    addListener: jest.fn(),
    removeListener: jest.fn(),
    hasListener: jest.fn()
  },
  onZoomChange: {
    addListener: jest.fn(),
    removeListener: jest.fn(),
    hasListener: jest.fn()
  },
  sendMessage: jest.fn(function (tabId, message, cb) {
    onMessageListeners.forEach(function (listener) {
      return listener(tabId, message);
    });

    if (cb !== undefined) {
      return cb();
    }

    return Promise.resolve();
  }),
  reload: jest.fn(function (tabId, reloadProperties, cb) {
    return cb();
  })
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

var store = {};

function resolveKey(key) {
  if (typeof key === 'string') {
    var result = {};
    result[key] = store[key];
    return result;
  } else if (Array.isArray(key)) {
    return key.reduce(function (acc, curr) {
      acc[curr] = store[curr];
      return acc;
    }, {});
  } else if (_typeof(key) === 'object') {
    return Object.keys(key).reduce(function (acc, curr) {
      acc[curr] = store[curr] || key[curr];
      return acc;
    }, {});
  }

  throw new Error('Wrong key given');
}

var storage = {
  sync: {
    get: jest.fn(function (id, cb) {
      var result = id === null ? store : resolveKey(id);

      if (cb !== undefined) {
        return cb(result);
      }

      return Promise.resolve(result);
    }),
    getBytesInUse: jest.fn(function (id, cb) {
      if (cb !== undefined) {
        return cb(0);
      }

      return Promise.resolve(0);
    }),
    set: jest.fn(function (payload, cb) {
      Object.keys(payload).forEach(function (key) {
        return store[key] = payload[key];
      });

      if (cb !== undefined) {
        return cb();
      }

      return Promise.resolve();
    }),
    remove: jest.fn(function (id, cb) {
      var keys = typeof id === 'string' ? [id] : id;
      keys.forEach(function (key) {
        return delete store[key];
      });

      if (cb !== undefined) {
        return cb();
      }

      return Promise.resolve();
    }),
    clear: jest.fn(function (cb) {
      store = {};

      if (cb !== undefined) {
        return cb();
      }

      return Promise.resolve();
    })
  },
  local: {
    get: jest.fn(function (id, cb) {
      var result = id === null ? store : resolveKey(id);

      if (cb !== undefined) {
        return cb(result);
      }

      return Promise.resolve(result);
    }),
    getBytesInUse: jest.fn(function (id, cb) {
      if (cb !== undefined) {
        return cb(0);
      }

      return Promise.resolve(0);
    }),
    set: jest.fn(function (payload, cb) {
      Object.keys(payload).forEach(function (key) {
        return store[key] = payload[key];
      });

      if (cb !== undefined) {
        return cb();
      }

      return Promise.resolve();
    }),
    remove: jest.fn(function (id, cb) {
      var keys = typeof id === 'string' ? [id] : id;
      keys.forEach(function (key) {
        return delete store[key];
      });

      if (cb !== undefined) {
        return cb();
      }

      return Promise.resolve();
    }),
    clear: jest.fn(function (cb) {
      store = {};

      if (cb !== undefined) {
        return cb();
      }

      return Promise.resolve();
    })
  },
  managed: {
    get: jest.fn(function (id, cb) {
      var result = id === null ? store : resolveKey(id);

      if (cb !== undefined) {
        return cb(result);
      }

      return Promise.resolve(result);
    }),
    getBytesInUse: jest.fn(function (id, cb) {
      if (cb !== undefined) {
        return cb(0);
      }

      return Promise.resolve(0);
    }),
    set: jest.fn(function (payload, cb) {
      Object.keys(payload).forEach(function (key) {
        return store[key] = payload[key];
      });

      if (cb !== undefined) {
        return cb();
      }

      return Promise.resolve();
    }),
    remove: jest.fn(function (id, cb) {
      var keys = typeof id === 'string' ? [id] : id;
      keys.forEach(function (key) {
        return delete store[key];
      });

      if (cb !== undefined) {
        return cb();
      }

      return Promise.resolve();
    }),
    clear: jest.fn(function (cb) {
      store = {};

      if (cb !== undefined) {
        return cb();
      }

      return Promise.resolve();
    })
  },
  onChanged: {
    addListener: jest.fn(),
    removeListener: jest.fn(),
    hasListener: jest.fn()
  }
};

var getDetails = function getDetails(details, cb) {
  if (cb !== undefined) {
    return cb();
  }

  return Promise.resolve();
};

var browserAction = {
  setTitle: jest.fn(),
  getTitle: jest.fn(getDetails),
  setIcon: jest.fn(getDetails),
  setPopup: jest.fn(),
  getPopup: jest.fn(getDetails),
  setBadgeText: jest.fn(),
  getBadgeText: jest.fn(getDetails),
  setBadgeBackgroundColor: jest.fn(),
  getBadgeBackgroundColor: jest.fn(getDetails),
  enable: jest.fn(),
  disable: jest.fn(),
  onClicked: {
    addListener: jest.fn()
  }
};

// https://developer.chrome.com/extensions/commands
var commands = {
  getAll: jest.fn(function (cb) {
    if (cb !== undefined) {
      return cb();
    }

    return Promise.resolve();
  }),
  onCommand: {
    addListener: jest.fn()
  }
};

var cbOrPromise$1 = function cbOrPromise(cb, value) {
  if (cb !== undefined) {
    return cb(value);
  }

  return Promise.resolve(value);
};

var create = function create(notificationId, options, cb) {
  if (typeof notificationId !== 'string') {
    notificationId = 'generated-id';
  }

  if (typeof options === 'function') {
    cb = options;
  }

  return cbOrPromise$1(cb, notificationId);
};

var notifications = {
  create: jest.fn(create),
  update: jest.fn(function (notificationId, options, cb) {
    return cbOrPromise$1(cb, true);
  }),
  clear: jest.fn(function (notificationId, cb) {
    return cbOrPromise$1(cb, true);
  }),
  getAll: jest.fn(function (cb) {
    return cbOrPromise$1(cb, []);
  }),
  getPermissionLevel: jest.fn(function (cb) {
    return cbOrPromise$1(cb, 'granted');
  }),
  onClosed: {
    addListener: jest.fn()
  },
  onClicked: {
    addListener: jest.fn()
  },
  onButtonClicked: {
    addListener: jest.fn()
  },
  onPermissionLevelChanged: {
    addListener: jest.fn()
  },
  onShowSettings: {
    addListener: jest.fn()
  }
};

var i18n = {
  getAcceptLanguages: jest.fn(),
  getMessage: jest.fn(function (key) {
    return "Translated<".concat(key, ">");
  }),
  getUILanguage: jest.fn(function () {
    return 'en';
  }),
  detectLanguage: jest.fn()
};

var webNavigation = {
  onCompleted: {
    addListener: jest.fn()
  },
  onHistoryStateUpdated: {
    addListener: jest.fn()
  }
};

var extension = {
  getURL: jest.fn()
};

var cbOrPromise = function cbOrPromise(cb, value) {
  if (cb !== undefined) {
    return cb(value);
  }

  return Promise.resolve(value);
};

var downloads = {
  acceptDanger: jest.fn(function (downloadId, cb) {
    return cbOrPromise(cb);
  }),
  cancel: jest.fn(function (downloadId, cb) {
    return cbOrPromise(cb);
  }),
  download: jest.fn(function (options, cb) {
    return cbOrPromise(cb);
  }),
  erase: jest.fn(function (query, cb) {
    return cbOrPromise(cb);
  }),
  getFileIcon: jest.fn(function (downloadId, cb) {
    return cbOrPromise(cb);
  }),
  open: jest.fn(),
  pause: jest.fn(function (downloadId, cb) {
    return cbOrPromise(cb);
  }),
  removeFile: jest.fn(function (downloadId, cb) {
    return cbOrPromise(cb);
  }),
  resume: jest.fn(function (downloadId, cb) {
    return cbOrPromise(cb);
  }),
  search: jest.fn(function (query, cb) {
    return cbOrPromise(cb);
  }),
  setShelfEnabled: jest.fn(),
  show: jest.fn(),
  showDefaultFolder: jest.fn()
};

var geckoProfiler = {
  stop: jest.fn(function () {
    return Promise.resolve();
  }),
  start: jest.fn(function () {
    return Promise.resolve();
  }),
  pause: jest.fn(function () {
    return Promise.resolve();
  }),
  resume: jest.fn(function () {
    return Promise.resolve();
  }),
  getProfile: jest.fn(function () {
    return Promise.resolve();
  }),
  getProfileAsArrayBuffer: jest.fn(function () {
    return Promise.resolve();
  }),
  getSymbols: jest.fn(function (debugName, breakpadId) {
    return Promise.resolve();
  }),
  onRunning: {
    addListener: jest.fn()
  }
};

var chrome = {
  omnibox: omnibox,
  tabs: tabs,
  runtime: runtime,
  storage: storage,
  browserAction: browserAction,
  commands: commands,
  geckoProfiler: geckoProfiler,
  notifications: notifications,
  i18n: i18n,
  webNavigation: webNavigation,
  extension: extension,
  downloads: downloads
};
 // Firefox uses 'browser' but aliases it to chrome

/**
 * This is a setup file we specify as our 'main' entry point
 * from the package.json file.  This allows developers to
 * directly call the module in their `setupFiles` property.
 */
global.chrome = chrome;
global.browser = chrome; // Firefox specific globals
// if (navigator.userAgent.indexOf('Firefox') !== -1) {
// https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Content_scripts#exportFunction

global.exportFunction = jest.fn(function (func) {
  return func;
}); // https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Content_scripts#cloneInto

global.cloneInto = jest.fn(function (obj) {
  return obj;
}); // }
