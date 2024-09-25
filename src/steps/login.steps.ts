import loginPage from '../po/pages/login.page.js';
import logger from '../utils/logger.js';
import conf from '../config/testconfig.js';

class LoginSteps {
  async openLoginPage() {
    logger.info('Opening Login page');
    await browser.url(conf.baseUrl);
  }

  async login() {
    logger.info('Login into Report Portal');
    await loginPage.setValue(loginPage.inputLogin, conf.login);
    await loginPage.setValue(loginPage.inputPassword, conf.password);
    await loginPage.waitForClickable(loginPage.btnSubmit);
    await loginPage.click(loginPage.btnSubmit);
  }
}
export default new LoginSteps();
