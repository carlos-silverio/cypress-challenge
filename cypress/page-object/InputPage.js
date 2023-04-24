class Input{

    url(){
        cy.visit('https://the-internet.herokuapp.com/inputs')
        cy.url().should('include', 'inputs')
    }

    setNumber(value){
        cy.get("[type='number']", {timeout:6000}).type(value).should('have.value',value)
    }    

    setText(value){
        cy.get("[type='number']", {timeout:6000}).type(value).should('be.empty')
    }
}

export default Input;