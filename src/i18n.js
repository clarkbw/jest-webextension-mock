export const i18n = {
  getAcceptLanguages: jest.fn(),
  getMessage: jest.fn((key) => `Translated<${key}>`),
  getUILanguage: jest.fn(() => 'en'),
  detectLanguage: jest.fn(),
};
