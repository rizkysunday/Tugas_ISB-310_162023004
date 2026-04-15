
<?php
include 'config.php';

$username = trim(mysqli_real_escape_string($conn, $_POST['username']));
$email = trim(mysqli_real_escape_string($conn, $_POST['email']));

if($username=="" || $email==""){
    header("Location:create.php?msg=empty");
    exit;
}

if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
    header("Location:create.php?msg=email");
    exit;
}

$cek = mysqli_query($conn, "SELECT * FROM users WHERE username='$username' OR email='$email'");
if(mysqli_num_rows($cek)>0){
    header("Location:create.php?msg=exist");
    exit;
}

mysqli_query($conn, "INSERT INTO users(username,email) VALUES('$username','$email')");
header("Location:index.php?msg=success");
exit;
?>
