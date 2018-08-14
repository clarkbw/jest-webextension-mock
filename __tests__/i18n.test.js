describe('browser.i18n', () => {
  test('getMessage', () => {
    return expect(browser.i18n.getMessage('keyToTranslate')).toBe(
      'Translated<keyToTranslate>'
    );
  });

  test('getUILanguage', () => {
    return expect(browser.i18n.getUILanguage()).toBe('en');
  });
});
