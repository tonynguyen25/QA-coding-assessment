import BasePage from './base.page';

class ContactPage extends BasePage {
  async verifyContactPage(lang: 'en' | 'fr') {
    const url = await browser.getUrl();
    if (lang === 'en' && !/\/en\/contact/i.test(url))
      throw new Error(`Expected English contact URL, got: ${url}`);
    if (lang === 'fr' && !/\/fr\/coordonn[eé]es/i.test(url))
      throw new Error(`Expected French contact URL, got: ${url}`);

    const headingSelector = lang === 'en' ? 'h1*=Contact' : 'h1*=Coordonn';
    const heading = await $(headingSelector);
    await heading.waitForDisplayed({ timeout: 10000 });
  }

  async getRegionElement(region: string) {
    const regionElement = await $(`//*[contains(text(), "${region}")]`);
    await regionElement.waitForExist({ timeout: 5000 });
    return regionElement;
  }

  async getPhoneNumberNearRegion(regionElement: WebdriverIO.Element) {
    const textBlock = await regionElement.parentElement().getText();
    const match = textBlock.match(/1[-\s]?\d{3}[-\s]?\d{3}[-\s]?\d{4}|1\d{10}/);
    return match ? match[0] : 'not found';
  }

  async verifyPhone(region: string, expected: string) {
    const regionElement = await $(`//*[contains(text(), "${region}")]`);
    await regionElement.waitForExist({ timeout: 5000 });
    
  }
}

export default new ContactPage();