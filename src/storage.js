function resolveKey(key) {
  if (typeof key === 'string') {
    const result = {};
    result[key] = '';
    return result;
  } else if (Array.isArray(key)) {
    return key.reduce((acc, curr) => {
      acc[curr] = '';
      return acc;
    }, {});
  } else if (typeof key === 'object') {
    return key;
  }
  throw new Error('Wrong key given');
}

export const storage = {
  sync: {
    get: jest.fn((id, cb) => {
      const result = resolveKey(id);
      if (cb !== undefined) {
        return cb(result);
      }
      return Promise.resolve(result);
    }),
    getBytesInUse: jest.fn((id, cb) => {
      if (cb !== undefined) {
        return cb(0);
      }
      return Promise.resolve(0);
    }),
    set: jest.fn((id, cb) => {
      if (cb !== undefined) {
        return cb();
      }
      return Promise.resolve();
    }),
    remove: jest.fn((id, cb) => {
      if (cb !== undefined) {
        return cb();
      }
      return Promise.resolve();
    }),
    clear: jest.fn(cb => {
      if (cb !== undefined) {
        return cb();
      }
      return Promise.resolve();
    }),
  },
  local: {
    get: jest.fn((id, cb) => {
      const result = resolveKey(id);
      if (cb !== undefined) {
        return cb(result);
      }
      return Promise.resolve(result);
    }),
    getBytesInUse: jest.fn((id, cb) => {
      if (cb !== undefined) {
        return cb(0);
      }
      return Promise.resolve(0);
    }),
    set: jest.fn((id, cb) => {
      if (cb !== undefined) {
        return cb();
      }
      return Promise.resolve();
    }),
    remove: jest.fn((id, cb) => {
      if (cb !== undefined) {
        return cb();
      }
      return Promise.resolve();
    }),
    clear: jest.fn(cb => {
      if (cb !== undefined) {
        return cb();
      }
      return Promise.resolve();
    }),
  },
  managed: {
    get: jest.fn((id, cb) => {
      const result = resolveKey(id);
      if (cb !== undefined) {
        return cb(result);
      }
      return Promise.resolve(result);
    }),
    getBytesInUse: jest.fn((id, cb) => {
      if (cb !== undefined) {
        return cb(0);
      }
      return Promise.resolve(0);
    }),
    set: jest.fn((id, cb) => {
      if (cb !== undefined) {
        return cb();
      }
      return Promise.resolve();
    }),
    remove: jest.fn((id, cb) => {
      if (cb !== undefined) {
        return cb();
      }
      return Promise.resolve();
    }),
    clear: jest.fn(cb => {
      if (cb !== undefined) {
        return cb();
      }
      return Promise.resolve();
    }),
  },
  onChanged: {
    addListener: jest.fn(),
    removeListener: jest.fn(),
    hasListener: jest.fn(),
  },
};
