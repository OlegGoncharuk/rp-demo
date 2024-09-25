import logger from '../utils/logger.js';
import sideBar from '../po/components/sidebar.component.js';

class LogoutSteps {
  async logout() {
    logger.info('Login out');
    await sideBar.click(sideBar.logoutBtn);
  }
}
export default new LogoutSteps();
