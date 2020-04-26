describe('browser.webNavigation', () => {
  test('onCompleted listener', () => {
    expect(
      jest.isMockFunction(chrome.webNavigation.onCompleted.addListener)
    ).toBe(true);

    const listener = () => {};
    chrome.webNavigation.onCompleted.addListener(listener);

    expect(chrome.webNavigation.onCompleted.addListener).toHaveBeenCalledWith(
      listener
    );
  });

  test('onHistoryStateUpdated listener', () => {
    expect(
      jest.isMockFunction(
        chrome.webNavigation.onHistoryStateUpdated.addListener
      )
    ).toBe(true);

    const listener = () => {};
    chrome.webNavigation.onHistoryStateUpdated.addListener(listener);

    expect(
      chrome.webNavigation.onHistoryStateUpdated.addListener
    ).toHaveBeenCalledWith(listener);
  });
});
