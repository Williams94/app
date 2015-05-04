$(document).ready(function(){

	$('#login').click(function(){
		$name = $('#name').val();
		$password = $('#pass').val();

		$.ajax({
			url: "login.php",
			type: "POST",
			data: {name:$name, password:$password, action:'login'},
			success: function(data){
				console.log(data);
				if (data = 1){
					window.location.href = "home.html";
				} else{
					console.log("Login unsuccessful");
				}

			}, error: function(e){
				//console.log("Login unsuccessful");
			}
		});
	});

	$('#register').click(function(){
		$name = $('#name').val();
		$password = $('#pass').val();

		$.ajax({
			url: "login.php",
			type: "POST",
			data: {name:$name, password:$password, action:'register'},
			success: function(user){
				console.log(user);
			}, error: function(e){

			}
		});
	});


});