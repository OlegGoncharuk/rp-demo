import sidebar from '../po/components/sidebar.component.js';
import launchesPage from '../po/pages/launches.page.js';
import logger from '../utils/logger.js';
import conf from '../config/testconfig.js';

class SidebarSteps {
  async selectLaunchesTab() {
    logger.info('Opening Launches tab');
    await sidebar.click(sidebar.launchesTab);
    await launchesPage.waitForClickable(launchesPage.addFilterBtn);
  }

  async selectProfileTab() {
    logger.info('Selectin Profile tab');
    await sidebar.waitForClickable(sidebar.profileTab);
    await sidebar.click(sidebar.profileTab);
    await sidebar.waitForClickable(sidebar.logoutBtn);
  }

  async selectProject() {
    await sidebar.click(sidebar.projectTab);
    await sidebar.waitForClickable(sidebar.getProjectName(conf.projectName));
    await sidebar.click(sidebar.getProjectName(conf.projectName));
  }
}
export default new SidebarSteps();
