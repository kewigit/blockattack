// ajax.php
<?php
//ajax送信でPOSTされたデータを受け取る
$username = 'root';
$password = 'kkkkk.keigo1125';

$post_data_1 = $_POST['post_data_1'];
//受け取ったデータを配列に格納

$return_score = array($post_data_1);//array($post_data_1, $post_data_2);

$conn = mysqli_connect('localhost', $username, $password);

$sql = "INSERT INTO asai1 (score) VALUE (".$post_data_1.")";

$db = mysqli_select_db($conn, 'testsql');
$res = mysqli_query($conn,$sql);

mysqli_close($conn);
//「$return_array」をjson_encodeして出力
echo json_encode($return_score);
?>
