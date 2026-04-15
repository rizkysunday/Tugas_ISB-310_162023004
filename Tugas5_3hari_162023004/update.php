
<?php
include 'config.php';
$id = (int)$_POST['id'];
$username = trim(mysqli_real_escape_string($conn, $_POST['username']));
$email = trim(mysqli_real_escape_string($conn, $_POST['email']));

if($username=="" || $email==""){
    header("Location:edit.php?id=$id&msg=empty");
    exit;
}

if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
    header("Location:edit.php?id=$id&msg=email");
    exit;
}

$cek = mysqli_query($conn, "SELECT * FROM users WHERE (username='$username' OR email='$email') AND id<>$id");
if(mysqli_num_rows($cek)>0){
    header("Location:edit.php?id=$id&msg=exist");
    exit;
}

mysqli_query($conn, "UPDATE users SET username='$username', email='$email' WHERE id='$id'");
header("Location:index.php?msg=updated");
exit;
?>
