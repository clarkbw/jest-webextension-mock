describe('chrome.notifications', () => {
  test('create', done => {
    const options = { type: 'basic' };
    const callback = jest.fn(() => done());

    expect(jest.isMockFunction(chrome.notifications.create)).toBe(true);

    chrome.notifications.create(options, callback);
    expect(chrome.notifications.create).toHaveBeenCalledTimes(1);
    expect(chrome.notifications.create).toHaveBeenLastCalledWith(
      options,
      callback
    );
    expect(callback).toHaveBeenLastCalledWith('generated-id');

    chrome.notifications.create('id', options, callback);
    expect(chrome.notifications.create).toHaveBeenCalledTimes(2);
    expect(chrome.notifications.create).toHaveBeenLastCalledWith(
      'id',
      options,
      callback
    );
    expect(callback).toHaveBeenLastCalledWith('id');
  });

  test('update', done => {
    const options = { type: 'basic' };
    const callback = jest.fn(() => done());

    expect(jest.isMockFunction(chrome.notifications.update)).toBe(true);
    chrome.notifications.update('id', options, callback);
    expect(chrome.notifications.update).toHaveBeenCalledTimes(1);
    expect(chrome.notifications.update).toHaveBeenLastCalledWith(
      'id',
      options,
      callback
    );
    expect(callback).toHaveBeenLastCalledWith(true);
  });
});
