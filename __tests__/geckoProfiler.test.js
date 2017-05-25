describe('browser.geckoProfiler', () => {
  test('stop', () => {
    expect(jest.isMockFunction(browser.geckoProfiler.stop));
    browser.geckoProfiler.stop();
    expect(browser.geckoProfiler.stop).toHaveBeenCalledTimes(1);
  });
  test('start', () => {
    expect(jest.isMockFunction(browser.geckoProfiler.start));
    browser.geckoProfiler.start();
    expect(browser.geckoProfiler.start).toHaveBeenCalledTimes(1);
  });
  test('pause', () => {
    expect(jest.isMockFunction(browser.geckoProfiler.pause));
    browser.geckoProfiler.pause();
    expect(browser.geckoProfiler.pause).toHaveBeenCalledTimes(1);
  });
  test('resume', () => {
    expect(jest.isMockFunction(browser.geckoProfiler.resume));
    browser.geckoProfiler.resume();
    expect(browser.geckoProfiler.resume).toHaveBeenCalledTimes(1);
  });
  test('getProfile', () => {
    expect(jest.isMockFunction(browser.geckoProfiler.getProfile));
    browser.geckoProfiler.getProfile();
    expect(browser.geckoProfiler.getProfile).toHaveBeenCalledTimes(1);
  });
  test('getProfileAsArrayBuffer', () => {
    expect(jest.isMockFunction(browser.geckoProfiler.getProfileAsArrayBuffer));
    browser.geckoProfiler.getProfileAsArrayBuffer();
    expect(browser.geckoProfiler.getProfileAsArrayBuffer).toHaveBeenCalledTimes(
      1
    );
  });
  test('getSymbols', () => {
    expect(jest.isMockFunction(browser.geckoProfiler.getSymbols));
    browser.geckoProfiler.getSymbols('NAME', 'ID');
    expect(browser.geckoProfiler.getSymbols).toHaveBeenCalledTimes(1);
  });
  test('onRunning.addListener', () => {
    expect(jest.isMockFunction(browser.geckoProfiler.onRunning.addListener));
    browser.geckoProfiler.onRunning.addListener(() => {});
    expect(browser.geckoProfiler.onRunning.addListener).toHaveBeenCalledTimes(
      1
    );
  });
});
