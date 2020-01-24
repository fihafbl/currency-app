describe('Currency Test', function() {
  it('Visit Link', function() {
    cy.visit('http://localhost:8080/')
  })

  it('Click Button Add Curency', function() {
    cy.visit('http://localhost:8080/')
    cy.get("#add-currency").click()
    cy.get("#add-currency").should('not.exist')
    cy.get("#select_currency").select("Dollar Singapura")
    cy.get("#submit_currency").click()
    cy.get(".body-currency").should('be.visible')
  })

  it('Remove Currency', function() {
    cy.visit('http://localhost:8080/')
    cy.get("#add-currency").click()
    cy.get("#add-currency").should('not.exist')
    cy.get("#select_currency").select("Dollar Singapura")
    cy.get("#submit_currency").click()
    cy.get(".body-currency").should('be.visible')
    cy.get("#remove_currency").click()
    cy.get(".body-currency").should('not.exist')
  })

  it('Change Input USD', function() {
    cy.visit('http://localhost:8080/')
    cy.get("#add-currency").click()
    cy.get("#add-currency").should('not.exist')
    cy.get("#select_currency").select("United States Dollar")
    cy.get("#submit_currency").click()
    cy.get(".body-currency").should('be.visible')
    cy.get("#input_usd").type("{backspace}")
    cy.get("#input_usd").type("{backspace}")
    cy.get("#input_usd").type('99')
    cy.get(".amount_currency").should('contain', 'USD 99')
  })
})