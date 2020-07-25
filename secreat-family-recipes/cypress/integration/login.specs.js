/// <reference types="Cypress" />
describe('Input and submit form', () => {
    it('can navigate to the site', ()=> {
        cy.visit('http://localhost:3000/login')
        cy.url().should('include', '/login')
    })
    it('answer login form', () => {
        cy.get('input[name="username"]').click().type('yeswecan')
        cy.get('input[name="password"]').click().type('untilwecannot')
    })
    it('check login form to see if it is fill up', () => {
        cy.get('input[name="username"]').should('have.value','yeswecan')
        cy.get('input[name="password"]').should('have.value', 'untilwecannot')
    })
    it('Submit login Form', () => {
        cy.get('form').submit()
    })
   
})
