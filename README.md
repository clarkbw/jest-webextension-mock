[![npm](https://img.shields.io/npm/v/jest-webextension-mock.svg)](https://www.npmjs.com/package/jest-webextension-mock) [![npm](https://img.shields.io/npm/l/jest-webextension-mock.svg)](https://github.com/clarkbw/jest-webextension-mock/blob/master/LICENSE) [![Codecov](https://img.shields.io/codecov/c/github/clarkbw/jest-webextension-mock.svg)](https://codecov.io/gh/clarkbw/jest-webextension-mock) [![Greenkeeper badge](https://badges.greenkeeper.io/clarkbw/jest-webextension-mock.svg)](https://greenkeeper.io/) [![Twitter](https://img.shields.io/twitter/url/https/github.com/clarkbw/jest-webextension-mock.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)

## Install

For npm:

```bash
npm i --save-dev jest-webextension-mock
```

For yarn:

```bash
yarn add --dev jest-webextension-mock
```

## Setup

### Require module directly

In your `package.json` under the `jest` section add the `setupFiles` attribute with this module name.

```json
"jest": {
  "setupFiles": [
    "jest-webextension-mock"
  ]
}
```

### Use setup file

Alternatively you can create a new setup file and require this module.

`__setups__/chrome.js`
```js
require('jest-webextension-mock');
```

And add that file to your `setupFiles`:

```json
"jest": {
  "setupFiles": [
    "./__setups__/chrome.js"
  ]
}
```

## Usage

Use this module to check that API calls were made when expected.

```js
describe('your function to test', () => {
  it('should have called a webextension API', () => {
    yourFunctionToTest();
    expect(chrome.tabs.update).toHaveBeenCalled();
  });
});
```

Check the API was called with certain parameters.

```js
describe('your function to test', () => {
  it('should have called a webextension API', () => {
    yourFunctionToTest();
    expect(chrome.tabs.update).toHaveBeenCalledWith({
      url: 'https://example.com/'
    });
  });
});
```

And you can reset the API mocks to ensure APIs are only called when needed.

```js
beforeEach(() => {
  browser.geckoProfiler.start.mockClear();
  browser.geckoProfiler.stop.mockClear();
});

it('should toggle the profiler on from stopped', () => {
  const store = mockStore(reducer(undefined, {}));
  const expectedActions = [
    { type: 'PROFILER_START', status: 'start' },
    { type: 'PROFILER_START', status: 'done' },
  ];
  return store.dispatch(actions.toggle()).then(() => {
    expect(browser.geckoProfiler.start).toHaveBeenCalledTimes(1);
    expect(store.getActions()).toEqual(expectedActions);
  });
});
```

## Development

```
npm install
npm test
```

## Publish

Publishing new releases is automated via the GitHub Action https://github.com/mikeal/merge-release tool. 

To ensure your feature is properly released prefix your commit message with `feat` for any new feature. For example: `feat: new API` and this will bump the minor release number.  All other changes will be assumed as patch releases unless you include the string `BREAKING CHANGE` in your commit message or description which will trigger a new major release.  (do not do this unless absolutely required)

