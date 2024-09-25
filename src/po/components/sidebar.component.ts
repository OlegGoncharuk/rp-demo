import { Page } from '../pages/page.js';

class Sidebar extends Page {
  get launchesTab() {
    return 'a[href*="/launches"]';
  }

  get projectTab() {
    return 'aside div[class*="projectSelector"]';
  }

  get profileTab() {
    return 'div img';
  }

  get logoutBtn() {
    return '//div[text()="Logout"]';
  }

  getProjectName(name: string) {
    return `a[href*='#${name}']`;
  }
}

export default new Sidebar();
