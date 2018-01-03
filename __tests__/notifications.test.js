describe('chrome.notifications', () => {
  test('create', done => {
    const notificationId = null;
    const options = {
      type: 'basic',
      title: 'Title',
      message: 'My message',
      icons: 'image.png',
    };
    const callback = jest.fn(() => done());

    expect(jest.isMockFunction(chrome.notifications.create)).toBe(true);

    chrome.notifications.create(options);
    expect(chrome.notifications.create).toHaveBeenCalledTimes(1);
    expect(chrome.notifications.create).toHaveBeenLastCalledWith(options);
    expect(callback).not.toHaveBeenCalled();

    chrome.notifications.create(notificationId, options);
    expect(chrome.notifications.create).toHaveBeenCalledTimes(2);
    expect(chrome.notifications.create).toHaveBeenLastCalledWith(
      notificationId,
      options,
    );
    expect(callback).not.toHaveBeenCalled();

    chrome.notifications.create(notificationId, options, callback);
    expect(chrome.notifications.create).toHaveBeenCalledTimes(3);
    expect(chrome.notifications.create).toHaveBeenLastCalledWith(
      notificationId,
      options,
      callback,
    );
    expect(callback).toHaveBeenLastCalledWith('generated-id');

    chrome.notifications.create('my-notification-id', options, callback);
    expect(chrome.notifications.create).toHaveBeenCalledTimes(4);
    expect(chrome.notifications.create).toHaveBeenLastCalledWith(
      'my-notification-id',
      options,
      callback,
    );
    expect(callback).toHaveBeenLastCalledWith('my-notification-id');
  });

  test('update', done => {
    // Same behavior than « create » method, so I will write a very simple test
    const notificationId = null;
    const options = {
      type: 'basic',
      title: 'Title',
      message: 'My message',
      icons: 'image.png',
    };
    const callback = jest.fn(() => done());

    chrome.notifications.update(notificationId, options, callback);
    expect(chrome.notifications.update).toHaveBeenCalledTimes(1);
    expect(chrome.notifications.update).toHaveBeenLastCalledWith(
      notificationId,
      options,
      callback,
    );
    expect(callback).toHaveBeenLastCalledWith('generated-id');
  });
});
