import Login from "../pages/login.po";
import testdata from "../fixtures/testdata.json";
describe("Login Suite", () => {
  const page = new Login();
  before(() => {
    cy.visit("/");
    cy.fixture("testdata").then((data) => {
      this.data = data;
    });
  });
  it("Login", () => {
    page.enterUserName();
  });
});
