# API Github
Obtener los datos de un usuario introducido por parámetro de la API de Github.

## Intrucciones de uso
Seguir las siguientes instrucciones.

### Instalación

```
npm install proyecto-1b-api-github
```

### Uso

```
const api = require('proyecto-1b-api-github');

api.obtenerDatosDeUsuario('mugan86')
    .then(
        respuesta => console.log(respuesta)
    ).
    catch(error => console.log(error));
```