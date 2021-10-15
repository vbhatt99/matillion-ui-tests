import {
    enterPassword, enterUsername, submitForm,
    verifyPageHeader, verifyPageTitle, visitLoginPage
} from "../Steps/login";

describe('Using page object style for login page', () => {
    it('Login Page tests with valid credentials', () => {
        visitLoginPage();
        verifyPageTitle('Matillion: Automation Test App');
        verifyPageHeader('Sign in');
        enterUsername('l.jenkins');
        enterPassword('hunter2');
        submitForm();
        verifyPageTitle('Matillion: Automation Test App');
        verifyPageHeader('Feedback Form');
    });
});

describe('Using fixture for login page', () => {
    before(() => {
        cy.fixture('loginData').then(function (logindata) {
            this.logindata = logindata;
        });
    });

    it('Validate successful login', function() {
        visitLoginPage();
        enterUsername(this.logindata.username);
        enterPassword(this.logindata.password);
        submitForm();
        verifyPageTitle('Matillion: Automation Test App');
        verifyPageHeader('Feedback Form');
    });
});