
<?php include 'config.php'; ?>
<!DOCTYPE html>
<html>
<head>
<title>Create Data</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<div id="toast" class="toast"></div>

<div class="container">
<h2>Create Data</h2>

<form action="insert.php" method="POST" onsubmit="return validateForm()">

<label>Name</label>
<input type="text" name="username" id="username" placeholder="Your name">

<label>Email</label>
<input type="text" name="email" id="email" placeholder="Your email">

<button type="submit">Insert</button>

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
