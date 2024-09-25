import { Page } from './page.js';

class LoginPage extends Page {
  get inputLogin() {
    return '[name="login"]';
  }

  get inputPassword() {
    return '[name="password"]';
  }

  get btnSubmit() {
    return '[type="submit"]';
  }
}

export default new LoginPage();
