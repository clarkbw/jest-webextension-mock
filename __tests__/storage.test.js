describe('browser.storage', () => {
  test('onChanged.addListener', () => {
    const callback = jest.fn();
    expect(jest.isMockFunction(browser.storage.onChanged.addListener)).toBe(
      true
    );
    browser.storage.onChanged.addListener(callback);
    expect(browser.storage.onChanged.addListener).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(0);
  });
});

describe('browser.storage', () => {
  ['sync', 'local', 'managed'].forEach(type => {
    describe(type, () => {
      const storage = browser.storage[type];
      describe('get', () => {
        expect(jest.isMockFunction(storage.get)).toBe(true);
        test('a string key', done => {
          const key = 'test';
          storage.get(key, result => {
            expect(result).toBeDefined();
            expect(typeof result === 'object').toBeTruthy();
            expect(result).toHaveProperty(key, '');
            done();
          });
        });
        test('an array key', done => {
          const keys = ['test1', 'test2'];
          storage.get(keys, result => {
            expect(result).toBeDefined();
            expect(typeof result === 'object').toBeTruthy();
            keys.forEach(k => {
              expect(result).toHaveProperty(k);
            });
            done();
          });
        });
        test('an object key', done => {
          const key = { test: [] };
          storage.get(key, result => {
            expect(result).toBeDefined();
            expect(typeof result === 'object').toBeTruthy();
            Object.keys(key).forEach(k => {
              expect(result).toHaveProperty(k);
              expect(result[k]).toEqual(key[k]);
            });
            done();
          });
        });
        test('a invalid key', () => {
          try {
            storage.get(1, jest.fn());
            expect.toThrow;
          } catch (e) {
            expect(e.message).toBe('Wrong key given');
          }
        });
        afterEach(() => {
          expect(storage.get).toHaveBeenCalledTimes(1);
          storage.get.mockClear();
        });
      });
      test('get promise', () => {
        const key = 'key';
        return expect(storage.get(key)).resolves.toEqual({ key: '' });
      });
      test('getBytesInUse', done => {
        const callback = jest.fn(() => done());
        expect(jest.isMockFunction(storage.getBytesInUse)).toBe(true);
        storage.getBytesInUse('key', callback);
        expect(storage.getBytesInUse).toHaveBeenCalledTimes(1);
        expect(callback).toBeCalled();
      });
      test('getBytesInUse promise', () => {
        return expect(storage.getBytesInUse('key')).resolves.toBe(0);
      });
      test('set', done => {
        const callback = jest.fn(() => done());
        expect(jest.isMockFunction(storage.set)).toBe(true);
        storage.set({ key: '' }, callback);
        expect(storage.set).toHaveBeenCalledTimes(1);
        expect(callback).toBeCalled();
      });
      test('set promise', () => {
        return expect(storage.set(1)).resolves.toBeUndefined();
      });
      test('remove', done => {
        const callback = jest.fn(() => done());
        expect(jest.isMockFunction(storage.remove)).toBe(true);
        storage.remove('key', callback);
        expect(storage.remove).toHaveBeenCalledTimes(1);
        expect(callback).toBeCalled();
      });
      test('remove promise', () => {
        return expect(storage.remove(1)).resolves.toBeUndefined();
      });
      test('clear', done => {
        const callback = jest.fn(() => done());
        expect(jest.isMockFunction(browser.storage.sync.clear)).toBe(true);
        storage.clear(callback);
        expect(storage.clear).toHaveBeenCalledTimes(1);
        expect(callback).toBeCalled();
      });
      test('clear promise', () => {
        return expect(storage.clear()).resolves.toBeUndefined();
      });
    });
  });
});
