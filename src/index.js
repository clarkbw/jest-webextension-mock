import { omnibox } from './omnibox';
import { tabs } from './tabs';
import { runtime } from './runtime';

// Firefox specific API
import { geckoProfiler } from './geckoProfiler';

const chrome = {
  omnibox,
  tabs,
  runtime,
  geckoProfiler,
};

export { chrome };
export { chrome as browser }; // Firefox uses 'browser' but aliases it to chrome
