console.log('>>> loaded: nav.steps.ts');

import { Given, When, Then } from '@wdio/cucumber-framework';

async function dismissOverlays(lang: 'en' | 'fr') {
  
  await browser.pause(1000);
  
 
  try {
    const cookieSelector = lang === 'en' 
      ? 'button*=Accept, button*=Agree, button*=Continue' 
      : 'button*=Accepter, button*=Continuer';
    const cookieBtn = await $(cookieSelector);
    if (await cookieBtn.isDisplayed({ timeout: 1000 })) {
      await cookieBtn.click();
      console.log('Dismissed cookie banner');
      await browser.pause(500);
    }
  } catch (e) {
    console.log('No cookie banner found');
  }
  
 
  try {
    const closeBtn = await $('[aria-label*="Close"], .close, .modal-close');
    if (await closeBtn.isDisplayed({ timeout: 1000 })) {
      await closeBtn.click();
      console.log('Closed modal');
      await browser.pause(500);
    }
  } catch (e) {
    console.log('No modal found');
  }
}

Given('I open the homepage', async () => {
  const url = 'https://www.medavie.ca/en/';
  console.log('[Given] Navigating to English homepage:', url);
  await browser.url(url);
  await dismissOverlays('en');
});

Given('I open the homepage in French', async () => {
  const url = 'https://www.medavie.ca/fr/';
  console.log('[Given] Navigating to French homepage:', url);
  await browser.url(url);
  await dismissOverlays('fr');
});

When('I navigate to the nav menu and click on {string}', async (linkText: string) => {
  console.log(`[When] Looking for nav link: "${linkText}"`);
  
  let selector: string;
  if (linkText === 'Contact') {
    selector = 'a[href="https://www.medavie.ca/en/contact/"]';
  } else if (linkText === 'Coordonnées') {
    selector = 'a[href*="/fr/coordonn"]';
  } else {
    selector = `=${linkText}`;
  }
  
  const link = await $(selector);
  
  await link.waitForExist({ timeout: 5000 });
  console.log('[When] Link found');
  
  await link.scrollIntoView({ block: 'center' });
  await browser.pause(500);
  
  try {
    await link.waitForClickable({ timeout: 5000 });
    await link.click();
    console.log('[When] Regular click successful');
  } catch (e) {
    console.log('[When] Regular click failed, using JavaScript click');
    await browser.execute((el) => {
      el.click();
    }, link);
  }
  
  await browser.waitUntil(
    async () => {
      const url = await browser.getUrl();
      return url.includes('contact') || url.includes('coordonn');
    },
    { 
      timeout: 10000,
      timeoutMsg: `Navigation after clicking "${linkText}" did not complete`
    }
  );
  
  console.log('[When] Navigation completed to:', await browser.getUrl());
});

Then('I should be on the Contact page', async () => {
  console.log('[Then] Verifying English Contact page');
  
  const url = await browser.getUrl();
  console.log('[Then] Current URL:', url);
  
  if (!/\/en\/contact/i.test(url)) {
    throw new Error(`Expected EN contact URL, got: ${url}`);
  }
  
  const heading = await $('h1*=Contact');
  await heading.waitForDisplayed({ timeout: 10000 });
  console.log('[Then] Verification successful');
});

Then('I should be on the Coordonnées page', async () => {
  console.log('[Then] Verifying French Coordonnées page');
  
  const url = await browser.getUrl();
  console.log('[Then] Current URL:', url);
  
  if (!/\/fr\/coordonn[eé]es/i.test(url)) {
    throw new Error(`Expected FR coordonnées URL, got: ${url}`);
  }
  
  const heading = await $('h1*=Coordonn');
  await heading.waitForDisplayed({ timeout: 10000 });
  console.log('[Then] Verification successful');
});