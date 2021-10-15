import {
    enterCompanyName, enterEmail, enterFirstname,
    enterLastname, enterPhoneNumber, enterPostcode,
    enterYourFeedback, selectPriority
} from "../Steps/feedbackForm";
import {
    enterPassword, enterUsername, submitForm, verifyPageHeader,
    visitLoginPage
} from "../Steps/login";

describe('Feedback Form test suite', () => {
    before(() => {
        cy.fixture('loginData').then(function (logindata) {
            this.logindata = logindata;
        });
        cy.fixture('feedbackFormData').then(function (feedback) {
            this.feedback = feedback;
        });
    });

    it('Feedback form functional tests', function() {
        visitLoginPage();
        enterUsername(this.logindata.username);
        enterPassword(this.logindata.password);
        submitForm();
        verifyPageHeader('Feedback Form');
        enterFirstname(this.feedback.firstname);
        enterLastname(this.feedback.lastname);
        enterEmail(this.feedback.email);
        enterPhoneNumber(this.feedback.phone);
        enterCompanyName(this.feedback.company);
        enterPostcode(this.feedback.postcode);
        selectPriority(this.feedback.priority);
        enterYourFeedback(this.feedback.yourFeedback);
    })
})