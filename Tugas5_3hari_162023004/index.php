
<?php include 'config.php'; ?>
<!DOCTYPE html>
<html>
<head>
<title>Read Data</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<div id="toast" class="toast"></div>

<h2>Read Data</h2>

<div class="actions" style="max-width:700px;margin:0 auto;">
    <a href="create.php">CREATE</a>
    <a href="index.php">READ</a>
</div>

<div class="user-list">
<?php
$no=1;
$data=mysqli_query($conn,"SELECT * FROM users ORDER BY id DESC");
while($d=mysqli_fetch_array($data)){
?>
    <div class="user-card">
        <div class="user-data">
            <h3><?php echo htmlspecialchars($d['username']); ?></h3>
            <p><?php echo htmlspecialchars($d['email']); ?></p>
        </div>
        <div class="user-actions">
            <a class="btn edit" href="edit.php?id=<?php echo $d['id']; ?>">Edit</a>
            <a class="btn delete" href="delete.php?id=<?php echo $d['id']; ?>" onclick="return confirm('Yakin hapus data?')">Delete</a>
        </div>
    </div>
<?php } ?>
</div>

<script src="script.js"></script>

<?php
if(isset($_GET['msg'])){
    $msg=$_GET['msg'];
    $text='';
    if($msg=='success') $text='Data berhasil ditambahkan';
    if($msg=='updated') $text='Data berhasil diubah';
    if($msg=='deleted') $text='Data berhasil dihapus';
    if($text!='') echo "<script>showToast('$text');</script>";
}
?>

</body>
</html>
