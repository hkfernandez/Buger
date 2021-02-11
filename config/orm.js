const connection = require("./connections.js");

var orm = {
	all: function(table, cb) {
            let queryStr = `SELECT * FROM ${table};`;
		console.log(queryStr);
		connection.query(queryStr, 
			function(err, result) {
				if (err) throw err;
                        cb(result);
			}
		);
	}
	create: function(table, col, val, cb) {
            let queryStr = `INSERT INTO ${table} (${col}) VALUES ("${val}");`;
		console.log(queryStr);
		connection.query(queryStr,
			function(err, result) {
				if (err) throw err;
				cb(result);
			}
		);
	},
	// update: function(table, col1, val1, col2, val2, cb) {
	// 	let queryStr = `UPDATE ${table} SET ${col1} = ${val1} WHERE ${col2} = ${val2}`;
	// 	connection.query( queryStr, 
	// 		function(err, result) {
	// 			if (err) throw err;
	// 			cb(result);
	// 		}
	// 	);
	// },
	// delete:	function(table, col, val, cb) {
	// 	let queryStr = `DELETE FROM ${table} WHERE ${col} = ${val};`;
	// 		connection.query( queryStr, 
	// 			function(err, result) {
	// 				if (err) throw err;
	// 				cb(result);
	// 			}
	// 		);
	// 	}
}

module.exports = orm;