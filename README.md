[![npm](https://img.shields.io/npm/v/jest-webextension-mock.svg)](https://www.npmjs.com/package/jest-webextension-mock) | [![npm](https://img.shields.io/npm/l/jest-webextension-mock.svg)](https://github.com/clarkbw/jest-webextension-mock/blob/master/LICENSE) | [![Codecov](https://img.shields.io/codecov/c/github/clarkbw/jest-webextension-mock.svg)](https://codecov.io/gh/clarkbw/jest-webextension-mock) | [![Greenkeeper badge](https://badges.greenkeeper.io/clarkbw/jest-webextension-mock.svg)](https://greenkeeper.io/) |  [![Twitter](https://img.shields.io/twitter/url/https/github.com/clarkbw/jest-webextension-mock.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D) 
---|---|---|---

## Install


For yarn:

```bash
yarn add --dev jest-webextension-mock
```

For npm:

```bash
npm i --save-dev jest-webextension-mock
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
global.chrome = require('jest-webextension-mock');
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

With this module setup in Jest you can start relying on it in your tests.

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

## Development

```
yarn install
yarn test
```

## Pull Request

Before every PR run the following:

```
yarn run prettier
```

## Publish

When publishing a new build, run the following:

```
yarn run prettier
yarn run build
yarn publish
```
