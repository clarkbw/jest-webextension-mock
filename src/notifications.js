const create = (notificationId, options, cb) => {
  if (typeof notificationId !== 'string') {
    notificationId = 'generated-id';
  }

  if (typeof options === 'function') {
    cb = options;
  }

  if (cb !== undefined) {
    return cb(notificationId);
  }

  return Promise.resolve(notificationId);
};

const update = (notificationId, options, cb) => {
  if (cb !== undefined) {
    return cb(true);
  }

  return Promise.resolve(true);
};

const clear = (notificationId, cb) => {
  if (cb !== undefined) {
    return cb(true);
  }

  return Promise.resolve(true);
};

export const notifications = {
  create: jest.fn(create),
  update: jest.fn(update),
  clear: jest.fn(clear),
};
