/// <reference types = "cypress" />

import Select from "../page-object/SelectPage.js";
import Hover from "../page-object/HoverPage.js";
import Input from "../page-object/InputPage";
import Login from "../page-object/LoginPage.js"

describe('Smoke test plan to check on the urls are available', () => {

    const select = new Select()
    const hover = new Hover()
    const input = new Input()
    const login = new Login()

    it('Check on select url', () => {
        select.url() // Smoke test to check if the URL are working before testing/
    });
    it('Check on hover url', () => {
        hover.url() // Smoke test to check if the URL are working before testing
    });
    it('Check on input url', () => {
        input.url() // Smoke test to check if the URL are working before testing 
    });
    it('Check on login url', () => {
        login.url() // Smoke test to check if the URL are working before testing
    });
});