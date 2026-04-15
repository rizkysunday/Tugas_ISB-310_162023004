
<?php
include 'config.php';
$id=$_GET['id'];
$data=mysqli_query($conn,"SELECT * FROM users WHERE id='$id'");
$d=mysqli_fetch_array($data);
?>

<!DOCTYPE html>
<html>
<head>
<title>Edit Data</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<div id="toast" class="toast"></div>

<div class="container">

<h2>Update User</h2>

<form action="update.php" method="POST" onsubmit="return validateForm()">

<input type="hidden" name="id" value="<?php echo $d['id']; ?>">

<label>Name</label>
<input type="text" name="username" id="username" value="<?php echo htmlspecialchars($d['username']); ?>">

<label>Email</label>
<input type="text" name="email" id="email" value="<?php echo htmlspecialchars($d['email']); ?>">

<button type="submit">Update</button>

</form>

<div class="actions">
    <a href="create.php">CREATE</a>
    <a href="index.php">READ</a>
</div>

</div>

<script src="script.js"></script>

<?php
if(isset($_GET['msg'])){
    $msg=$_GET['msg'];
    if($msg=='empty') echo "<script>showToast('Nama dan email tidak boleh kosong');</script>";
    if($msg=='email') echo "<script>showToast('Format email tidak valid');</script>";
    if($msg=='exist') echo "<script>showToast('Username atau email sudah digunakan');</script>";
}
?>

</body>
</html>
