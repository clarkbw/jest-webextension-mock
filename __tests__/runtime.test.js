beforeEach(() => {
  browser.runtime.sendMessage.mockClear();
  browser.runtime.onMessage.addListener.mockClear();
  browser.runtime.onMessage.removeListener.mockClear();
  browser.runtime.onMessage.hasListener.mockClear();
  browser.runtime.onMessageExternal.addListener.mockClear();
  browser.runtime.onMessageExternal.removeListener.mockClear();
  browser.runtime.onMessageExternal.hasListener.mockClear();
});

describe('browser.runtime', () => {
  test('connect', () => {
    const name = 'CONNECT_NAME';
    expect(jest.isMockFunction(browser.runtime.connect)).toBe(true);
    const connection = browser.runtime.connect({ name });
    expect(connection.name).toEqual(name);
    expect(jest.isMockFunction(connection.postMessage)).toBe(true);
    expect(jest.isMockFunction(connection.onDisconnect.addListener)).toBe(true);
    expect(jest.isMockFunction(connection.onMessage.addListener)).toBe(true);
    expect(jest.isMockFunction(connection.disconnect)).toBe(true);
    expect(browser.runtime.connect).toHaveBeenCalledTimes(1);
  });
  test('connect.onMessage listener', (done) => {
    const name = 'CONNECT_NAME';
    const listener = jest.fn();
    browser.runtime.connect(name).onMessage.addListener(listener);
    browser.runtime.sendMessage({ test: 'message' }, done);
    expect(listener).toHaveBeenCalledWith({ test: 'message' });
  });
  test('getURL', () => {
    const path = 'TEST_PATH';
    const extensionOriginURL = globalThis[Symbol.for('jest-webextension-mock')].extensionPath;
    expect(jest.isMockFunction(browser.runtime.getURL)).toBe(true);
    const respPath = browser.runtime.getURL(path);
    expect(respPath).toEqual(extensionOriginURL + path);
    expect(browser.runtime.getURL).toHaveBeenCalledTimes(1);
  });
  test('sendMessage', (done) => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(browser.runtime.sendMessage)).toBe(true);
    browser.runtime.sendMessage({ test: 'message' }, callback);
    expect(browser.runtime.sendMessage).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
    browser.runtime.sendMessage({ test: 'message' });
    expect(browser.runtime.sendMessage).toHaveBeenCalledTimes(2);
  });
  test('sendMessage listener', (done) => {
    const listener = jest.fn();
    browser.runtime.onMessage.addListener(listener);
    browser.runtime.sendMessage({ test: 'message' }, done);
    expect(listener).toHaveBeenCalledWith({ test: 'message' });
  });
  test('sendMessage promise', () => {
    return expect(browser.runtime.sendMessage({})).resolves.toBeUndefined();
  });
  test(`onMessage.addListener`, () => {
    const callback = jest.fn();
    expect(jest.isMockFunction(browser.runtime.onMessage.addListener)).toBe(
      true
    );
    browser.runtime.onMessage.addListener(callback);
    expect(browser.runtime.onMessage.addListener).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(0);
  });
  test(`onMessage.removeListener`, () => {
    const callback = jest.fn();
    expect(jest.isMockFunction(browser.runtime.onMessage.removeListener)).toBe(
      true
    );
    browser.runtime.onMessage.removeListener(callback);
    expect(browser.runtime.onMessage.hasListener(callback)).toBe(false);
    expect(browser.runtime.onMessage.removeListener).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(0);
  });
  test(`onMessage.hasListener`, () => {
    const callback = jest.fn();
    expect(jest.isMockFunction(browser.runtime.onMessage.hasListener)).toBe(
      true
    );
    browser.runtime.onMessage.addListener(callback);
    const returnVal = browser.runtime.onMessage.hasListener(callback);
    expect(returnVal).toBe(true);
    expect(browser.runtime.onMessage.hasListener).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(0);
  });
  test(`onMessageExternal.addListener`, () => {
    const callback = jest.fn();
    expect(jest.isMockFunction(browser.runtime.onMessageExternal.addListener)).toBe(
      true
    );
    browser.runtime.onMessageExternal.addListener(callback);
    expect(browser.runtime.onMessageExternal.addListener).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(0);
  });
  test(`onMessageExternal.removeListener`, () => {
    const callback = jest.fn();
    expect(jest.isMockFunction(browser.runtime.onMessageExternal.removeListener)).toBe(
      true
    );
    browser.runtime.onMessageExternal.removeListener(callback);
    expect(browser.runtime.onMessageExternal.hasListener(callback)).toBe(false);
    expect(browser.runtime.onMessageExternal.removeListener).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(0);
  });
  test(`onMessageExternal.hasListener`, () => {
    const callback = jest.fn();
    expect(jest.isMockFunction(browser.runtime.onMessageExternal.hasListener)).toBe(
      true
    );
    browser.runtime.onMessageExternal.addListener(callback);
    const returnVal = browser.runtime.onMessageExternal.hasListener(callback);
    expect(returnVal).toBe(true);
    expect(browser.runtime.onMessageExternal.hasListener).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(0);
  });
  ['addListener', 'removeListener', 'hasListener'].forEach((method) => {
    test(`onConnect.${method}`, () => {
      const callback = jest.fn();
      expect(jest.isMockFunction(browser.runtime.onConnect[method])).toBe(true);
      browser.runtime.onConnect[method](callback);
      expect(browser.runtime.onConnect[method]).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledTimes(0);
    });
  });
  ['addListener', 'removeListener', 'hasListener'].forEach((method) => {
    test(`onInstalled.${method}`, () => {
      const callback = jest.fn();
      expect(jest.isMockFunction(browser.runtime.onInstalled[method])).toBe(
        true
      );
      browser.runtime.onInstalled[method](callback);
      expect(browser.runtime.onInstalled[method]).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledTimes(0);
    });
  });
  test('openOptionsPage', () => {
    expect(jest.isMockFunction(browser.runtime.openOptionsPage)).toBe(true);
    browser.runtime.openOptionsPage();
    expect(browser.runtime.openOptionsPage).toHaveBeenCalledTimes(1);
  });
  test('getManifest', () => {
    expect(jest.isMockFunction(browser.runtime.getManifest)).toBe(true);
    expect(browser.runtime.getManifest()).toEqual({ manifest_version: 3 });
    expect(browser.runtime.getManifest).toHaveBeenCalledTimes(1);
  });
});
