
export default class LoginPage {  
     
    fillUsername(username) {
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);
    }

    fillPassword(password) {
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
    }
  
    clickLoginButton() {
      cy.get('.oxd-button').click();
    }
  
    urlDashboard(){
      cy.url('/dashboard/index');
    }

    invalidCredentialMessage(){
      cy.get('.oxd-alert').should('contain.text', 'Invalid credentials');
    }

   emptyCredentialsMessage(){
    cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('contain.text', 'Required');
   }

   invalidUsernameMessage(){
    cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('contain.text', 'Required');
   }

   invalidPasswordMessage(){
    cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('contain.text', 'Required');
   }

  submitLogin(username,password){
    fillUsername(username).type(username);
    fillPassword(password).type(password);
    clickLoginButton().click();
  }

}

