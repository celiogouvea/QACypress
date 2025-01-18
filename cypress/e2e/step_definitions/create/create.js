import { Given, When, Then }from 'cypress-cucumber-preprocessor/steps'


Given("A new item is inserted into the object", ()=>{
    cy.visit('https://celiogouvea.github.io/crudTesteQA/')
})


When("The object will be filled", ()=>{
    cy.get("#itemName").clear().type('Item 1')
    cy.get("#insertItem").click()
})


Then("The object is in the list", ()=>{
    cy.get('#itemList').contains('Item 1')
})