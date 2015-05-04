$(document).ready(function(){
	

$('#submit').click(function(){
	
	$data = $('form').serialize();
	console.log($data);
	/*alert($data);
	jQuery.ajax({
		url: "http://localhost/hello/platforms/android/assets/www/login.php",
		type: "POST",
		dataType: "json",
		data: "param=no",
		success: function(html){
			var DOM ="";
			console.log(html);
			jQuery.each(html, function(key, value){
				DOM.html(value);
			});
		}, error: function(e){

		}
	});*/
});
	
});