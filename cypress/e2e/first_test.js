context("Open website", () => {
  before(() => {
    cy.visit("/");
  });
  it("Verify page contains correct title", () => {
    cy.get("h1").contains("The Best QA Engineer Ever?");
  });
  context("go to another step", () => {
    before(() => {
      cy.get("#enter").click();
    });
    it("get information from robot", () => {
      cy.url().should("include", "/code");
    });
    context("login", () => {
      before(() => {
        cy.get("[name=secret]")
          .invoke("val")
          .then(($secret) => {
            cy.get("[name=code]").type($secret);
          });
        cy.get("[type=checkbox]").check();

        cy.get("button[type=submit]").click();
      });

      it("Verify section headers", () => {
        cy.get("strong").contains("Awesome Quotes");
        cy.get("strong").contains("Famous Quotes");
      });
      it("Verify score count", () => {
        let sumScore = 0;

        Cypress.$(".score").each(function () {
          sumScore += +Cypress.$(this).text();
        });
        cy.get("body").contains("Total score: " + sumScore);
      });
    });
  });
});
