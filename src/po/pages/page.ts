import {
  findElement,
  findElements,
} from '../../utils/elements.ts/common.functions.js';

export class Page {
  async setValue(selector: string, value: string) {
    const element = await findElement(selector);
    await element.setValue(value);
  }

  async click(selector: string) {
    const element = await findElement(selector);
    await element.click();
  }

  async waitForClickable(selector: string) {
    const element = await findElement(selector);
    await element.waitForClickable();
  }

  async isDisplayed(selector: string) {
    const element = await findElement(selector);
    return element.isDisplayed();
  }

  async getElements(selector: string) {
    const elements = await findElements(selector);
    return elements;
  }
}
