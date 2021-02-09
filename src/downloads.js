
export const downloads = {
  acceptDanger: jest.fn((downloadId, cb) => cb()),
  cancel: jest.fn((downloadId, cb) => cb()),
  download: jest.fn((options, cb) => cb()),
  erase: jest.fn((query, cb) => cb()),
  getFileIcon: jest.fn((downloadId, cb) => cb()),
  open: jest.fn(),
  pause: jest.fn((downloadId, cb) => cb()),
  removeFile: jest.fn((downloadId, cb) => cb()),
  resume: jest.fn((downloadId, cb) => cb()),
  search: jest.fn((query, cb) => cb()),
  setShelfEnabled: jest.fn(),
  show: jest.fn(),
  showDefaultFolder: jest.fn(),
};