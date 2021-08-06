describe('http example', () => {
    it('GET',function() {
        cy.visit('http://localhost:3000/records')
        cy.get('h2').should('have.text','RecordsNew Record')
    })

    it('Form POST unsuccesfull with alert',function() {
        cy.visit('http://localhost:3000/records/new')
        cy.get(':nth-child(1) > .form-control').clear();
        cy.get(':nth-child(1) > .form-control').type('Vlad');
        cy.get(':nth-child(2) > .form-control').clear();
        cy.get(':nth-child(2) > .form-control').type('B');
        cy.get(':nth-child(3) > .form-control').clear();
        cy.get(':nth-child(3) > .form-control').type('730');
        cy.get('[type="checkbox"]').check();
        cy.get('[type="checkbox"]').uncheck();
        cy.get(':nth-child(4) > .form-control').click();
        cy.get(':nth-child(5) > .form-control').clear();
        cy.get(':nth-child(5) > .form-control').type('N');
        cy.get(':nth-child(6) > .form-control').clear();
        cy.get(':nth-child(6) > .form-control').type('NYC');
        cy.get(':nth-child(7) > .form-control').clear();
        cy.get(':nth-child(7) > .form-control').type('10033');
        cy.get('.btn-primary').click();
        cy.get('.alert').click();
        cy.get(':nth-child(1) > .form-control').click();
        cy.get('.App > :nth-child(2)').click();
        cy.get('.btn-primary').click();
        cy.get('form > :nth-child(2)').click();
    })

    it('Form POST succesfull',function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('http://localhost:3000/records/new')
        cy.get(':nth-child(7) > label').should('be.visible');
        cy.get(':nth-child(8) > label').should('be.visible');
        cy.get(':nth-child(6) > label').should('be.visible');
        cy.get(':nth-child(5) > label').should('be.visible');
        cy.get(':nth-child(4) > label').should('be.visible');
        cy.get(':nth-child(3) > label').should('be.visible');
        cy.get(':nth-child(2) > label').should('be.visible');
        cy.get(':nth-child(1) > label').should('be.visible');
        cy.get('form > :nth-child(6)').click();
        cy.get(':nth-child(6) > .form-control').clear();
        cy.get(':nth-child(6) > .form-control').type('NY');
        cy.get('body').click();
        cy.get('.btn-primary').click();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > .form-control').clear();
        cy.get(':nth-child(1) > .form-control').type('Vlad');
        cy.get(':nth-child(2) > .form-control').clear();
        cy.get(':nth-child(2) > .form-control').type('B');
        cy.get(':nth-child(3) > .form-control').clear();
        cy.get(':nth-child(3) > .form-control').type('730');
        cy.get(':nth-child(5) > .form-control').clear();
        cy.get(':nth-child(5) > .form-control').type('N');
        cy.get(':nth-child(6) > .form-control').clear();
        cy.get(':nth-child(6) > .form-control').type('NY');
        cy.get(':nth-child(7) > .form-control').clear();
        cy.get(':nth-child(7) > .form-control').type('10033');
        cy.get('.btn-primary').click();
        cy.get('.btn').should('be.visible');
        cy.get('.col-10 > :nth-child(1)').should('be.visible');
        /* ==== End Cypress Studio ==== */
    })

    it('Record DELETE',function() {
        cy.visit('http://localhost:3000/records/')

        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > .operation > button').should('be.visible');
        cy.get(':nth-child(1) > .operation > button').should('be.enabled');
        cy.get(':nth-child(1) > .operation > button').click();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > .operation > button').should('have.text', 'Delete');
        /* ==== End Cypress Studio ==== */
    })
});
