describe('globals', () => {
  test('browser', () => {
    expect(browser).toBe(chrome);
  });
  test('chrome', () => {
    expect(chrome).toBe(browser);
  });
});

describe('globals for firefox', () => {
  test('exportFunction', () => {
    const func = () => {};
    expect(jest.isMockFunction(exportFunction)).toBe(true);
    expect(exportFunction(func)).toBe(func);
  });
  test('cloneInto', () => {
    const obj = {};
    expect(jest.isMockFunction(cloneInto)).toBe(true);
    expect(cloneInto(obj)).toBe(obj);
  });
});
