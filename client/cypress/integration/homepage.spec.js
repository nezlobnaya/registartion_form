describe("renders the home page", () => {
    it("renders the home page", () => {
        cy.visit("/");
        cy.contains("Per Aspera Ad Astra!!")
        cy.contains("Home")
        cy.contains("Admin report")
        cy.contains("New Record");
    });
    it("renders the New record with a Form", () => {
        cy.visit("/records/new");
        cy.contains("Create a Record");
        cy.contains("First name", { matchCase: false })
        cy.contains("Last Name")
        cy.contains("Address1")
    });
    it("allows the form to be used", () => {
        cy.visit("/records/new");

        /* ==== Generated with Cypress Studio ==== */
        cy.get('[type="checkbox"]').uncheck();
        cy.get('[type="checkbox"]').check();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(2) > .form-control').clear();
        cy.get(':nth-child(2) > .form-control').type('John');
        cy.get(':nth-child(5) > .form-control').clear();
        cy.get(':nth-child(5) > .form-control').type('New York');
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.btn-primary').click();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.btn-secondary').click();
        /* ==== End Cypress Studio ==== */
    });
})