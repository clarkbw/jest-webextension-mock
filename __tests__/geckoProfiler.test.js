describe('browser.geckoProfiler', () => {
  test('stop', () => {
    expect(jest.isMockFunction(browser.geckoProfiler.stop)).toBe(true);
    browser.geckoProfiler.stop();
    expect(browser.geckoProfiler.stop).toHaveBeenCalledTimes(1);
  });
  test('stop promise', () => {
    return expect(browser.geckoProfiler.stop()).resolves.toBeUndefined();
  });
  test('start', () => {
    expect(jest.isMockFunction(browser.geckoProfiler.start)).toBe(true);
    browser.geckoProfiler.start();
    expect(browser.geckoProfiler.start).toHaveBeenCalledTimes(1);
  });
  test('start promise', () => {
    return expect(browser.geckoProfiler.start()).resolves.toBeUndefined();
  });
  test('pause', () => {
    expect(jest.isMockFunction(browser.geckoProfiler.pause)).toBe(true);
    browser.geckoProfiler.pause();
    expect(browser.geckoProfiler.pause).toHaveBeenCalledTimes(1);
  });
  test('pause promise', () => {
    return expect(browser.geckoProfiler.pause()).resolves.toBeUndefined();
  });
  test('resume', () => {
    expect(jest.isMockFunction(browser.geckoProfiler.resume)).toBe(true);
    browser.geckoProfiler.resume();
    expect(browser.geckoProfiler.resume).toHaveBeenCalledTimes(1);
  });
  test('resume promise', () => {
    return expect(browser.geckoProfiler.resume()).resolves.toBeUndefined();
  });
  test('getProfile', () => {
    expect(jest.isMockFunction(browser.geckoProfiler.getProfile)).toBe(true);
    browser.geckoProfiler.getProfile();
    expect(browser.geckoProfiler.getProfile).toHaveBeenCalledTimes(1);
  });
  test('getProfile promise', () => {
    return expect(browser.geckoProfiler.getProfile()).resolves.toBeUndefined();
  });
  test('getProfileAsArrayBuffer', () => {
    expect(
      jest.isMockFunction(browser.geckoProfiler.getProfileAsArrayBuffer)
    ).toBe(true);
    browser.geckoProfiler.getProfileAsArrayBuffer();
    expect(browser.geckoProfiler.getProfileAsArrayBuffer).toHaveBeenCalledTimes(
      1
    );
  });
  test('getProfileAsArrayBuffer promise', () => {
    return expect(
      browser.geckoProfiler.getProfileAsArrayBuffer()
    ).resolves.toBeUndefined();
  });
  test('getSymbols', () => {
    expect(jest.isMockFunction(browser.geckoProfiler.getSymbols)).toBe(true);
    browser.geckoProfiler.getSymbols('NAME', 'ID');
    expect(browser.geckoProfiler.getSymbols).toHaveBeenCalledTimes(1);
  });
  test('getSymbols promise', () => {
    return expect(browser.geckoProfiler.getSymbols()).resolves.toBeUndefined();
  });
  test('onRunning.addListener', () => {
    expect(
      jest.isMockFunction(browser.geckoProfiler.onRunning.addListener)
    ).toBe(true);
    browser.geckoProfiler.onRunning.addListener(() => {});
    expect(browser.geckoProfiler.onRunning.addListener).toHaveBeenCalledTimes(
      1
    );
  });
});
