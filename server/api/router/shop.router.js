const express = require('express');
const router = express.Router();
const shop = require('../controller/controllers.js');
const user = require('../controller/usercontroller');
router.route('/shop').get(shop.findAll);
router.route('/shop').post(shop.create);
router.route("/shop/:id").delete(shop.delete);
router.route("/shopuser").get(user.getted);
router.route("/shopuser").post(user.posted);
router.route("/manage").get(user.admin);

 module.exports = router;
