describe('browser.commands', () => {
  test('getAll', (done) => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(browser.commands.getAll)).toBe(true);
    browser.commands.getAll(callback);
    expect(browser.commands.getAll).toHaveBeenCalledTimes(1);
    expect(callback).toBeCalled();
  });
  test('getAll promise', () => {
    return expect(browser.commands.getAll()).resolves.toBeUndefined();
  });
  test('onCommand.addListener', () => {
    expect(jest.isMockFunction(browser.commands.onCommand.addListener)).toBe(
      true
    );
    browser.commands.onCommand.addListener(() => {});
    expect(browser.commands.onCommand.addListener).toHaveBeenCalledTimes(1);
  });
});
