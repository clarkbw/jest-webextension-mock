describe('browser.tabs', () => {
  test('get', (done) => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.tabs.get)).toBe(true);
    chrome.tabs.get(1, callback);
    expect(chrome.tabs.get).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
  });
  test('getCurrent', (done) => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.tabs.getCurrent)).toBe(true);
    chrome.tabs.getCurrent(callback);
    expect(chrome.tabs.getCurrent).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
  });
  test('connect', () => {
    const name = 'CONNECT_NAME';
    expect(jest.isMockFunction(chrome.tabs.connect)).toBe(true);
    const connection = chrome.tabs.connect(1, { name });
    expect(connection.name).toEqual(name);
    expect(jest.isMockFunction(connection.disconnect)).toBe(true);
    expect(jest.isMockFunction(connection.postMessage)).toBe(true);
    expect(jest.isMockFunction(connection.onDisconnect.addListener)).toBe(true);
    expect(jest.isMockFunction(connection.onMessage.addListener)).toBe(true);
    expect(chrome.tabs.connect).toHaveBeenCalledTimes(1);
  });
  test('create', (done) => {
    const callback = jest.fn(() => done());
    const props = { pinned: true };
    expect(jest.isMockFunction(chrome.tabs.create)).toBe(true);
    chrome.tabs.create(props, callback);
    expect(chrome.tabs.create).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(props);
  });
  test('create promise', () => {
    const props = { pinned: true };
    return expect(chrome.tabs.create(props)).resolves.toBe(props);
  });
  test('duplicate', (done) => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.tabs.duplicate)).toBe(true);
    chrome.tabs.duplicate(1, callback);
    expect(chrome.tabs.duplicate).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith({ id: 1 });
  });
  test('remove', (done) => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.tabs.remove)).toBe(true);
    chrome.tabs.remove([1], callback);
    expect(chrome.tabs.remove).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
  });
  test('remove promise', () => {
    expect(chrome.tabs.remove([1])).resolves.toBeUndefined();
  });
  test('query', (done) => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.tabs.query)).toBe(true);
    chrome.tabs.query({ pinned: true }, callback);
    expect(chrome.tabs.query).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith([{}]);
  });
  test('highlight', (done) => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.tabs.highlight)).toBe(true);
    chrome.tabs.highlight({}, callback);
    expect(chrome.tabs.highlight).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
  });
  test('update', (done) => {
    const callback = jest.fn(() => done());
    const props = { pinned: true };
    expect(jest.isMockFunction(chrome.tabs.update)).toBe(true);
    chrome.tabs.update(1, props, callback);
    expect(chrome.tabs.update).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith({ id: 1, pinned: true });
    chrome.tabs.update(props);
    expect(chrome.tabs.update).toHaveBeenCalledTimes(2);
  });
  test('move', (done) => {
    const callback = jest.fn(() => done());
    const props = { pinned: true };
    expect(jest.isMockFunction(chrome.tabs.move)).toBe(true);
    chrome.tabs.move([1, 2, 3], props, callback);
    expect(chrome.tabs.move).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith([
      { id: 1, pinned: true },
      { id: 2, pinned: true },
      { id: 3, pinned: true },
    ]);
  });
  [
    'onCreated',
    'onUpdated',
    'onMoved',
    'onActivated',
    'onHighlighted',
    'onDetached',
    'onAttached',
    'onRemoved',
    'onReplaced',
    'onZoomChange',
  ].forEach((event) => {
    ['addListener', 'removeListener', 'hasListener'].forEach((method) => {
      test(`${event}.${method}`, () => {
        const callback = jest.fn();
        expect(jest.isMockFunction(browser.tabs[event][method])).toBe(true);
        browser.tabs[event][method](callback);
        expect(browser.tabs[event][method]).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledTimes(0);
      });
    });
  });
  test('reload', (done) => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.tabs.reload)).toBe(true);

    chrome.tabs.reload(1, {}, callback);

    expect(chrome.tabs.reload).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
  });
  test('sendMessage', (done) => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.tabs.sendMessage)).toBe(true);
    chrome.tabs.sendMessage(1, { test: 'message' }, callback);
    expect(chrome.tabs.sendMessage).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
    chrome.tabs.sendMessage(1, { test: 'message' });
    expect(chrome.tabs.sendMessage).toHaveBeenCalledTimes(2);
  });
  test('sendMessage listener', (done) => {
    const listener = jest.fn();
    browser.runtime.onMessage.addListener(listener);
    chrome.tabs.sendMessage(1, { test: 'message' }, done);
    expect(listener).toHaveBeenCalledWith(1, { test: 'message' });
  });
  test('sendMessage promise', () => {
    return expect(chrome.tabs.sendMessage({})).resolves.toBeUndefined();
  });
});
