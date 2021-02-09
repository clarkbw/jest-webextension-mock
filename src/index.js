import { omnibox } from './omnibox';
import { tabs } from './tabs';
import { runtime } from './runtime';
import { storage } from './storage';
import { browserAction } from './browserAction';
import { commands } from './commands';
import { notifications } from './notifications';
import { i18n } from './i18n';
import { webNavigation } from './webNavigation';
import { extension } from './extension';
import { downloads } from './downloads';

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
  notifications,
  i18n,
  webNavigation,
  extension,
  downloads,
};

export { chrome };
export { chrome as browser }; // Firefox uses 'browser' but aliases it to chrome
