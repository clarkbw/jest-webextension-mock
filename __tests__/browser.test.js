test('browser', () => {
  expect(browser).toBe(chrome);
});
test('chrome', () => {
  expect(chrome).toBe(browser);
});
