const createOrUpdate = (notificationId, options, cb) => {
  if (arguments.length === 1) {
    // only options is specified
    options = notificationId;
    notificationId = undefined;
  } else if (arguments.length === 2 && typeof notificationId === 'object') {
    // options & cb are specified
    options = notificationId;
    cb = options;
    notificationId = undefined;
  }

  if (typeof notificationId !== 'string') {
    notificationId = 'generated-id';
  }

  if (cb !== undefined) {
    return cb(notificationId);
  }

  return Promise.resolve(notificationId);
};

export const notifications = {
  create: jest.fn(createOrUpdate),
  update: jest.fn(createOrUpdate),
};
