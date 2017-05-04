// https://developer.chrome.com/extensions/omnibox

export const omnibox = {
  setDefaultSuggestion: jest.fn(),
  onInputStarted: {
    addListener: jest.fn(),
  },
  onInputChanged: {
    addListener: jest.fn(),
  },
  onInputEntered: {
    addListener: jest.fn(),
  },
  onInputCancelled: {
    addListener: jest.fn(),
  },
};
