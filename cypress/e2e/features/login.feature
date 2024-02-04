Feature: Pruebas en página login

Background: 
    Given un usuario accede a una página con formulario para iniciar sesión Login

Scenario: TC-1. Login válido        
    When un usuario introduce un username válido, un password válido y hace click en el botón Login
    Then Valida que efectivamente la URL es la del dashboard una vez inicia sesión correctamente

Scenario: TC-2. Login inválido: usuario y contraseña inválida        
    When un usuario introduce un username inválido, introduce un password inválido y hace click en el botón Login
    Then muestra un mensaje de error, usuario y contraseña inválida

Scenario: TC-3. Login inválido: usuario y contraseña vacía
    When un usuario hace click en el botón Login con los campos username y password vacío
    Then muestra un mensaje de error, usuario y contraseña vacía

Scenario: TC-4. Login inválido: usuario válido y contraseña vacía        
    When un usuario introduce un username válido, el campo password lo deja vacío y hace click en el botón Login
    Then muestra un mensaje de error, contraseña vacía

Scenario: TC-5. Login inválido: usuario vacio y contraseña válida        
        When un usuario deja el campo username vacío, introducce un password válido y hace click en el botón Login
        Then muestra mensaje de error, usuario vacío

Scenario: TC-6. Login inválido: usuario inválido y contraseña válida        
    When un usuario introduce un username inválido, introducce un password válido y hace click en el botón Login
    Then muestra un mensaje de error, usuario inválido

Scenario: TC-7. Login inválido: usuario válido y contraseña inválida        
    When un usuario introduce un username válido, introducce un password inválido y hace click en el botón Login
    Then muestra mensaje de error, contraseña inválida