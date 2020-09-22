const Shop = require('../models/shop.model');




module.exports.findAll = (req, res) => {
Shop.getAll((data,err) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    }

     res.send(data);
  });
};


module.exports.create = (req, res) =>{
   // Validate request
   if (!req.body) {
     res.status(400).send({
       message: "Content can not be empty!"
     });
   }

   const shop = new Shop({
     category : req.body.category,
   price : req.body.price,
   title : req.body.title,
   url : req.body.url,
   quantity : req.body.quan,
     units : req.body.units,
   });
   Shop.create(shop, (err, data) => {
     if (err)
       res.status(500).send({
         message:
           err.message || "Done."
       });
     else res.send(res);
   });

 };

module.exports.delete = (req, res) => {
  Shop.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Customer with id " + req.params.id
        });
      }
    } else res.send({ message: `Customer was deleted successfully!` });
  });
};
