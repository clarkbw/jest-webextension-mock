describe('browser.runtime', () => {
  test('connect', () => {
    const name = 'CONNECT_NAME';
    expect(jest.isMockFunction(browser.runtime.connect)).toBe(true);
    const connection = browser.runtime.connect({ name });
    expect(connection.name).toEqual(name);
    expect(jest.isMockFunction(connection.postMessage)).toBe(true);
    expect(jest.isMockFunction(connection.onDisconnect.addListener)).toBe(true);
    expect(jest.isMockFunction(connection.onMessage.addListener)).toBe(true);
    expect(browser.runtime.connect).toHaveBeenCalledTimes(1);
  });
  test('getURL', () => {
    const path = 'TEST_PATH';
    expect(jest.isMockFunction(browser.runtime.getURL)).toBe(true);
    const respPath = browser.runtime.getURL(path);
    expect(respPath).toEqual(path);
    expect(browser.runtime.getURL).toHaveBeenCalledTimes(1);
  });
  test('sendMessage', done => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(browser.runtime.sendMessage)).toBe(true);
    browser.runtime.sendMessage({ test: 'message' }, callback);
    expect(browser.runtime.sendMessage).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
    browser.runtime.sendMessage({ test: 'message' });
    expect(browser.runtime.sendMessage).toHaveBeenCalledTimes(2);
  });
  test('sendMessage promise', () => {
    return expect(browser.runtime.sendMessage({})).resolves.toBeUndefined();
  });
  ['addListener', 'removeListener', 'hasListener'].forEach(method => {
    test(`onMessage.${method}`, () => {
      const callback = jest.fn();
      expect(jest.isMockFunction(browser.runtime.onMessage[method])).toBe(true);
      browser.runtime.onMessage[method](callback);
      expect(browser.runtime.onMessage[method]).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledTimes(0);
    });
  });
  ['addListener', 'removeListener', 'hasListener'].forEach(method => {
    test(`onConnect.${method}`, () => {
      const callback = jest.fn();
      expect(jest.isMockFunction(browser.runtime.onConnect[method])).toBe(true);
      browser.runtime.onConnect[method](callback);
      expect(browser.runtime.onConnect[method]).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledTimes(0);
    });
  });
});
