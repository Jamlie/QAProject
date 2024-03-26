describe("Searching Feature", () => {
  beforeEach(() => {
    cy.visit("https://stacksinfo.web.app/");
  });

  it("Search for a city", () => {
    cy.get(".search-bar").type("Nablus{enter}");
    cy.get(".company-name").should("contain", "Auxilium Technology");
  });

  it("Search for a company", () => {
    cy.get(".search-bar").type("Auxilium{enter}");
    cy.get(".company-name").should("contain", "Auxilium Technology");
  });

  it("Searching for a language", () => {
    cy.get(".search-bar").type("C++{enter}");
    cy.get(".company-name").should("contain", "ASAL Technologies");
  });

  it("Searching for a technology", () => {
    cy.get(".search-bar").type("django{enter}");
    cy.get(".company-name").should("contain", "Telysoft");
  });

  it("Searching for a company without writing its name correctly", () => {
    cy.get(".search-bar").type("asla{enter}");
    cy.get(".company-name").should("contain", "ASAL Technologies");
  });

  it("Searching for a city without writing its name correctly", () => {
    cy.get(".search-bar").type("nbls{enter}");
    cy.get(".company-name").should("contain", "Reconess");
  });

  it("Searching for a language without writing its name correctly", () => {
    cy.get(".search-bar").type("js{enter}");
    cy.get(".company-name").should("contain", "Radix Technologies");
  });

  it("Searching for a technology without writing its name correctly", () => {
    cy.get(".search-bar").type("ang{enter}");
    cy.get(".company-name").should("not.contain", "SoukTel");
  });

  it("Autocompletion for a city", () => {
    cy.get(".search-bar").type("nablus");
    cy.get(".last-search-and-results > .item").should("contain", "Nablus");
  });

  it("Autocompletion for a company", () => {
    cy.get(".search-bar").type("asa");
    cy.get(".last-search-and-results > .item").should(
      "contain",
      "ASAL Technologies",
    );
  });

  it("Autocompletion for a technology", () => {
    cy.get(".search-bar").type("rea");
    cy.get(".last-search-and-results > .item").should("contain", "React");
    cy.get(".last-search-and-results > .item").should(
      "contain",
      "React Native",
    );
  });

  it("Autocompletion for a language", () => {
    cy.get(".search-bar").type("C");
    cy.get(".last-search-and-results > .item").should("contain", "Cassandra");
    cy.get(".last-search-and-results > .item").should("contain", "C++");
  });

  it("Search for a Company with random letters", () => {
    cy.get(".search-bar").type("IQVIA{enter}");
  });

  it("Search for a language with random spelling", () => {
    cy.get(".search-bar").type("paython{enter}");
    cy.get(".card-container").should("contain", "Oops, No Matches Found :(");
  });

  it("search for a technology", () => {
    cy.get(".search-bar").type("AWS{enter}");
    cy.get(".company-name").should("not.contain", "Reconess");
  });

  it("search with long invalid input", () => {
    cy.get(".search-bar").type("2433467742{enter}");
    cy.get(".card-container").should("contain", "Oops, No Matches Found :(");
  });

  it("search with one number", () => {
    cy.get(".search-bar").type("2{enter}");
    cy.get(".card-container").should("contain", "Oops, No Matches Found :(");
  });

  it("empty search", () => {
    cy.get(".search-bar").type("{enter}");
    cy.get(".company-name").should("contain", "Safarway");
  });

  it("search for a technology", () => {
    cy.get(".search-bar").type("react{enter}");
    cy.get(".company-name").should("not.contain", "SoukTel");
  });

  it("search for a company all capitilized ", () => {
    cy.get(".search-bar").type("KUBERNETES{enter}");
  });

  it("search for a technology", () => {
    cy.get(".search-bar").type("ruby{enter}");
  });
});
