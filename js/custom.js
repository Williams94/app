jQuery(document).ready(function(){
	
	jQuery.ajax({
		url: "http://",
		type: "",
		dataType: "",
		data: "",
		success: function(html){
			var DOM ="";
			jQuery.each(html, function(key, value){
				DOM.html(value);
			});
		}, error: function(e){

		}
	});
});