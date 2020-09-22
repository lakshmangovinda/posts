const Q = require( "q" );


const sql = require('../../sql/mysql.js');

const userdata = function(users) {
  this.uid = users.uid;
  this.usercart = users.usercart;
  this.useraddress = users.useraddress;
  this.totalprice = users.totalprice;
};


userdata.alldata = (x, result) => {
  let userid = x;
  console.log(x);
  sql.query("SELECT usercart,totalprice FROM user where uid = (?)", [x], (err, res) => {
    if (err) {
      result(null, err);
    }

    result(res,null);
  });
};
userdata.createuser = (u ,result) => {
  let updatedata = u.usercart;
  let updatevalue ;
  updatevalue = updatedata.map(element => {
    return {titles: element.title, avail: element.quantity - element.q}
  });
  console.log(updatevalue);
  updatevalue.forEach((item) => {
    let titles = item.titles;
    let quantitys = item.avail;
    sql.query(`update shop.shopdata SET quantity = ${quantitys}  WHERE title = ${titles} ;`,(res,err) => {
      console.log("done");
    });
  });
  let U = [
    [ u.uid],
    [ JSON.stringify(u.usercart)],
    [ u.useraddress],
    [u.totalprice],
  ];
  sql.query( 'insert into user (uid,usercart,useraddress,totalprice) values (?)',[U] , (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    result(res);
  });


};
userdata.ever = (result) => {
  sql.query("SELECT * FROM shop.user ",(err, res) => {
    if (err) {
      result(null, err);
    }

    result(res,null);
  });
};
module.exports = userdata;
