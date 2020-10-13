const cbOrPromise = (cb, value) => {
  if (cb !== undefined) {
    return cb(value);
  }

  return Promise.resolve(value);
};

const create = (notificationId, options, cb) => {
  if (typeof notificationId !== 'string') {
    notificationId = 'generated-id';
  }

  if (typeof options === 'function') {
    cb = options;
  }

  return cbOrPromise(cb, notificationId);
};

export const notifications = {
  create: jest.fn(create),
  update: jest.fn((notificationId, options, cb) => cbOrPromise(cb, true)),
  clear: jest.fn((notificationId, cb) => cbOrPromise(cb, true)),
  getAll: jest.fn((cb) => cbOrPromise(cb, [])),
  getPermissionLevel: jest.fn((cb) => cbOrPromise(cb, 'granted')),
  onClosed: {
    addListener: jest.fn(),
  },
  onClicked: {
    addListener: jest.fn(),
  },
  onButtonClicked: {
    addListener: jest.fn(),
  },
  onPermissionLevelChanged: {
    addListener: jest.fn(),
  },
  onShowSettings: {
    addListener: jest.fn(),
  },
};
