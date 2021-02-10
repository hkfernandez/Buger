var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");


var app = express();

// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootroot",
  database: "burger_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

app.get("/", 
	function(req, res) {
		connection.query(`SELECT * FROM burgers;`, 
			function(err, data) {
				if (err) throw err;
				const uneatenBurgersArr =[]
				const eatenBurgersArr = []
				data.forEach(burger => {
					if (burger.consumed === 1) {
						uneatenBurgersArr.push(burger)
					} else {
						eatenBurgersArr.push(burger)
					}
				});
				// console.log(uneatenBurgersArr);
				// console.log(eatenBurgersArr);
				res.render("index", 
					{ uneatenBurgers: uneatenBurgersArr, 
						eatenBurgers: eatenBurgersArr
					}
				);
			}
		);
	}
);



app.post("/", 
	function(req, res) {
		console.log(req.body);
		connection.query("INSERT INTO burgers (name) VALUES (?)", 
			[req.body.userBurger],
			function(err, result) {
				if (err) throw err;
				res.redirect("/");
			}
		);
	}
);


app.put("/api/eat/:Id", 		//changes the selected burger's state to consumed
	function(req, res) {
		burgerToEat = req.params.Id
		console.log('request.params line 81: ',req.params);
		console.log('request.body line 81: ',req.body);
		connection.query( `UPDATE burgers
			SET consumed = 0
			WHERE id = ${burgerToEat}`, 
				function(err, result) {
					if (err) throw err;
					res.redirect("/api/eat/");
				}
		);
	}
);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
