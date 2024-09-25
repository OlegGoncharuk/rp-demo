import { expect } from 'chai';
import loginSteps from '../steps/login.steps.js';
import sidebarSteps from '../steps/sidebar.steps.js';
import launchesPage from '../po/pages/launches.page.js';
import logoutSteps from '../steps/logout.steps.js';

describe('Launches smoke e2e suite', () => {
  beforeEach(async () => {
    await loginSteps.openLoginPage();
    await loginSteps.login();
  });

  afterEach(async () => {
    await sidebarSteps.selectProfileTab();
    await logoutSteps.logout();
  });

  it('Launches tab can be opened', async () => {
    await sidebarSteps.selectLaunchesTab();
    expect(
      await launchesPage.isDisplayed(launchesPage.addFilterBtn),
      'Launches tab is not displayed'
    ).to.be.true;
  });
});
