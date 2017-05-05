/**
 * This is a setup file we specify as our 'main' entry point
 * from the package.json file.  This allows developers to
 * directly call the module in their `setupFiles` property.
 */
import { chrome } from './';
import { browser } from './';

global.chrome = chrome;
global.browser = browser;
