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

  it('User can add new filter', async () => {
    await sidebarSteps.selectLaunchesTab();
    const initialFiltersNumber = (
      await launchesPage.getElements(launchesPage.userFilter)
    ).length;
    await launchesSteps.addNewFilter();
    expect(
      (await launchesPage.getElements(launchesPage.userFilter)).length,
      'User can not add new filter'
    ).not.to.be.eql(initialFiltersNumber);
  });
});
