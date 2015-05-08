<?php
print_r($_FILES);
$image = "img.jpg";
move_uploaded_file($_FILES["file"]["tmp_name"], "/var/www/html/uploads/".$image);