class Select{
    
    url(){
        cy.visit('https://the-internet.herokuapp.com/dropdown')
        cy.url().should('include', 'dropdown')
    }

    setOption(option){
        cy.get('#dropdown').select(option).contains('Option 1') 
    }

    showStatus(){
        cy.get("[disabled = 'disabled']").should('be.disabled')
    }
}

export default Select;