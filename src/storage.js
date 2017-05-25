export const storage = {
  sync: {
    get: jest.fn((id, cb = () => {}) => cb()),
    getBytesInUse: jest.fn((id, cb = () => {}) => cb()),
    set: jest.fn((id, cb = () => {}) => cb()),
    remove: jest.fn((id, cb = () => {}) => cb()),
    clear: jest.fn((cb = () => {}) => cb()),
  },
  local: {
    get: jest.fn((id, cb = () => {}) => cb()),
    getBytesInUse: jest.fn((id, cb = () => {}) => cb()),
    set: jest.fn((id, cb = () => {}) => cb()),
    remove: jest.fn((id, cb = () => {}) => cb()),
    clear: jest.fn((cb = () => {}) => cb()),
  },
  managed: {
    get: jest.fn((id, cb = () => {}) => cb()),
    getBytesInUse: jest.fn((id, cb = () => {}) => cb()),
    set: jest.fn((id, cb = () => {}) => cb()),
    remove: jest.fn((id, cb = () => {}) => cb()),
    clear: jest.fn((cb = () => {}) => cb()),
  },
  onChanged: {
    addListener: jest.fn(),
  },
};
