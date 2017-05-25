describe('browser.runtime', () => {
  test('connect', () => {
    const name = 'CONNECT_NAME';
    expect(jest.isMockFunction(browser.runtime.connect));
    const connection = browser.runtime.connect({ name });
    expect(connection.name).toEqual(name);
    expect(jest.isMockFunction(connection.postMessage));
    expect(jest.isMockFunction(connection.onDisconnect.addListener));
    expect(browser.runtime.connect).toHaveBeenCalledTimes(1);
  });
  test('sendMessage', done => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(browser.runtime.sendMessage));
    browser.runtime.sendMessage({ test: 'message' }, callback);
    expect(browser.runtime.sendMessage).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
  });
  test('onMessage.addListener', () => {
    expect(jest.isMockFunction(browser.runtime.onMessage.addListener));
    browser.runtime.onMessage.addListener();
    expect(browser.runtime.onMessage.addListener).toHaveBeenCalledTimes(1);
  });
  test('onConnect.addListener', () => {
    expect(jest.isMockFunction(browser.runtime.onConnect.addListener));
    browser.runtime.onConnect.addListener(() => {});
    expect(browser.runtime.onConnect.addListener).toHaveBeenCalledTimes(1);
  });
});
