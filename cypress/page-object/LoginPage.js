class Login{

    url(){
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.url().should('include', 'login')
    }

    setScreenSize(size){
        cy.viewport(size)
    }

    setUserName(username){
        cy.get('#username').type(username)
    }

    setPassword(password){
        cy.get('#password').type(password)
    }

    clickSubmit(){
        cy.get("[type = 'submit']").click()
    }

    verifyLogin(assert){
        cy.get('#flash', {timeout:6000}).should('contain', assert)
    }
}

export default Login;