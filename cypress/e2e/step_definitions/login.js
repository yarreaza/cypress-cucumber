import {
    Given,
    When,
    Then
} from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../pages/LoginPage";
let loginPage = new LoginPage(); 

context('Pruebas en página login',function(){ 
   
    Given("un usuario accede a una página con formulario para iniciar sesión Login", function(){
       cy.visit('/');
    });  

    describe('TC-1. Login válido',function(){            
        When("un usuario introduce un username válido, un password válido y hace click en el botón Login", () => {
            cy.fixture("credentials.json").then((credentials) => {
                cy.login(credentials.validCredentials.username, credentials.validCredentials.password);
              });
          });        
        Then("Valida que efectivamente la URL es la del dashboard una vez inicia sesión correctamente",function() {
            loginPage.urlDashboard();
        });        
    });

    describe('TC-2. Login inválido: usuario y contraseña inválida', function(){          
        When("un usuario introduce un username inválido, introduce un password inválido y hace click en el botón Login", () => {
            cy.fixture("credentials.json").then((credentials) => {
                cy.login(credentials.invalidCredentials.username, credentials.invalidCredentials.password);
              });
          });        
        Then("muestra un mensaje de error, usuario y contraseña inválida",function() {
            loginPage.invalidCredentialMessage();         
        });       
    });

    describe('TC-3. Login inválido: usuario y contraseña vacía', function(){          
        When("un usuario hace click en el botón Login con los campos username y password vacío", () => {
            loginPage.clickLoginButton();
          });        
        Then("muestra un mensaje de error, usuario y contraseña vacía",function() {
            loginPage.emptyCredentialsMessage();         
        });       
    });

    describe('TC-4. Login inválido: usuario válido y contraseña vacía', function(){          
        When("un usuario introduce un username válido, el campo password lo deja vacío y hace click en el botón Login", () => {
              cy.fixture("credentials.json").then((credentials) => {
                cy.login(credentials.validCredentials.username, credentials.emptyCredentials.password);
              });
          });        
        Then("muestra un mensaje de error, contraseña vacía",function() {
            loginPage. invalidPasswordMessage();         
        });       
    });

    describe('TC-5. Login inválido: usuario vacio y contraseña válida', function(){          
        When("un usuario deja el campo username vacío, introducce un password válido y hace click en el botón Login", () => {
              cy.fixture("credentials.json").then((credentials) => {
                cy.login(credentials.emptyCredentials.username, credentials.validCredentials.password);
              });
          });        
        Then("muestra mensaje de error, usuario vacío",function() {
            loginPage. invalidUsernameMessage();         
        });       
    });

    describe('Login inválido: usuario inválido y contraseña válida', function(){          
        When("un usuario introduce un username inválido, introducce un password válido y hace click en el botón Login", () => {
              cy.fixture("credentials.json").then((credentials) => {
                cy.login(credentials.invalidCredentials.username, credentials.validCredentials.password);
              });
          });        
        Then("muestra un mensaje de error, usuario inválido",function() {
            loginPage.invalidCredentialMessage();        
        });       
    });

    describe('TC-7. Login inválido: usuario válido y contraseña inválida', function(){          
        When("un usuario introduce un username válido, introducce un password inválido y hace click en el botón Login", () => {
              cy.fixture("credentials.json").then((credentials) => {
                cy.login(credentials.invalidCredentials.username, credentials.validCredentials.password);
              });
          });        
        Then("muestra mensaje de error, contraseña inválida",function() {
            loginPage.invalidCredentialMessage();        
        });       
    });
})














