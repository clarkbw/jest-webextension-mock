import { omnibox } from './omnibox';
import { tabs } from './tabs';

const chrome = {
  omnibox,
  tabs,
};

export { chrome };
export { chrome as browser }; // Firefox uses 'browser' but aliases it to chrome
