export async function findElement(selector: string) {
  return await $(selector);
}

export async function findElements(selector: string) {
  return await $$(selector);
}

export async function waitForElementToNotBeDisplayed(
  selector: string,
  timeoutInMilliseconds: number = 10000
) {
  const element = $(selector);
  await browser.waitUntil(
    async () => {
      try {
        return !(await element.isDisplayed());
      } catch (error) {
        return true;
      }
    },
    {
      timeout: timeoutInMilliseconds,
      timeoutMsg: `Element with selector '${selector}' is still displayed after ${timeoutInMilliseconds}ms.`,
      interval: 1000,
    }
  );
}
