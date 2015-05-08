$(document).ready(function(){

        $.ajax({
            url: "user.php",
            type: "POST",
            data: {action:'info'},
            success: function(data){
            	console.log(data);
                $("#userinfo").text("Username: ".data['username']." Sent: ".data['sent']." Received: ".data['received']);
            }, error: function(e){

            }
        });

        $('#send').click(function(){
			navigator.camera.getPicture(uploadPhoto,console.log("Error"),{sourceType:1,quality:60});
		});


        function capturePhoto(){
    		
		}

		function uploadPhoto(data){
			// this is where you would send the image file to server
 
			//output image to screen
    		cameraPic.src = "data:image/jpeg;base64," + data;
		}

        $('#receive').click(function(){
		
		$.ajax({
			url: "fetch.php",
			type: "POST",
			data: {action:'fetch'},
			success: function(pic){
				console.log(pic);
			}, error: function(e){

			}
		});
	});
});