//var fx = require('fixtures');

context("Open website", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Verify page contains correct title", () => {
    cy.get("h1").contains("The Best QA Engineer Ever?");
  });
  context("Go to another step", () => {
    beforeEach(() => {
      cy.get("#enter").click();
    });
    it("get information from robot", () => {
      cy.url().should("include", "/code");
    });
    context("login", () => {
      beforeEach(() => {
        cy.get("[name=secret]")
          .invoke("val")
          .then(($secret) => {
            cy.get("[name=code]").type($secret);
          });
        cy.get("[type=checkbox]").check();

        cy.get("button[type=submit]").click();
      });

      it("Verify after login", () => {
        cy.get("strong").contains("Awesome Quotes");
        cy.get("strong").contains("Famous Quotes");

        let sumScore = 0;
        cy.get(".score").then(() => {
          Cypress.$(".score").each(function () {
            sumScore += +Cypress.$(this).text() || 0;
          });
          cy.get("body").contains("Total score: " + sumScore);
        });
      });
    });
  });
});
