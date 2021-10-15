# UI tests for Matillion with Cypress.io

## Why Cypress?
- Visit [Cypress](https://docs.cypress.io)

## Tech Info:
- Cypress version [v8.6.0](https://docs.cypress.io/guides/references/changelog#8-6-0)
- Dependancies inside folder [package.json](/package.json)

## Steps to Install/Setup/run tests with framework in your local:
1. Step in the project folder via terminal and run command `npm init`
2. Then run command `npm install cypress --save-dev` which will install cypress package with its dependancies as dev dependancies
3. Open cypress test runner to initialize the package by running command `npx cypress open`
4. Since all dependancies are well set within package.json there is no need to do further installations at this stage unless advised

## To run tests:
- Use preset scripts within [package.json](/package.json) to run tests
- To open test runner use `npm run cy-open` which will open up nice browser based test runner
- To run headless mode use `npm run cy-chrome` which will run and complete tests without opening browser window
- To run and see report of tests with pretty html format use `npm run tests-with-report`

## Folder sturcture:
1. Fixtures folder - This folder contains data e.g. user credentials test data, form test data in json format with properties and its values
2. Integration folder - This folder contains steps and tests sub folder where page object style is in use to export steps (from Steps folder) into specs files (Tests folder)
3. There are two types of tests structure used - One with export/import steps and other with fixture called into steps = Both are valid use but team can decide which one to go with
4. Plugins folder - [pluginsFile](/plugins/index.js) can be used to install required plugins visit [Cypress Plugins](https://docs.cypress.io/plugins/directory)
5. Support folder - [commandsFile](/support/commands.js) can be used to customize much needed commands that could be reused e.g. getByClass, findByClass, notByClass etc. and [indexFile](/support/index.js) can be used for global configuration e.g. added screenshot capture on failed run
6. Videos folder - This can store videos to see for any issues that might be missed in headless run
7. Mochawesome report/TestReport folders - Contains json and html files that generates after test run which merges/marges as nice html UI report for team
8. Few more config files added e.g. eslint for linting, gitignore for unnecessary folders to be prevented from committing in etc.
9. Cypress config file(cypress.json) to add baseUrl globally and other environment variables to work with e.g. folders path config, reporter config, retries etc.

## Best Practices:

### Use Retries:
- This is highly recommended due to response time that could be different
- Ideal use is runMode: 2 and openMode: 1

### Use Tagging:
- For example use `@p1` or `@p2` or `@smoke` etc to be faster in CI and more relevant to feature branch where applicable
- Plugin called [cypress-select-tests](https://github.com/bahmutov/cypress-select-tests#readme) free package will have more info

### Log the tests for better info:
- Add cy.log('Step info') to each step to know what step is about

### Add alias:
- When a test step finds an element and then does some assertion / action on its children then adding alias `.as()` would help structuring step better.
```js
    cy.get('selector').last().as('aliasName')
    cy.get('@aliasName').find('selector').should('assertion')
```

### Accessibility Testing:
- With [cypress-axe](https://github.com/avanslaars/cypress-axe) we can automate tests for page level or individual components. This allows us to test against [axe-core](https://github.com/dequelabs/axe-core) rules and best practices

### Stub Request:
- Using mock requests via [cy.intercept()](https://docs.cypress.io/api/commands/intercept) and instead of trying to reach a server we can use [fixture](https://docs.cypress.io/api/commands/fixture)
- This concept has been used in tests already