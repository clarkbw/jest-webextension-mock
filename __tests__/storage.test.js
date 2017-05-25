describe('browser.storage', () => {
  test('onChanged.addListener', () => {
    const callback = jest.fn();
    expect(jest.isMockFunction(browser.storage.onChanged.addListener));
    browser.storage.onChanged.addListener(callback);
    expect(browser.storage.onChanged.addListener).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(0);
  });
});

describe('browser.storage', () => {
  ['sync', 'local', 'managed'].forEach(type => {
    describe(type, () => {
      const storage = browser.storage[type];
      test('get', done => {
        const callback = jest.fn(() => done());
        expect(jest.isMockFunction(storage.get));
        storage.get(1, callback);
        expect(storage.get).toHaveBeenCalledTimes(1);
        expect(callback).toBeCalled();
      });
      test('get promise', () => {
        return expect(storage.get(1)).resolves.toMatchObject({ id: 1 });
      });
      test('getBytesInUse', done => {
        const callback = jest.fn(() => done());
        expect(jest.isMockFunction(storage.getBytesInUse));
        storage.getBytesInUse(1, callback);
        expect(storage.getBytesInUse).toHaveBeenCalledTimes(1);
        expect(callback).toBeCalled();
      });
      test('getBytesInUse promise', () => {
        return expect(storage.getBytesInUse(1)).resolves.toMatchObject({
          id: 1,
        });
      });
      test('set', done => {
        const callback = jest.fn(() => done());
        expect(jest.isMockFunction(storage.set));
        storage.set(1, callback);
        expect(storage.set).toHaveBeenCalledTimes(1);
        expect(callback).toBeCalled();
      });
      test('set promise', () => {
        return expect(storage.set(1)).resolves.toMatchObject({ id: 1 });
      });
      test('remove', done => {
        const callback = jest.fn(() => done());
        expect(jest.isMockFunction(storage.remove));
        storage.remove(1, callback);
        expect(storage.remove).toHaveBeenCalledTimes(1);
        expect(callback).toBeCalled();
      });
      test('remove promise', () => {
        return expect(storage.remove(1)).resolves.toMatchObject({ id: 1 });
      });
      test('clear', done => {
        const callback = jest.fn(() => done());
        expect(jest.isMockFunction(browser.storage.sync.clear));
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
