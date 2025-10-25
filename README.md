# Medavie Contact Page Verification Automation

## Overview
The following repository is used to verify the phone numbers displayed on the Contact page of Medavie Blue Cross. Verification is for both English and French contact pages. 

### This project utilizies a tech stack of:
- TypeScript 
- WebDriverIO v9 
- Cucumber

### Features of the project:
- WebDriverIO for its automated testing framework mimicking web browser testing 
- Cucumber used for its Behavioural Driven Development 
- Page Object Model for seperation of concerns for maintainable User Interface interfaction
- Supports both English and French
- Spec for reporting

### Assessment Logic
This project automates verification of phone numbers on Medavie Blue Cross contact pages for both English and française﻿ sites. It uses WebdriverIO to programmatically open the homepage, navigate via the menu to the contact page, and confirm the correct URL and heading are loaded for the language. Using the Page Object Model, each page’s key actions and locators are encapsulated in well-structured classes for maintainability and reuse.The test extracts region labels and searches for displayed phone numbers nearby within the DOM, normalizing accented characters, special quotes, and phone number formatting differences. Phone number matching tolerates formatting variations to accommodate how numbers appear visually vs. assessment expected values, ensuring robust multilingual validation. All steps are driven by Cucumber feature files with BDD syntax, translating readable test scenarios into automated assertions. This approach enables reliable, readable, and maintainable automated validation of Medavie contact phone information in a bilingual context.

## Running the Project

### Prerequisites
- Install Node.js
- Ensure you have a web browswer that is compatible for testing

### Project Structure
- features/ - This defines Cucumber files which define test scenarios in Gherkin
- features/pagesobjects/ - Page Object Model classes for the few pages used for testing, separating concerns
- features/step-definitions/ - Implementation of Gherkin steps to code
- wdio.conf.ts - WebdriverIO configuration file
- tsconfig.json - TypeScript configuration
- package.json - Dependencies for the project

### Installation and how to run tests
1. Clone/download this repository to your local machine, 
in your terminal nnsert "git clone <https://github.com/tonynguyen25/QA-coding-assessment>" 
2. Install the dependencies by opening terminal and entering "npm install"
3. Once dependencies are installed, in your root open your terminal and enter "npm test"
4. This may prompt your a window asking if its okay to run, press accept
5. The tests will now run on your machine opening a broswer window stating automated tests are occuring
6. Your browser go through each step of the feature file with the helps of page object and step definitions
7. Once all the tests have ran successfully it should display in your console the duration and test coverage



