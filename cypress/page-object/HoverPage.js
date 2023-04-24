class Hover{
    url(){
        
        cy.visit('https://the-internet.herokuapp.com/hovers')
        cy.url().should('include', 'hovers')
    }

    mouseOver(){
        cy.get('div:nth-child(4) > img').realHover('mouse')
    }

    hoverStatus(){
        cy.get('.figcaption > h5').eq(1).should('be.visible')
        cy.get("a[href$='2']").click().then(()=>{
            cy.get('h1').contains('Not Found')
        });
    }
    
}

export default Hover;
