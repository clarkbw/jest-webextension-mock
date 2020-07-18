describe('browser.browserAction', () => {
  test('setTitle', () => {
    expect(jest.isMockFunction(browser.browserAction.setTitle)).toBe(true);
    const title = 'TITLE';
    browser.browserAction.setTitle(title);
    expect(browser.browserAction.setTitle).toHaveBeenCalledWith(title);
  });
  test('getTitle', (done) => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(browser.browserAction.getTitle)).toBe(true);
    browser.browserAction.getTitle({}, callback);
    expect(browser.browserAction.getTitle).toHaveBeenCalledTimes(1);
    expect(callback).toBeCalled();
  });
  test('getTitle promise', () => {
    return expect(browser.browserAction.getTitle({})).resolves.toBeUndefined();
  });

  test('setIcon', () => {
    expect(jest.isMockFunction(browser.browserAction.setIcon)).toBe(true);
    const details = { path: 'icon' };
    browser.browserAction.setIcon(details);
    expect(browser.browserAction.setIcon).toHaveBeenCalledWith(details);
  });

  test('setPopup', () => {
    expect(jest.isMockFunction(browser.browserAction.setPopup)).toBe(true);
    const details = { path: 'icon' };
    browser.browserAction.setPopup(details);
    expect(browser.browserAction.setPopup).toHaveBeenCalledWith(details);
  });
  test('getPopup', (done) => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(browser.browserAction.getPopup)).toBe(true);
    browser.browserAction.getPopup({}, callback);
    expect(browser.browserAction.getPopup).toHaveBeenCalledTimes(1);
    expect(callback).toBeCalled();
  });
  test('getPopup promise', () => {
    return expect(browser.browserAction.getPopup({})).resolves.toBeUndefined();
  });

  test('setBadgeText', () => {
    expect(jest.isMockFunction(browser.browserAction.setBadgeText)).toBe(true);
    const text = 'BADGE TEXT';
    browser.browserAction.setBadgeText(text);
    expect(browser.browserAction.setBadgeText).toHaveBeenCalledWith(text);
  });
  test('getBadgeText', (done) => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(browser.browserAction.getBadgeText)).toBe(true);
    browser.browserAction.getBadgeText({}, callback);
    expect(browser.browserAction.getBadgeText).toHaveBeenCalledTimes(1);
    expect(callback).toBeCalled();
  });
  test('getBadgeText promise', () => {
    return expect(
      browser.browserAction.getBadgeText({})
    ).resolves.toBeUndefined();
  });

  test('setBadgeBackgroundColor', () => {
    expect(
      jest.isMockFunction(browser.browserAction.setBadgeBackgroundColor)
    ).toBe(true);
    const details = { color: 'red' };
    browser.browserAction.setBadgeBackgroundColor(details);
    expect(browser.browserAction.setBadgeBackgroundColor).toHaveBeenCalledWith(
      details
    );
  });
  test('getBadgeBackgroundColor', (done) => {
    const callback = jest.fn(() => done());
    expect(
      jest.isMockFunction(browser.browserAction.getBadgeBackgroundColor)
    ).toBe(true);
    browser.browserAction.getBadgeBackgroundColor({}, callback);
    expect(browser.browserAction.getBadgeBackgroundColor).toHaveBeenCalledTimes(
      1
    );
    expect(callback).toBeCalled();
  });
  test('getBadgeBackgroundColor promise', () => {
    return expect(
      browser.browserAction.getBadgeBackgroundColor({})
    ).resolves.toBeUndefined();
  });

  test('enable', () => {
    expect(jest.isMockFunction(browser.browserAction.enable)).toBe(true);
    browser.browserAction.enable();
    expect(browser.browserAction.enable).toHaveBeenCalled();
  });
  test('disable', () => {
    expect(jest.isMockFunction(browser.browserAction.disable)).toBe(true);
    browser.browserAction.disable();
    expect(browser.browserAction.disable).toHaveBeenCalled();
  });
});
