$(".eatBtn").on("click",                  // lets the server know which burger to move to the eaten list
	function(event) {
            // alert ('working');
		// event.preventDefault();
		let Id = $(this).data("id");
            console.log('burgerId', Id);
		$.ajax(
			"/api/eat/"+Id, {
				type: "PUT",
				data: Id
			}
		)
		.then(
			function(response) {
				console.log(response);
				location.assign("/");
			}
		);
  	}
);

$("#clearBtn").on("click", 
	function(event) {
		event.preventDefault();
		$.ajax(
			"/api/clear/", {
				type: "DELETE",
				data: ""
			}
		)
		.then(
			function(response) {
				console.log(response);
				location.assign("/api/eat/");
			}
		);
  	}
);
