const sql = require('../../sql/mysql.js');

const Shop = function(shop) {
  this.category = shop.category;
  this.price = shop.price;
  this.title = shop.title;
  this.url = shop.url;
  this.quantity = shop.quantity;
  this.units = shop.units;
};


Shop.getAll = result => {
  sql.query("SELECT * FROM shop.shopdata", (err, res) => {
    if (err) {
     result(null, err);
    }

    result(res,null);
  });
};

Shop.create = (s ,result) => {
  console.log(s);
    let q= 'insert into shop.shopdata (category,price,title,url,quantity,units) values (?)';
  let products = [
    [ s.category],
    [ s.price],
    [ s.title],
    [ s.url],
    [ s.quantity],
    [ s.units]
  ];
  sql.query(q, [products],   (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    result(res);
  });
};



Shop.remove = (id, result) => {
  let q = "DELETE FROM shop.shopdata WHERE id = ?";
  sql.query(q, id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows === 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted customer with id: ", id);
    result(null, res);
  });
};





module.exports = Shop;
