/* eslint-disable no-undef */
describe('test our form inputs', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login');
    })
    it('add texts to inputs and submit form', () => {
        cy.get('[data-cy=username]').type('username2020').should('have.value', 'username2020');
        cy.get('[data-cy=password]').type('password123').should('have.value', 'password123');
        cy.get('[data-cy=submit]').click();
    });
});

describe('test our form inputs', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/register');
    })
    it('add texts to inputs and submit form', () => {
        cy.get('[data-cy=username]').type('username2020').should('have.value', 'username2020');
        cy.get('[data-cy=password]').type('password123').should('have.value', 'password123');
        cy.get('[data-cy=email').type('mark.hillin@gmail.com').should('have.value', 'mark.hillin@gmail.com')
        cy.get('[data-cy=terms').click();
        cy.get('[data-cy=submit]').click();
    });
});