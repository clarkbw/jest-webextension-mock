let store = {};
const onChangedListeners = {
  sync: [],
  local: [],
  managed: [],
};

function resolveKey(key) {
  if (typeof key === 'string') {
    const result = {};
    result[key] = store[key];
    return result;
  } else if (Array.isArray(key)) {
    return key.reduce((acc, curr) => {
      acc[curr] = store[curr];
      return acc;
    }, {});
  } else if (typeof key === 'object') {
    return Object.keys(key).reduce((acc, curr) => {
      acc[curr] = store[curr] || key[curr];
      return acc;
    }, {});
  }
  throw new Error('Wrong key given');
}

export const storage = {
  sync: {
    get: jest.fn((id, cb) => {
      const result = id === null ? store : resolveKey(id);
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
    set: jest.fn((payload, cb) => {
      let changes = {};
      Object.keys(payload).forEach((key) => {
        changes[key] = {
          newValue: payload[key],
        };
        if (store.hasOwnProperty(key)) {
          changes[key].oldValue = store[key];
        }
        store[key] = payload[key];
      });
      onChangedListeners.sync.forEach((listener) => {
        listener(changes);
      });
      if (cb !== undefined) {
        return cb();
      }
      return Promise.resolve();
    }),
    remove: jest.fn((id, cb) => {
      const keys = typeof id === 'string' ? [id] : id;

      let changes = {};
      keys.forEach((key) => {
        if (store.hasOwnProperty(key)) {
          changes[key] = {
            oldValue: store[key],
          };
        }
        delete store[key];
      });
      onChangedListeners.sync.forEach((listener) => {
        listener(changes);
      });
      if (cb !== undefined) {
        return cb();
      }
      return Promise.resolve();
    }),
    clear: jest.fn((cb) => {
      const changes = Object.keys(store).reduce(
        (changeMap, key) => ({
          ...changeMap,
          [key]: { oldValue: store[key] },
        }),
        {}
      );
      store = {};
      onChangedListeners.sync.forEach((listener) => {
        listener(changes);
      });
      if (cb !== undefined) {
        return cb();
      }
      return Promise.resolve();
    }),
    onChanged: {
      addListener: jest.fn((cb) => {
        onChangedListeners.sync.push(cb);
      }),
    },
  },

  local: {
    get: jest.fn((id, cb) => {
      const result = id === null ? store : resolveKey(id);
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
    set: jest.fn((payload, cb) => {
      let changes = {};
      Object.keys(payload).forEach((key) => {
        changes[key] = {
          newValue: payload[key],
        };
        if (store.hasOwnProperty(key)) {
          changes[key].oldValue = store[key];
        }
        store[key] = payload[key];
      });
      onChangedListeners.local.forEach((listener) => {
        listener(changes);
      });
      if (cb !== undefined) {
        return cb();
      }
      return Promise.resolve();
    }),
    remove: jest.fn((id, cb) => {
      const keys = typeof id === 'string' ? [id] : id;

      let changes = {};
      keys.forEach((key) => {
        if (store.hasOwnProperty(key)) {
          changes[key] = {
            oldValue: store[key],
          };
        }
        delete store[key];
      });
      onChangedListeners.local.forEach((listener) => {
        listener(changes);
      });
      if (cb !== undefined) {
        return cb();
      }
      return Promise.resolve();
    }),
    clear: jest.fn((cb) => {
      const changes = Object.keys(store).reduce(
        (changeMap, key) => ({
          ...changeMap,
          [key]: { oldValue: store[key] },
        }),
        {}
      );
      store = {};
      onChangedListeners.local.forEach((listener) => {
        listener(changes);
      });
      if (cb !== undefined) {
        return cb();
      }
      return Promise.resolve();
    }),
    onChanged: {
      addListener: jest.fn((cb) => {
        onChangedListeners.local.push(cb);
      }),
    },
  },

  managed: {
    get: jest.fn((id, cb) => {
      const result = id === null ? store : resolveKey(id);
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
    set: jest.fn((payload, cb) => {
      let changes = {};
      Object.keys(payload).forEach((key) => {
        changes[key] = {
          newValue: payload[key],
        };
        if (store.hasOwnProperty(key)) {
          changes[key].oldValue = store[key];
        }
        store[key] = payload[key];
      });
      onChangedListeners.managed.forEach((listener) => {
        listener(changes);
      });
      if (cb !== undefined) {
        return cb();
      }
      return Promise.resolve();
    }),
    remove: jest.fn((id, cb) => {
      const keys = typeof id === 'string' ? [id] : id;

      let changes = {};
      keys.forEach((key) => {
        if (store.hasOwnProperty(key)) {
          changes[key] = {
            oldValue: store[key],
          };
        }
        delete store[key];
      });
      onChangedListeners.managed.forEach((listener) => {
        listener(changes);
      });
      if (cb !== undefined) {
        return cb();
      }
      return Promise.resolve();
    }),
    clear: jest.fn((cb) => {
      const changes = Object.keys(store).reduce(
        (changeMap, key) => ({
          ...changeMap,
          [key]: { oldValue: store[key] },
        }),
        {}
      );
      store = {};
      onChangedListeners.managed.forEach((listener) => {
        listener(changes);
      });
      if (cb !== undefined) {
        return cb();
      }
      return Promise.resolve();
    }),
    onChanged: {
      addListener: jest.fn((cb) => {
        onChangedListeners.managed.push(cb);
      }),
    },
  },
  onChanged: {
    addListener: jest.fn(),
    removeListener: jest.fn(),
    hasListener: jest.fn(),
  },
};
