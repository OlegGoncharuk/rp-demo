import { expect } from 'chai';
import loginSteps from '../steps/login.steps.js';
import sidebarSteps from '../steps/sidebar.steps.js';
import launchesPage from '../po/pages/launches.page.js';
import logoutSteps from '../steps/logout.steps.js';
import launchesSteps from '../steps/launches.steps.js';

describe('Launches smoke e2e suite', () => {
  beforeEach(async () => {
    await loginSteps.openLoginPage();
    await loginSteps.login();
    await sidebarSteps.selectProject();
  });

  afterEach(async () => {
    await sidebarSteps.selectProfileTab();
    await logoutSteps.logout();
  });

  it('User can delete launch', async () => {
    await sidebarSteps.selectLaunchesTab();
    await launchesPage.waitForClickable(launchesPage.launch);
    const initialLaunchesNumber = (
      await launchesPage.getElements(launchesPage.launch)
    ).length;
    await launchesSteps.deleteLaunch();
    expect(
      (await launchesPage.getElements(launchesPage.launch)).length,
      'User can not delete launch'
    ).not.to.be.eql(initialLaunchesNumber);
  });
});
