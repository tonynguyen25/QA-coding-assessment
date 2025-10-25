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

### Installation
1. Clone/download this repository to your local machine. Insert git clone <https://github.com/tonynguyen25/QA-coding-assessment> within your terminal
2. Install the dependencies with, npm install, on your terminal
3. With all the dependencies and repo on the local machine run, npm test, on your terminal


