
export const visitLoginPage = () => {
    cy.log('Visit Login Page');
    cy.visit('/');
}

export const verifyPageTitle = (pageTitle) => {
    cy.log(`Verify page title as: ${pageTitle}`);
    cy.title().should('eq', pageTitle);
}

export const verifyPageHeader = (pageHeader) => {
    cy.log(`Verify page header is: ${pageHeader}`);
    cy.get('h1').should('have.text', pageHeader);
}

export const enterUsername = (username) => {
    cy.log(`Enter username as: ${username}`);
    cy.get('#username').type(username);
    cy.get('#username').should('have.value', username);
}

export const enterPassword = (password) => {
    cy.log(`Enter password as: ${password}`);
    cy.get('#password').type(password);
    cy.get('#password').should('have.value', password);
}

export const submitForm = () => {
    cy.log('Click and submit the form');
    cy.get('button[type="submit"]').click();
}
