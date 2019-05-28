import { isNumber } from "util";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { 

//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add('change_language_to', (language) => { 
    cy.get('#languageSelector').click();
    cy.get('.reload')
    .contains(language)
    .click();
 })
  
//  Cypress.Commands.add("add_todos", (todos) => { 
//     if((Number.isInteger(todos)) ){        
//        for(var i= 0; i < todos; i++){
//            let todo = 'new todo ' + i;
//            cy.add_todo(todo)
//            cy.is_todo_visible(todo);
//            }              
//     } else{
//         todos.forEach((todo) => {
//            cy.add_todo('new todo ' + todo)
//         });
//     }    
//    })

//  Cypress.Commands.add("check_todo_size", (listSize) => { 
//     cy.get('[data-cy="todo-item"]').should('have.length', listSize)
//  })

//  Cypress.Commands.add("is_todo_visible", (todoName) => { 
//     cy.contains('[data-cy="todo-item-label"]',todoName);
//  })

//  Cypress.Commands.add("todo_should_not_exist", (todoName) => { 
//     cy.contains('[data-cy="todo-item-label"]',todoName).should('not.exist');
//  })


// Cypress.Commands.add("delete_all_todos",() => {
//     cy.get('button[data-cy="todo-item-remove"]')
//         .each((item)=> item.click() );
// })

//     Cypress.Commands.add("delete_todo_by_name",(name) => {
//         cy.get('[data-cy="todo-item"]').first()                 //.contains(name)
//             .within(($form) => {
//                 cy.get('button[data-cy="todo-item-remove"]')
//                     .invoke('show').click();
//         }) 
//     })

//     Cypress.Commands.add("check_todo",(name) => {
//         cy.get('[data-cy="todo-item"]').contains(name)
//         .parent()
//         .within(($form) => {
//             cy.get('[data-cy="toggle"]')
//                 .invoke('show').click();
//         }) 
//     })


//     Cypress.Commands.add("check_todo_by_name",(name) => {
//         cy.get('[data-cy="toggle"]').first().click();
//     })

//     Cypress.Commands.add("select_active_todos",() => {
//         cy.contains('[data-cy="filter"]','Active').click();
//     })

//     Cypress.Commands.add("select_completed_todos",() => {
//         cy.contains('[data-cy="filter"]','Completed').click();
//     })

//     Cypress.Commands.add("select_all_todos",() => {
//         cy.contains('[data-cy="filter"]','Al').click();
//     })

//     Cypress.Commands.add("clear_completed",() => {
//         cy.get('.clear-completed').click();
//     })

//     Cypress.Commands.add("get_todo_count",(count) => {
//         cy.get('[data-cy="todo-count"]').invoke('text').then((text) => {
//             expect(Number(text.split(' ')[0])).equal(count);
//         })
//     })
//         Cypress.Commands.add("check_no_items_left",() => {
//             cy.get('[data-cy="todo-count"]').invoke('text').should('equal','No items left')
//         })

