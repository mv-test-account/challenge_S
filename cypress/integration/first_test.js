//var fx = require('fixtures');

context('salsita_test', () => {
    beforeEach(() => {
      cy.visit('https://qa-engineer.herokuapp.com'); 
      cy.get('h1').contains('The Best QA Engineer Ever?');    
    });
  
    it('get information from robot', () => {
      cy.get('#enter').click();
      cy.url().should('include', '/code');
      cy.get('[name=secret]')
          .invoke('val')
          .then(($secret)=>  {
              cy.get('[name=code]').type($secret);
            })
      cy.get('[type=checkbox]').check()
      
      cy.get('button[type=submit]').click();

      cy.get('strong').contains('Awesome Quotes');
      cy.get('strong').contains('Famous Quotes');

      let sumScore = 0;
      cy.get('.score')
            .then(() => {     
              
              Cypress.$('.score').each(function() {
                sumScore += +Cypress.$(this).text()||0;
                
                });
                cy.get('body').contains('Total score: ' + sumScore) 
              })
    })
  });