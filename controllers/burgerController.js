var express = require("express");
const router = express.Router();

var burger = require("../model/burger.js");

router.get("/",
	function(req, res) {
		burger.all (function(data) {
				const uneatenBurgersArr =[]
				const eatenBurgersArr = []
				data.forEach(burger => {
					if (burger.consumed === 1) {
						uneatenBurgersArr.push(burger)
					} else {
						eatenBurgersArr.push(burger)
					}
				});
				res.render("index", 
					{ uneatenBurgers: uneatenBurgersArr, 
						eatenBurgers: eatenBurgersArr
					}
				);
			}
		);
	}
);

// router.post("/", 		
// 	function(req, res) {
// 		burger.create (
// 			req.body.userBurger,
// 			function(result) {
// 				console.log('burgerController post route result', result);
// 				res.redirect("/");
// 			}
// 		)
// 	}
// );


// router.put("/api/eat/:Id", 
// 	function(req, res) {
// 		burger.update (
// 			req.params.Id,
// 			function (result) {
// 				res.status(200).end();
// 			}
// 		)
// 	}
// );

// router.delete("/api/clear/", 
// 	function(req, res) {
// 		burger.delete (
// 			function(err, result) {
// 				// if (err) throw err;
// 				res.status(200).end();
// 			}
// 		)
// 	}
// );


module.exports = router;