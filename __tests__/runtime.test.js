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
  test('onMessage.addListener', () => {
    expect(jest.isMockFunction(browser.runtime.onMessage.addListener)).toBe(
      true
    );
    browser.runtime.onMessage.addListener();
    expect(browser.runtime.onMessage.addListener).toHaveBeenCalledTimes(1);
  });
  test('onConnect.addListener', () => {
    expect(jest.isMockFunction(browser.runtime.onConnect.addListener)).toBe(
      true
    );
    browser.runtime.onConnect.addListener(() => {});
    expect(browser.runtime.onConnect.addListener).toHaveBeenCalledTimes(1);
  });
});
