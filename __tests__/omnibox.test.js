test('chrome.omnibox.setDefaultSuggestion', () => {
  expect(jest.isMockFunction(chrome.omnibox.setDefaultSuggestion));
  chrome.omnibox.setDefaultSuggestion({ description: 'mocking things' });
  expect(chrome.omnibox.setDefaultSuggestion).toBeCalled();
});

test('chrome.omnibox.onInputStarted.addListener', () => {
  expect(jest.isMockFunction(chrome.omnibox.onInputStarted.addListener));
  chrome.omnibox.onInputStarted.addListener(() => {});
  expect(chrome.omnibox.onInputStarted.addListener).toBeCalled();
});

test('chrome.omnibox.onInputChanged.addListener', () => {
  expect(jest.isMockFunction(chrome.omnibox.onInputChanged.addListener));
  chrome.omnibox.onInputChanged.addListener(() => {});
  expect(chrome.omnibox.onInputStarted.addListener).toBeCalled();
});

test('chrome.omnibox.onInputEntered.addListener', () => {
  expect(jest.isMockFunction(chrome.omnibox.onInputEntered.addListener));
  chrome.omnibox.onInputEntered.addListener(() => {});
  expect(chrome.omnibox.onInputEntered.addListener).toBeCalled();
});
