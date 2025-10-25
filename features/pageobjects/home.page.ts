import BasePage from './base.page';

class HomePage extends BasePage {
  enUrl = 'https://www.medavie.ca/en/';
  frUrl = 'https://www.medavie.ca/fr/';
  contactEN = 'a[href="https://www.medavie.ca/en/contact/"]';
  contactFR = 'a[href*="/fr/coordonn"]';

  async openEnglish() {
    await super.open(this.enUrl);
    await this.dismissCookies();
  }

  async openFrench() {
    await super.open(this.frUrl);
    await this.dismissCookies();
  }

  async navigateToContact(lang: 'en' | 'fr') {
    const selector = lang === 'en' ? this.contactEN : this.contactFR;
    await this.click(selector);

    await browser.waitUntil(
      async () => {
        const url = await browser.getUrl();
        return lang === 'en'
          ? url.includes('/en/contact')
          : url.includes('/fr/coordonn');
      },
      { timeout: 5000, timeoutMsg: `Navigation to ${lang} contact page failed.` }
    );
  }
}

export default new HomePage();