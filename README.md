
## Install

For yarn:

```bash
yarn add --dev jest-webextension-mock
```

For npm:

```bash
npm i --save-dev jest-webextension-mock
```

## Usage

In your `package.json` under the `jest` section add the `setupFiles` attribute with this module name.

```json
"jest": {
  "setupFiles": [
    "jest-webextension-mock"
  ]
}
```

Alternatively you can create a setup file.

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
