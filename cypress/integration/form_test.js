describe("This is our first test!", () => {
    it("Shoud return true", () => {
        expect(true).to.equal(true);
    })
})

it("Input Name into the Name Input", () => {
    cy.visit("http://localhost:3000")
    cy.get('input[name="name"]')
    .type("Blake Davis")
    .should("have.value", "Blake Davis")
})

it("Input Email into Email field", () => {
    cy.get('input[name="email"]')
    .type("blake@email.com")
    .should("have.value", "blake@email.com")
})

it("Input Text into Text field", () => {
    cy.get('textarea[name="motivation"]')
    .type("I love to motivate things quite often.")
    .should("have.value", "I love to motivate things quite often.")
})

it("Select item from dropdown menu", () => {
    cy.get('select').select('Yard Work')
    .should("have.value", "Yard Work")
})

it("Click Checkbox", () => {
    cy.get('[type="checkbox"]').check() 
})


it("Click Submit", () => {
    cy.get('.submitButton').click()    
})   