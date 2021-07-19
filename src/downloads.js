const cbOrPromise = (cb, value) => {
  if (cb !== undefined) {
    return cb(value);
  }

  return Promise.resolve(value);
};

export const downloads = {
  acceptDanger: jest.fn((downloadId, cb) => cbOrPromise(cb)),
  cancel: jest.fn((downloadId, cb) => cbOrPromise(cb)),
  download: jest.fn((options, cb) => cbOrPromise(cb)),
  erase: jest.fn((query, cb) => cbOrPromise(cb)),
  getFileIcon: jest.fn((downloadId, cb) => cbOrPromise(cb)),
  open: jest.fn(),
  pause: jest.fn((downloadId, cb) => cbOrPromise(cb)),
  removeFile: jest.fn((downloadId, cb) => cbOrPromise(cb)),
  resume: jest.fn((downloadId, cb) => cbOrPromise(cb)),
  search: jest.fn((query, cb) => cbOrPromise(cb)),
  setShelfEnabled: jest.fn(),
  show: jest.fn(),
  showDefaultFolder: jest.fn(),
};