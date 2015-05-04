$(document).ready(function(){



        $.ajax({
            url: "user.php",
            type: "POST",
            data: {action:'info'},
            success: function(data){
                console.log(data);
            }, error: function(e){

            }
        });



});