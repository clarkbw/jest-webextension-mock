// Chrome globals are setup in the "jest" property of the package.json
// This setup file sets the chrome global with mock functions

import { omnibox } from './omnibox';
import { tabs } from './tabs';

const chrome = {
  omnibox,
  tabs,
};

export { chrome };
export { chrome as browser }; // Firefox uses 'browser' but aliases it to chrome
