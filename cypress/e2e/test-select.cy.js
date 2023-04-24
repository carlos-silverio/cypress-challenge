/// <reference types = "cypress" />

import Select from "../page-object/SelectPage.js";

describe('Test suit in order to test dropdown', () => {

    const slct = new Select();

    beforeEach(() => {
        slct.url();
    });
    
    it('Select first item', () => {
        slct.setOption("Option 1")
    });

    it('Select second item', () => {
        slct.setOption("Option 2")
    });

    it('Option should be preselected', () => {
        slct.showStatus()
    });

    it('Option should be disabled', () => {
        slct.showStatus()
    });
});