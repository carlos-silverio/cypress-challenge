/// <reference types = "cypress" />

import Login from "../page-object/LoginPage.js"

describe('Test suit in order to test login page', () => {

    const lgn = new Login();

    before(() => {
        cy.fixture("user-data").then(function(data) {
            globalThis.data = data;
        })
    });

    beforeEach(() => {
        lgn.setScreenSize('samsung-note9')
        lgn.url();
    });
    
    it('User is logged into successfully', () => {
        lgn.setUserName(data["username"][0])
        lgn.setPassword(data["password"][0])
        lgn.clickSubmit()
        lgn.verifyLogin("You logged")
    });

    it('User is not logged into by using invalid username', () => {
        lgn.setUserName(data["username"][1])
        lgn.setPassword(data["password"][0])
        lgn.clickSubmit()
        lgn.verifyLogin("Your username is invalid!")
    });

    it('User is not logged into by using invalid password', () => {
        lgn.setUserName(data["username"][0])
        lgn.setPassword(data["password"][1])
        lgn.clickSubmit()
        lgn.verifyLogin("Your password is invalid!")
    });

    it('User is not logged into if no data is filled in the labels', () => {
        lgn.clickSubmit()
        lgn.verifyLogin("Your username is invalid!")
 
    });
});