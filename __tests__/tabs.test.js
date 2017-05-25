describe('browser.tabs', () => {
  test('get', done => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.tabs.get));
    chrome.tabs.get(1, callback);
    expect(chrome.tabs.get).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
  });
  test('getCurrent', done => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.tabs.getCurrent));
    chrome.tabs.getCurrent(callback);
    expect(chrome.tabs.getCurrent).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
  });
  test('connect', () => {
    const name = 'CONNECT_NAME';
    expect(jest.isMockFunction(chrome.tabs.connect));
    const connection = chrome.tabs.connect(1, { name });
    expect(connection.name).toEqual(name);
    expect(jest.isMockFunction(connection.disconnect));
    expect(jest.isMockFunction(connection.postMessage));
    expect(jest.isMockFunction(connection.onDisconnect.addListener));
    expect(jest.isMockFunction(connection.onMessage.addListener));
    expect(chrome.tabs.connect).toHaveBeenCalledTimes(1);
  });
  test('create', done => {
    const callback = jest.fn(() => done());
    const props = { pinned: true };
    expect(jest.isMockFunction(chrome.tabs.create));
    chrome.tabs.create(props, callback);
    expect(chrome.tabs.create).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(props);
  });
  test('duplicate', done => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.tabs.duplicate));
    chrome.tabs.duplicate(1, callback);
    expect(chrome.tabs.create).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith({ id: 1 });
  });
  test('query', done => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.tabs.query));
    chrome.tabs.query({ pinned: true }, callback);
    expect(chrome.tabs.query).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith([{}]);
  });
  test('highlight', done => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.tabs.highlight));
    chrome.tabs.highlight({}, callback);
    expect(chrome.tabs.highlight).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
  });
  test('update', done => {
    const callback = jest.fn(() => done());
    const props = { pinned: true };
    expect(jest.isMockFunction(chrome.tabs.update));
    chrome.tabs.update(1, props, callback);
    expect(chrome.tabs.update).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith({ id: 1, pinned: true });
    chrome.tabs.update(props);
    expect(chrome.tabs.update).toHaveBeenCalledTimes(2);
  });
  test('move', done => {
    const callback = jest.fn(() => done());
    const props = { pinned: true };
    expect(jest.isMockFunction(chrome.tabs.move));
    chrome.tabs.move([1, 2, 3], props, callback);
    expect(chrome.tabs.move).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith([
      { id: 1, pinned: true },
      { id: 2, pinned: true },
      { id: 3, pinned: true },
    ]);
  });
});
