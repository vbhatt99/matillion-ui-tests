
export const enterFirstname = (firstname) => {
    cy.log(`Enter firstname as: ${firstname}`);
    cy.get('#firstname').type(firstname);
    cy.get('#firstname').should('have.value', firstname);
}

export const enterLastname = (lastname) => {
    cy.log(`Enter lastname as: ${lastname}`);
    cy.get('#lastname').type(lastname);
    cy.get('#lastname').should('have.value', lastname);
}

export const enterEmail = (email) => {
    cy.log(`Enter email address as: ${email}`);
    cy.get('#email').type(email);
    cy.get('#email').should('have.value', email);
}

export const enterPhoneNumber = (phoneNumber) => {
    cy.log(`Enter phone number as: ${phoneNumber}`);
    cy.get('#phone').type(phoneNumber);
    cy.get('#phone').should('have.value', phoneNumber);
}

export const enterCompanyName = (companyName) => {
    cy.log(`Enter company name as: ${companyName}`);
    cy.get('#company').type(companyName);
    cy.get('#company').should('have.value', companyName);
}

export const enterPostcode = (postcode) => {
    cy.log(`Enter postcode as: ${postcode}`);
    cy.get('#postcode').type(postcode);
    cy.get('#postcode').should('have.value', postcode);
}

export const selectPriority = (priority, value) => {
    cy.log(`Select priority as: ${priority}`);
    cy.get('select').select(priority);
}

export const enterYourFeedback = (yourFeedback) => {
    cy.log('Enter your Feedback');
    cy.get('textarea#feedback').type(yourFeedback);
    cy.get('textarea#feedback').should('include.value', yourFeedback);
}
