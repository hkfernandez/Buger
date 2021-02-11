const connection = require("../config/connections.js");

var orm = {
	all: function(table, cb) {
            let query = `SELECT * FROM ${table};`;
		connection.query(query, 
			function(err, result) {
				if (err) throw err;
                        cb(result);
			}
		);
	},
	create: function(table, col, val, cb) {
            let query = `INSERT INTO ${table} (${col}) VALUES ("${val}");`;
		console.log(query);
		connection.query(query,
			function(err, result) {
				if (err) throw err;
				cb(result);
			}
		);
	},
	update: function(table, col1, val1, col2, val2, cb) {
		let query = `UPDATE ${table} SET ${col1} = ${val1} WHERE ${col2} = ${val2}`;
		connection.query( query, 
			function(err, result) {
				if (err) throw err;
				cb(result);
			}
		);
	},
	delete:	function(table, col, val, cb) {
		let query = `DELETE FROM ${table} WHERE ${col} = ${val};`;
			connection.query( query, 
				function(err, result) {
					if (err) throw err;
					cb(result);
				}
			);
		}
}

module.exports = orm;