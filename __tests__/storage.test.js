describe('chrome.storage', () => {
  test('onChanged.addListener', () => {
    const callback = jest.fn();
    expect(jest.isMockFunction(chrome.storage.onChanged.addListener));
    chrome.storage.onChanged.addListener(callback);
    expect(chrome.storage.onChanged.addListener).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(0);
  });
});

describe('chrome.storage.sync', () => {
  test('get', done => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.storage.sync.get));
    chrome.storage.sync.get(1, callback);
    expect(chrome.storage.sync.get).toHaveBeenCalledTimes(1);
    expect(callback).toBeCalled();
  });
  test('getBytesInUse', done => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.storage.sync.getBytesInUse));
    chrome.storage.sync.getBytesInUse(1, callback);
    expect(chrome.storage.sync.getBytesInUse).toHaveBeenCalledTimes(1);
    expect(callback).toBeCalled();
  });
  test('set', done => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.storage.sync.set));
    chrome.storage.sync.set(1, callback);
    expect(chrome.storage.sync.set).toHaveBeenCalledTimes(1);
    expect(callback).toBeCalled();
  });
  test('remove', done => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.storage.sync.remove));
    chrome.storage.sync.remove(1, callback);
    expect(chrome.storage.sync.remove).toHaveBeenCalledTimes(1);
    expect(callback).toBeCalled();
  });
  test('clear', done => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.storage.sync.clear));
    chrome.storage.sync.clear(callback);
    expect(chrome.storage.sync.clear).toHaveBeenCalledTimes(1);
    expect(callback).toBeCalled();
  });
});

describe('chrome.storage.local', () => {
  test('get', done => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.storage.local.get));
    chrome.storage.local.get(1, callback);
    expect(chrome.storage.local.get).toHaveBeenCalledTimes(1);
    expect(callback).toBeCalled();
  });
  test('getBytesInUse', done => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.storage.local.getBytesInUse));
    chrome.storage.local.getBytesInUse(1, callback);
    expect(chrome.storage.local.getBytesInUse).toHaveBeenCalledTimes(1);
    expect(callback).toBeCalled();
  });
  test('set', done => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.storage.local.set));
    chrome.storage.local.set(1, callback);
    expect(chrome.storage.local.set).toHaveBeenCalledTimes(1);
    expect(callback).toBeCalled();
  });
  test('remove', done => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.storage.local.remove));
    chrome.storage.local.remove(1, callback);
    expect(chrome.storage.local.remove).toHaveBeenCalledTimes(1);
    expect(callback).toBeCalled();
  });
  test('clear', done => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.storage.local.clear));
    chrome.storage.local.clear(callback);
    expect(chrome.storage.local.clear).toHaveBeenCalledTimes(1);
    expect(callback).toBeCalled();
  });
});

describe('chrome.storage.managed', () => {
  test('get', done => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.storage.managed.get));
    chrome.storage.managed.get(1, callback);
    expect(chrome.storage.managed.get).toHaveBeenCalledTimes(1);
    expect(callback).toBeCalled();
  });
  test('getBytesInUse', done => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.storage.managed.getBytesInUse));
    chrome.storage.managed.getBytesInUse(1, callback);
    expect(chrome.storage.managed.getBytesInUse).toHaveBeenCalledTimes(1);
    expect(callback).toBeCalled();
  });
  test('set', done => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.storage.managed.set));
    chrome.storage.managed.set(1, callback);
    expect(chrome.storage.managed.set).toHaveBeenCalledTimes(1);
    expect(callback).toBeCalled();
  });
  test('remove', done => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.storage.managed.remove));
    chrome.storage.managed.remove(1, callback);
    expect(chrome.storage.managed.remove).toHaveBeenCalledTimes(1);
    expect(callback).toBeCalled();
  });
  test('clear', done => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.storage.managed.clear));
    chrome.storage.managed.clear(callback);
    expect(chrome.storage.managed.clear).toHaveBeenCalledTimes(1);
    expect(callback).toBeCalled();
  });
});
