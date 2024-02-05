# cypress-cucumber :smiley:
>  Pruebas en login con Cypress + Cucumber

### Primeros Pasos:
1. Instalar Node.js y NPM
2. Crear un nuevo proyecto en nuestro repositorio local con el comando  `mkdir nombre_carpeta_proyecto`
3. Crear un repositorio en GitHub y copiar la URL del repositorio (en la ejecución de la siguiente línea de comando nos la van a pedir).
4. Ejecuatr el comando `npm init` para generar nuestra configuración en el archivo package.json, por ejemplo, así se estaría viendo luego de ejecutar este comando y completar los pasos de configuración:

``` JSON
  {
    "name": "cypress-cucumber",
    "version": "1.0.0",
    "description": "Pruebas en login con Cypress + Cucumber",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "Yelitza Arreaza",
    "license": "MIT",
    "devDependencies": {
      "cypress": "^13.6.4",
      "cypress-cucumber-preprocessor": "^4.3.1"
    },
    "repository": {
      "type": "git",
      "url": "git+https://github.com/yarreaza/cypress-cucumber.git"
    },
    "bugs": {
      "url": "https://github.com/yarreaza/cypress-cucumber/issues"
    },
    "homepage": "https://github.com/yarreaza/cypress-cucumber#readme"
  }
```

5. Instalamos Cypress como desarrollador `npm install cypress --save-dev`
7. Ejecutamos Cypress con el comando `npx cypress open` (para que nos genere la carpeta e2e con archivos de prueba o para iniciar una nueva prueba y nos genera la estructura necesaria).
8.  Instalar el [complemento cypress-cucumber-preprocessor](https://www.npmjs.com/package/cypress-cucumber-preprocessor). Puede instalarlo ejecutando el siguiente comando:
    `npm install cypress-cucumber-preprocessor --save-dev`
9. Luego de instalar las dependencias y aplicar la configuración básica de cypress-cucumber-preprocessor, nuestro `package.json` se debería de ver algo así:
   ``` JSON
   {
    "name": "cypress-cucumber",
    "version": "1.0.0",
    "description": "Pruebas en login con Cypress + Cucumber",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "Yelitza Arreaza",
    "license": "MIT",
    "devDependencies": {
      "cypress": "^13.6.4",
      "cypress-cucumber-preprocessor": "^4.3.1"
    },
    "cypress-cucumber-preprocessor": {
      "nonGlobalStepDefinitions": false,
      "step_definitions": "cypress/e2e/step_definitions",
      "cucumber": {
        "generate": false
      }
    },
    "repository": {
      "type": "git",
      "url": "git+https://github.com/yarreaza/cypress-cucumber.git"
    },
    "bugs": {
      "url": "https://github.com/yarreaza/cypress-cucumber/issues"
    },
    "homepage": "https://github.com/yarreaza/cypress-cucumber#readme"
    }
   ```  
10. Luego configurar Cypress. La configuración final se verá así en `cypress.config.js`:

 ``` javaScript
  const { defineConfig } = require("cypress");
  const cucumber = require('cypress-cucumber-preprocessor').default;
  module.exports = defineConfig({
   e2e: {
      setupNodeEvents(on, config) {
        on('file:preprocessor', cucumber())
      },
      baseUrl: "https://opensource-demo.orangehrmlive.com",
      specPattern: "cypress/e2e/features/*.feature",
    }
  });
  ```



    


     



