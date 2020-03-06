const axios = require('axios');
const URL = `https://api.github.com/`;
function getServerRequest(url) {
    return axios.get(url).then(
        data => data.data
    ).
    catch( error => error.response.data);
}

module.exports = {
    /**
     * Introducir el usuario de github para obtener sus datos de la API
     * @example
     * usuario = 'mugan86' 
     * @param { string } user Usuario del que queremos los datos de la API
     */
    user: function ( user ) {
        return getServerRequest(`${ URL }users/${ user }`);
    },

    followers: function( user ) {
        return getServerRequest(`${ URL }users/${ user }/followers`);
    }

}