// https://developer.chrome.com/extensions/permissions

export let onMessageListeners = [];
export let onMessageExternalListeners = [];

export const permissions = {
  contains: jest.fn(),
  getAll: jest.fn(),
  remove: jest.fn(),
  request: jest.fn(),
  onAdded: {
    addListener: jest.fn(),
  },
  onRemoved: {
    addListener: jest.fn(),
  },
};
