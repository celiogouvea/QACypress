import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("Preparing a list of items", () => {
    cy.visit('https://celiogouvea.github.io/crudTesteQA/')
    cy.get("#itemName").clear().type('Item 1')
    cy.get("#insertItem").click()
    cy.get("#itemName").clear().type('novo 1')
    cy.get("#insertItem").click()
    cy.get("#itemName").clear().type('fall 1')
    cy.get("#insertItem").click()
})

When("Select item to update", () => {
    cy.get('#itemList tr').eq(2).find('button').contains('Edit').click();
    cy.get("#itemName").clear().type('True 1')
    cy.get("#insertItem").click()
  });

Then("Result of successful update", () => {
    cy.get('#itemList').contains('True 1')
})