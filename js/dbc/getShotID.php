<?php
$database = 'SHOOTERS';
$user = 'db2p50';
$password = 'db2p50';
$hostname='localhost';
$port = 60000;
$conn = db2_connect($database, $user, $password);
$name = $_POST['name'];
$id=0;


$conn_string = "DRIVER={IBM DB2 ODBC  DRIVER};DATABASE=$database;PORT=$port;HOSTNAME=$hostname;".
"PROTOCOL=TCPIP;UID=$user;PWD=$password;";

$conn = db2_connect($conn_string, '', '');
if (!$conn) {
	echo "connection to $database failed";
	echo db2_conn_errormsg();
	ret;
	}

$select="select ID from shooters.shots where name like '".$name."';";
$result = db2_exec($conn, $select);

while($row = db2_fetch_assoc($result)){
	$id=$row['ID'];
}

echo json_encode($id);

$rc = db2_close($conn);
?>
