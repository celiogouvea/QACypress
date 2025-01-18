import { Given, When, Then }from 'cypress-cucumber-preprocessor/steps'

Given("Prepare item for deletion", ()=>{
    cy.visit('https://celiogouvea.github.io/crudTesteQA/')
    cy.get("#itemName").clear().type('Item 1')
    cy.get("#insertItem").click()
    cy.get("#itemName").clear().type('novo 1')
    cy.get("#insertItem").click()
})

When("Selected list item", ()=>{
    cy.get('#itemList tr:first').find('button').contains('Delete').click();
})


Then("Validation that the item left the list", ()=>{
    cy.get('#itemList').contains('novo 1')
})