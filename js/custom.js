jQuery(document).ready(function(){
	
	jQuery.ajax({
		url: "http://178.62.75.76/app/app/login.php",
		type: "POST",
		dataType: "json",
		data: "param=no",
		success: function(html){
			var DOM ="";
			jQuery.each(html, function(key, value){
				DOM.html(value);
			});
		}, error: function(e){

		}
	});
});