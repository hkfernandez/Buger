const orm = require("../config/orm.js");

const burger = {
      all: function(cb) {
            orm.all("burgers", function(res) {
              cb(res);
            });
          },
          create: function(burgerName, cb) {
            orm.create('burgers', 'name', burgerName, function(res) {
              cb(res);
            });
          },
          update: function(burgerId, cb) {
            orm.update('burgers', 'consumed', 0, 'id', burgerId, function(res) {
              cb(res);
            });
          },
          delete: function(cb) {
            orm.delete('burgers', 'consumed', 0, function(res) {
              cb(res);
            });
          }
        
}

module.exports = burger;
