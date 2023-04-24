/// <reference types= "cypress"/>

import Hover from "../page-object/HoverPage.js";

describe('Test suit for hovering', () => {

    const hover = new Hover();
    beforeEach(() => {
        hover.url()
    });

    it('Should be shown hidden elements', () => {
        hover.mouseOver() // This method hover over the element 
        hover.hoverStatus() // This assert the element when clicking on the URL that is now visible.
    });
});