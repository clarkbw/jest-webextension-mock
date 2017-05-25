export const storage = {
  sync: {
    get: jest.fn((id, cb) => {
      if (cb !== undefined) {
        return cb({ id });
      }
      return Promise.resolve({ id });
    }),
    getBytesInUse: jest.fn((id, cb) => {
      if (cb !== undefined) {
        return cb({ id });
      }
      return Promise.resolve({ id });
    }),
    set: jest.fn((id, cb) => {
      if (cb !== undefined) {
        return cb({ id });
      }
      return Promise.resolve({ id });
    }),
    remove: jest.fn((id, cb) => {
      if (cb !== undefined) {
        return cb({ id });
      }
      return Promise.resolve({ id });
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
      if (cb !== undefined) {
        return cb({ id });
      }
      return Promise.resolve({ id });
    }),
    getBytesInUse: jest.fn((id, cb) => {
      if (cb !== undefined) {
        return cb({ id });
      }
      return Promise.resolve({ id });
    }),
    set: jest.fn((id, cb) => {
      if (cb !== undefined) {
        return cb({ id });
      }
      return Promise.resolve({ id });
    }),
    remove: jest.fn((id, cb) => {
      if (cb !== undefined) {
        return cb({ id });
      }
      return Promise.resolve({ id });
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
      if (cb !== undefined) {
        return cb({ id });
      }
      return Promise.resolve({ id });
    }),
    getBytesInUse: jest.fn((id, cb) => {
      if (cb !== undefined) {
        return cb({ id });
      }
      return Promise.resolve({ id });
    }),
    set: jest.fn((id, cb) => {
      if (cb !== undefined) {
        return cb({ id });
      }
      return Promise.resolve({ id });
    }),
    remove: jest.fn((id, cb) => {
      if (cb !== undefined) {
        return cb({ id });
      }
      return Promise.resolve({ id });
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
  },
};
