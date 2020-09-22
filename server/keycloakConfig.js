const Keycloak = require('keycloak-connect');
const session = require('express-session');
let _keycloak;

var keycloakConfig = {
  clientId: 'c1',
  bearerOnly: true,
  serverUrl: 'http://localhost:8080/auth',
  realm: 'realm1',
  // credentials: {
  //   secret: '62c99f7c-da55-48fb-ae4e-a27f132546b7'
  // },
  realmPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAv1S/xcWdgWIvlvSNbmrJuOJnKBasV5wSY2t4MNS39HxGeNL9MQiX5pq7XTx7MBr0LG79tbdGqTrcalPDyiNYcIty0+OD9VGeSDIwNUAcPhUOBWmANS3KVhWvfREzJuD+bkot1WxD1IIy89skG5dt+0MJOykxFYhopCE8To3CB8QrUFMlwsxbbZehkWfvx4nk9luVTacdvFdiHEfI/B34amMTZrUZu7iInD15Qp2i1J7/gz/cW5HD2tHzxhUPJtXPkb3ozG/p7dzj2L0RqkaNFekzQu9zDclZNsKa+ayz3N6r+t5myl3ceBQcBPoaN6hudiL+Ug7xhCsuSdYqryllkQIDAQAB'
};

function initKeycloak() {
  if (_keycloak) {
    console.warn('Trying to init Keycloak again!' );
    return _keycloak;
  }
  else {
    console.log('Initializing Keycloak...');
    var memoryStore = new session.MemoryStore();
    _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
    return _keycloak;
  }
}

function getKeycloak() {
  if (!_keycloak){
    console.error('Keycloak has not been initialized. Please called init first.' );
  }
  return _keycloak;
}

module.exports = {
  initKeycloak,
  getKeycloak
};
