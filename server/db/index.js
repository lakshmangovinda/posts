const express = require('express');
// // const db = require('../db');
// // const route = express.Router();
// // route.get('/', async (req,res,next) =>{
// // try{
// //   let results =  await db.all();
// //   await res.json(results);
// // }
// // catch (e) {
// //   console.log(e);
// // res.sendStatus(500);
// // }
// //
// // });
// // module.exports=route;
//
// const express = require('express');
// const ap =express();
//
// ap.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });
// ap.get('/jokes/random', (req, res) => {
//   request(
//     { url: 'https://joke-api-strict-cors.appspot.com/jokes/random' },
//     (error, response, body) => {
//       if (error || response.statusCode !== 200) {
//         return res.status(500).json({ type: 'error', message: err.message });
//       }
//
//       res.json(JSON.parse(body));
//     }
//   )
// });
//

function createRouter(con) {
  const router = express.Router();

  router.post('/stu', (req, res, next) => {
    con.query(
      'INSERT INTO courses.css VALUES (?)',
      [req.body.name],
      (error) => {
        if (error) {
          console.error(error+""+req.body.name);
          res.status(500).json({status: 'error'});
        } else {
          console.error(req.body.name);
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  return router;
}

module.exports = createRouter;
