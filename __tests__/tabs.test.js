import { mock } from '../src/tabs';

test('chrome.tabs.get', done => {
  const callback = jest.fn(() => done());
  expect(jest.isMockFunction(chrome.tabs.get));
  chrome.tabs.get(1, callback);
  expect(chrome.tabs.get).toBeCalled();
  expect(callback).toBeCalled();
});

test('mock chrome.tabs.get', done => {
  const tab = { index: 11 };
  mock(tab);
  const callback = jest.fn(() => done());
  expect(jest.isMockFunction(chrome.tabs.get));
  chrome.tabs.get(1, callback);
  expect(chrome.tabs.get).toBeCalled();
  expect(callback).toBeCalledWith(tab);
});
