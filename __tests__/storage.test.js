describe('browser.storage', () => {
  ['addListener', 'removeListener', 'hasListener'].forEach((method) => {
    test(`onChanged.${method}`, () => {
      const callback = jest.fn();
      expect(jest.isMockFunction(browser.storage.onChanged[method])).toBe(true);
      browser.storage.onChanged[method](callback);
      expect(browser.storage.onChanged[method]).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledTimes(0);
    });
  });
});

describe('browser.storage', () => {
  ['sync', 'local', 'managed'].forEach((type) => {
    describe(type, () => {
      const storage = browser.storage[type];
      describe('get', () => {
        expect(jest.isMockFunction(storage.get)).toBe(true);
        test('a string key', (done) => {
          const key = 'test';
          storage.get(key, (result) => {
            expect(result).toBeDefined();
            expect(typeof result === 'object').toBeTruthy();
            expect(result).toHaveProperty(key, undefined);
            done();
          });
        });
        test('an array key', (done) => {
          const keys = ['test1', 'test2'];
          storage.get(keys, (result) => {
            expect(result).toBeDefined();
            expect(typeof result === 'object').toBeTruthy();
            keys.forEach((k) => {
              expect(result).toHaveProperty(k, undefined);
            });
            done();
          });
        });
        test('an object key', (done) => {
          const key = { test: [] };
          storage.get(key, (result) => {
            expect(result).toBeDefined();
            expect(typeof result === 'object').toBeTruthy();
            Object.keys(key).forEach((k) => {
              expect(result).toHaveProperty(k);
              expect(result[k]).toEqual(key[k]);
            });
            done();
          });
        });
        test('a invalid key', () => {
          try {
            storage.get(1, jest.fn());
          } catch (e) {
            expect(e.message).toBe('Wrong key given');
          }
        });
        afterEach(() => {
          expect(storage.get).toHaveBeenCalledTimes(1);
          storage.clear();
          storage.get.mockClear();
          storage.set.mockClear();
          storage.remove.mockClear();
          storage.clear.mockClear();
        });
      });
      test('get promise', () => {
        const key = 'key';
        return expect(storage.get(key)).resolves.toEqual({ key: undefined });
      });
      test('getBytesInUse', (done) => {
        const callback = jest.fn(() => done());
        expect(jest.isMockFunction(storage.getBytesInUse)).toBe(true);
        storage.getBytesInUse('key', callback);
        expect(storage.getBytesInUse).toHaveBeenCalledTimes(1);
        expect(callback).toBeCalled();
      });
      test('getBytesInUse promise', () => {
        return expect(storage.getBytesInUse('key')).resolves.toBe(0);
      });
      test('set', (done) => {
        const callback = jest.fn(() => done());
        expect(jest.isMockFunction(storage.set)).toBe(true);
        storage.set({ key: 'foo' }, callback);
        expect(storage.set).toHaveBeenCalledTimes(1);
        expect(callback).toBeCalled();
      });
      test('set promise', () => {
        return expect(storage.set(1)).resolves.toBeUndefined();
      });
      test('remove', (done) => {
        const callback = jest.fn(() => done());
        expect(jest.isMockFunction(storage.remove)).toBe(true);
        storage.remove('key', callback);
        expect(storage.remove).toHaveBeenCalledTimes(1);
        expect(callback).toBeCalled();
      });
      test('remove promise', () => {
        return expect(storage.remove(['foo', 'bar'])).resolves.toBeUndefined();
      });
      test('clear', (done) => {
        const callback = jest.fn(() => done());
        expect(jest.isMockFunction(browser.storage.sync.clear)).toBe(true);
        storage.clear(callback);
        expect(storage.clear).toHaveBeenCalledTimes(1);
        expect(callback).toBeCalled();
      });
      test('clear promise', () => {
        return expect(storage.clear()).resolves.toBeUndefined();
      });
      test('onChanged', () => {
        expect(storage).toHaveProperty('onChanged');
        expect(jest.isMockFunction(storage.onChanged.addListener)).toBe(true);
      });
      test('real scenario', (done) => {
        expect(jest.isMockFunction(storage.get)).toBe(true);
        expect(jest.isMockFunction(storage.set)).toBe(true);
        expect(jest.isMockFunction(storage.remove)).toBe(true);
        expect(jest.isMockFunction(storage.clear)).toBe(true);

        // register onChanged listener
        const onChangedListener = jest.fn();
        storage.onChanged.addListener(onChangedListener);
        // set keys
        storage.set({ key: 'value', foo: 'bar', foo2: 'bar2' }, () => {
          expect(onChangedListener).toHaveBeenCalledWith({
            key: { newValue: 'value' },
            foo: { newValue: 'bar' },
            foo2: { newValue: 'bar2' },
          });
          // get 'key'
          storage.get(['key'], (result) => {
            expect(result).toBeDefined();
            expect(typeof result === 'object').toBeTruthy();
            expect(result).toHaveProperty('key', 'value');
            expect(result).not.toHaveProperty('foo');
            expect(result).not.toHaveProperty('foo2');
            // set a new value for 'key'
            storage.set({ key: 'other value' }, () => {
              expect(onChangedListener).toHaveBeenCalledWith({
                key: { oldValue: 'value', newValue: 'other value' },
              });
              // remove 'key'
              storage.remove('key', () => {
                expect(onChangedListener).toHaveBeenCalledWith({
                  key: { oldValue: 'other value' },
                });
                // get all values
                storage.get(null, (result) => {
                  expect(result).toHaveProperty('key', undefined);
                  expect(result).toHaveProperty('foo', 'bar');
                  expect(result).toHaveProperty('foo2', 'bar2');
                  // clear values
                  storage.clear(() => {
                    expect(onChangedListener).toHaveBeenCalledWith({
                      foo: { oldValue: 'bar' },
                      foo2: { oldValue: 'bar2' },
                    });

                    storage.get(['key', 'foo', 'foo2'], (result) => {
                      expect(result).toHaveProperty('key', undefined);
                      expect(result).toHaveProperty('foo', undefined);
                      expect(result).toHaveProperty('foo2', undefined);
                      done();
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
