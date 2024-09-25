import launchesPage from '../po/pages/launches.page.js';
import logger from '../utils/logger.js';
import modalWindow from '../po/components/modalWindow.component.js';
import { FilterNames } from '../utils/data.js';
import uniqid from 'uniqid';
import { waitForElementToNotBeDisplayed } from '../utils/elements.ts/common.functions.js';

const filterName: string = uniqid(`${FilterNames.Test_Filter}-`);

class LaunchesSteps {
  async addNewFilter() {
    logger.info('Adding new filter');
    await launchesPage.click(launchesPage.addFilterBtn);
    await launchesPage.setValue(launchesPage.addFilterLaunchName, filterName);
    await launchesPage.click(launchesPage.addFilterSaveBtn);
    await modalWindow.waitForClickable(modalWindow.nameInput);
    await modalWindow.setValue(modalWindow.nameInput, filterName);
    await modalWindow.click(modalWindow.addBtn);
  }

  async deleteLaunch() {
    logger.info('Deleting launch');
    await launchesPage.click(launchesPage.launchMenu);
    await launchesPage.click(launchesPage.launchDeleteBtn);
    await modalWindow.waitForClickable(modalWindow.deleteBtn);
    await modalWindow.click(modalWindow.deleteBtn);
    await waitForElementToNotBeDisplayed(launchesPage.notification);
  }
}
export default new LaunchesSteps();
