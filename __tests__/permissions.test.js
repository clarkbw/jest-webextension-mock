test('chrome.permissions.contains', () => {
  expect(jest.isMockFunction(chrome.permissions.contains)).toBe(true);
  chrome.permissions.contains({ permissions: ['tabs'] }, () => {});
  expect(chrome.permissions.contains).toBeCalled();
});

test('chrome.permissions.getAll', () => {
  expect(jest.isMockFunction(chrome.permissions.getAll)).toBe(true);
  chrome.permissions.getAll(() => {});
  expect(chrome.permissions.getAll).toBeCalled();
});

test('chrome.permissions.remove', () => {
  expect(jest.isMockFunction(chrome.permissions.remove)).toBe(true);
  chrome.permissions.remove({ permissions: ['tabs'] }, () => {});
  expect(chrome.permissions.remove).toBeCalled();
});

test('chrome.permissions.request', () => {
  expect(jest.isMockFunction(chrome.permissions.request)).toBe(true);
  chrome.permissions.request({ permissions: ['tabs'] }, () => {});
  expect(chrome.permissions.request).toBeCalled();
});

test('chrome.permissions.onAdded.addListener', () => {
  expect(jest.isMockFunction(chrome.permissions.onAdded.addListener)).toBe(
    true
  );
  chrome.permissions.onAdded.addListener(() => {});
  expect(chrome.permissions.onAdded.addListener).toBeCalled();
});

test('chrome.permissions.onRemoved.addListener', () => {
  expect(jest.isMockFunction(chrome.permissions.onRemoved.addListener)).toBe(
    true
  );
  chrome.permissions.onRemoved.addListener(() => {});
  expect(chrome.permissions.onRemoved.addListener).toBeCalled();
});
