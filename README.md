# API Github
[![Build Status](https://travis-ci.org/amldev/api-github.svg?branch=master)](https://travis-ci.org/amldev/api-github)
Obtener los datos de un usuario introducido por parámetro de la API de Github.

## Intrucciones de uso
Seguir las siguientes instrucciones.

### Instalación

```
npm install @mugan86/api-github
```

### Uso

```
const api = require('@mugan86/api-github');

api.user('mugan86').then(
    data => {
        console.log(data);
        if (data.message === undefined) { // OK message
            console.log('OK');
            console.log(data.login);
        } else {
            console.log(data.message); // ERROR message
        }
    }
);
```