describe("renders the home page", () => {
    it("renders the home page", () => {
        cy.visit("/");
        cy.contains("Per Aspera Ad Astra!!")
        cy.contains("Home")
        cy.contains("Admin report")
        cy.contains("New Record");
    })
})