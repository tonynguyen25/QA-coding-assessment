import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/home.page';
import ContactPage from '../pageobjects/contact.page';

Given('I open the homepage', async () => {
  await HomePage.openEnglish();
});
Given('I open the homepage in French', async () => {
  await HomePage.openFrench();
});

When('I navigate to the nav menu and click on {string}', async (linkText: string) => {
  if (linkText === 'Contact') await HomePage.navigateToContact('en');
  else if (linkText === 'Coordonnées') await HomePage.navigateToContact('fr');
});

Then('I should be on the Contact page', async () => {
  await ContactPage.verifyContactPage('en');
});
Then('I should be on the Coordonnées page', async () => {
  await ContactPage.verifyContactPage('fr');
});

Then('I should see {string} for {string}', async (expected: string, region: string) => {
  await ContactPage.verifyPhone(region, expected);
});