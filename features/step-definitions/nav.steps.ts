import { Given, When, Then } from '@wdio/cucumber-framework';

Given('I open the English homepage', async () => {
  await browser.url('https://www.medavie.ca/en/');
});

Given('I open the French homepage', async () => {
  await browser.url('https://www.medavie.ca/fr/');
});

When('I click the Contact link', async () => {
  const link = await $('a=Contact');
  await link.click();
});

When('I click the Coordonnées link', async () => {
  const link = await $('a=Coordonnées');
  await link.click();
});

Then('I should see the English contact page', async () => {
  await expect(browser).toHaveUrlContaining('/en/contact');
});

Then('I should see the French contact page', async () => {
  await expect(browser).toHaveUrlContaining('/fr/contact');
});