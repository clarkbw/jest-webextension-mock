test('chrome.omnibox.setDefaultSuggestion', () => {
  expect(jest.isMockFunction(chrome.omnibox.setDefaultSuggestion)).toBe(true);
  chrome.omnibox.setDefaultSuggestion({ description: 'mocking things' });
  expect(chrome.omnibox.setDefaultSuggestion).toBeCalled();
});

test('chrome.omnibox.onInputStarted.addListener', () => {
  expect(jest.isMockFunction(chrome.omnibox.onInputStarted.addListener)).toBe(
    true
  );
  chrome.omnibox.onInputStarted.addListener(() => {});
  expect(chrome.omnibox.onInputStarted.addListener).toBeCalled();
});

test('chrome.omnibox.onInputChanged.addListener', () => {
  expect(jest.isMockFunction(chrome.omnibox.onInputChanged.addListener)).toBe(
    true
  );
  chrome.omnibox.onInputChanged.addListener(() => {});
  expect(chrome.omnibox.onInputStarted.addListener).toBeCalled();
});

test('chrome.omnibox.onInputEntered.addListener', () => {
  expect(jest.isMockFunction(chrome.omnibox.onInputEntered.addListener)).toBe(
    true
  );
  chrome.omnibox.onInputEntered.addListener(() => {});
  expect(chrome.omnibox.onInputEntered.addListener).toBeCalled();
});
