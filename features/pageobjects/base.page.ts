/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class BasePage {
  async open(url: string) {
    await browser.url(url);
  }

  async click(selector: string) {
    const element = await $(selector);
    await element.waitForExist({ timeout: 5000 });
    await element.scrollIntoView({ block: 'center', inline: 'center' });
    await browser.pause(1000);

    try {
      await element.waitForDisplayed({ timeout: 5000 });
      await element.waitForClickable({ timeout: 5000 });
      await element.click();
    } catch (error) {
      console.warn(`Standard click failed, trying JS click for selector: ${selector}`);
      
      await browser.execute((selector: string) => {
        const element = document.querySelector(selector);
        if (element) (element as HTMLElement).click();
      }, selector);
    }
  }

  async dismissCookies() {
    const cookieBtn = await $('button*=Accept, button*=Accepter');
    if (await cookieBtn.isExisting() && await cookieBtn.isDisplayed()) {
      await cookieBtn.click();
      await browser.pause(500);
    }
  }
}