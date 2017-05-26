import { omnibox } from './omnibox';
import { tabs } from './tabs';
import { runtime } from './runtime';
import { storage } from './storage';
import { browserAction } from './browserAction';
import { commands } from './commands';

// Firefox specific API
import { geckoProfiler } from './geckoProfiler';

const chrome = {
  omnibox,
  tabs,
  runtime,
  storage,
  browserAction,
  commands,
  geckoProfiler,
};

export { chrome };
export { chrome as browser }; // Firefox uses 'browser' but aliases it to chrome
