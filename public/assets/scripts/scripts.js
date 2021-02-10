$(".eatBtn").on("click", 
	function(event) {
            // alert ('working');
		event.preventDefault();
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
				location.assign("/api/eat/");
			}
		);
  	}
);
