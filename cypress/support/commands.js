// ***********************************************
// Este ejemplo de commands.js muestra cómo
// crea varios comandos personalizados y sobrescribe
// comandos existentes.

// Para ejemplos más completos de personalización
// comandos por favor lea más aquí:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- Este es un comando padre --
// Cypress.Commands.add('login', (email, password) => { ... })
//
// -- Este es un comando hijo  --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
// -- Este es un comando dual. --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
// -- Esto sobrescribirá un comando existente. --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (username, password) => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"); 
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);
    cy.get('.oxd-button').click(); 
});
  