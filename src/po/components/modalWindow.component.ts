import { Page } from '../pages/page.js';

class ModalWindow extends Page {
  get nameInput() {
    return 'input[title]';
  }

  get addBtn() {
    return '//button[text()="Add"]';
  }

  get deleteBtn() {
    return '//button[text()="Delete"]';
  }
}

export default new ModalWindow();
