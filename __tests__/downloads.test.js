describe('browser.downloads', () => {
  test('acceptDanger', (done) => {
    const downloadId = 1;
    const callback = jest.fn(() => done());

    expect(jest.isMockFunction(chrome.downloads.acceptDanger)).toBe(true);
    chrome.downloads.acceptDanger(downloadId, callback);
    expect(chrome.downloads.acceptDanger).toHaveBeenCalledTimes(1);
    expect(chrome.downloads.acceptDanger).toHaveBeenLastCalledWith(downloadId, callback);
    expect(callback).toHaveBeenCalled();
  });
  test('acceptDanger Promise', () => {
    const downloadId = 1;

    expect(chrome.downloads.acceptDanger(downloadId)).resolves.toBeUndefined();
  });
  test('cancel', (done) => {
    const downloadId = 1;
    const callback = jest.fn(() => done());

    expect(jest.isMockFunction(chrome.downloads.cancel)).toBe(true);
    chrome.downloads.cancel(downloadId, callback);
    expect(chrome.downloads.cancel).toHaveBeenCalledTimes(1);
    expect(chrome.downloads.cancel).toHaveBeenLastCalledWith(downloadId, callback);
    expect(callback).toHaveBeenCalled();
  });
  test('cancel Promise', () => {
    const downloadId = 1;

    expect(chrome.downloads.cancel(downloadId)).resolves.toBeUndefined();
  });
  test('download', (done) => {
    const options = {};
    const callback = jest.fn(() => done());

    expect(jest.isMockFunction(chrome.downloads.download)).toBe(true);
    chrome.downloads.download(options, callback);
    expect(chrome.downloads.download).toHaveBeenCalledTimes(1);
    expect(chrome.downloads.download).toHaveBeenLastCalledWith(options, callback);
    expect(callback).toHaveBeenCalled();
  });
  test('download Promise', () => {
    const options = {};

    expect(chrome.downloads.download(options)).resolves.toBeUndefined();
  });
  test('erase', (done) => {
    const query = {};
    const callback = jest.fn(() => done());

    expect(jest.isMockFunction(chrome.downloads.erase)).toBe(true);
    chrome.downloads.erase(query, callback);
    expect(chrome.downloads.erase).toHaveBeenCalledTimes(1);
    expect(chrome.downloads.erase).toHaveBeenLastCalledWith(query, callback);
    expect(callback).toHaveBeenCalled();
  });
  test('erase Promise', () => {
    const query = {};

    expect(chrome.downloads.erase(query)).resolves.toBeUndefined();
  });
  test('getFileIcon', (done) => {
    const downloadId = 1;
    const callback = jest.fn(() => done());

    expect(jest.isMockFunction(chrome.downloads.getFileIcon)).toBe(true);
    chrome.downloads.getFileIcon(downloadId, callback);
    expect(chrome.downloads.getFileIcon).toHaveBeenCalledTimes(1);
    expect(chrome.downloads.getFileIcon).toHaveBeenLastCalledWith(downloadId, callback);
    expect(callback).toHaveBeenCalled();
  });
  test('getFileIcon Promise', () => {
    const downloadId = 1;

    expect(chrome.downloads.getFileIcon(downloadId)).resolves.toBeUndefined();
  });
  test('open', () => {
    const downloadId = 1;

    expect(jest.isMockFunction(chrome.downloads.open)).toBe(true);
    chrome.downloads.open(downloadId);
    expect(chrome.downloads.open).toHaveBeenCalledTimes(1);
    expect(chrome.downloads.open).toHaveBeenLastCalledWith(downloadId);
  });
  test('pause', (done) => {
    const downloadId = 1;
    const callback = jest.fn(() => done());

    expect(jest.isMockFunction(chrome.downloads.pause)).toBe(true);
    chrome.downloads.pause(downloadId, callback);
    expect(chrome.downloads.pause).toHaveBeenCalledTimes(1);
    expect(chrome.downloads.pause).toHaveBeenLastCalledWith(downloadId, callback);
    expect(callback).toHaveBeenCalled();
  });
  test('pause Promise', () => {
    const downloadId = 1;

    expect(chrome.downloads.pause(downloadId)).resolves.toBeUndefined();
  });
  test('removeFile', (done) => {
    const downloadId = 1;
    const callback = jest.fn(() => done());

    expect(jest.isMockFunction(chrome.downloads.removeFile)).toBe(true);
    chrome.downloads.removeFile(downloadId, callback);
    expect(chrome.downloads.removeFile).toHaveBeenCalledTimes(1);
    expect(chrome.downloads.removeFile).toHaveBeenLastCalledWith(downloadId, callback);
    expect(callback).toHaveBeenCalled();
  });
  test('removeFile Promise', () => {
    const downloadId = 1;

    expect(chrome.downloads.removeFile(downloadId)).resolves.toBeUndefined();
  });
  test('resume', (done) => {
    const downloadId = 1;
    const callback = jest.fn(() => done());

    expect(jest.isMockFunction(chrome.downloads.resume)).toBe(true);
    chrome.downloads.resume(downloadId, callback);
    expect(chrome.downloads.resume).toHaveBeenCalledTimes(1);
    expect(chrome.downloads.resume).toHaveBeenLastCalledWith(downloadId, callback);
    expect(callback).toHaveBeenCalled();
  });
  test('resume Promise', () => {
    const downloadId = 1;

    expect(chrome.downloads.resume(downloadId)).resolves.toBeUndefined();
  });
  test('search', (done) => {
    const query = {};
    const callback = jest.fn(() => done());

    expect(jest.isMockFunction(chrome.downloads.search)).toBe(true);
    chrome.downloads.search(query, callback);
    expect(chrome.downloads.search).toHaveBeenCalledTimes(1);
    expect(chrome.downloads.search).toHaveBeenLastCalledWith(query, callback);
    expect(callback).toHaveBeenCalled();
  });
  test('search Promise', () => {
    const query = {};

    expect(chrome.downloads.search(query)).resolves.toBeUndefined();
  });
  test('setShelfEnabled', () => {
    expect(jest.isMockFunction(chrome.downloads.setShelfEnabled)).toBe(true);
    chrome.downloads.setShelfEnabled(true);
    expect(chrome.downloads.setShelfEnabled).toHaveBeenCalledTimes(1);
    expect(chrome.downloads.setShelfEnabled).toHaveBeenLastCalledWith(true);
  });
  test('show', () => {
    const downloadId = 1;

    expect(jest.isMockFunction(chrome.downloads.show)).toBe(true);
    chrome.downloads.show(downloadId);
    expect(chrome.downloads.show).toHaveBeenCalledTimes(1);
    expect(chrome.downloads.show).toHaveBeenLastCalledWith(downloadId);
  });
  test('showDefaultFolder', () => {
    expect(jest.isMockFunction(chrome.downloads.showDefaultFolder)).toBe(true);
    chrome.downloads.showDefaultFolder();
    expect(chrome.downloads.showDefaultFolder).toHaveBeenCalledTimes(1);
  });
});
