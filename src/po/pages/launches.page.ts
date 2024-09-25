import { Page } from './page.js';

export class LaunchesPage extends Page {
  get addFilterBtn() {
    return '[type="button"]';
  }

  get addFilterLaunchName() {
    return 'input[placeholder="Enter name"]';
  }

  get addFilterSaveBtn() {
    return 'button[title="Save"]';
  }

  get userFilter() {
    return 'div[class*="filterList__item"]';
  }

  get launchMenu() {
    return 'td div';
  }
  get launchDeleteBtn() {
    return '//div[text()="Delete"]';
  }

  get launch() {
    return 'div[class*="gridRow__grid-row-wrapper"]';
  }

  get notification() {
    return '.notification-transition-enter-done';
  }
}
export default new LaunchesPage();
