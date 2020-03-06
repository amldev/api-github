const api = require('./index');

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