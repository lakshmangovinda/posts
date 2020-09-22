const express = require('express');
const bodyparser = require('body-parser');
const config = require('cors');
const Keycloak = require('keycloak-connect');
const session = require('express-session');
const bearerToken = require('express-bearer-token');
const app = express();
const router = require('./api/router/shop.router');
const http = require('http');
// const Promise = require('promise');
const fs = require('fs');
const jwt = require('jsonwebtoken');

app.use(bodyparser.json());
app.use(bearerToken());
app.use('*', config());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*',
    'Access-Control-Allow-Credentials', 'true',
    'Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,UPDATE');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization,append,delete,entries,foreach,get,has,keys,set,values');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const keycloak = require('./keycloakConfig.js').initKeycloak();
app.use(keycloak.middleware());

app.use(function(req, res , next) {
  let data = [];
  const t = req.headers.authorization;
  function extractToken (req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
      return req.query.token;
    }
    return null;
  }
  let useremail = jwt.decode(extractToken(req));
  const emilid = useremail.email;
  const a = new Promise( (resolve ,reject) =>{
    const options = {
      headers: {
        Authorization: `${t}`,
      },
      hostname: "localhost",
      port: "8080",
      path: '/auth/admin/realms/realm1/users',
      method: 'GET'
    };

    const callback = function(response) {
      let str = [];
      response.on('data', function (chunk) {
             str += chunk;
        resolve(true, str);
      });

      response.on('end', function () {
        data =JSON.parse(str);
        let datas = data;
      let array = datas.filter(element => element.email === `${emilid}`);
        let uid;
        array.forEach((element, index, array) => {
          uid = element.id;
          res.locals.uid =uid;
        });

      });

    };

    http.request(options, callback).end();
});
a.then(() =>  next());
});
app.use('/' , router);
//server port>.........................../................/.................................../............................/
const port = process.env.PORT || 3888;
app.listen(port,() => {console.log('connected'); });

