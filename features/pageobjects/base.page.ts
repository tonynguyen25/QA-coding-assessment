/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class BasePage {
    async open(path: string)
        await browser.url(path);
}

