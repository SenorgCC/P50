<?php
$database = 'SHOOTERS';
$user = 'db2p50';
$password = 'db2p50';
$hostname='localhost';
$port = 60000;
$conn = db2_connect($database, $user, $password);
$name = $_POST['name'];



$conn_string = "DRIVER={IBM DB2 ODBC  DRIVER};DATABASE=$database;PORT=$port;HOSTNAME=$hostname;".
"PROTOCOL=TCPIP;UID=$user;PWD=$password;";

$conn = db2_connect($conn_string, '', '');
if (!$conn) {
	echo "connection to $database failed";
	echo db2_conn_errormsg();
	ret;
	}

$select="select id from shooters.shots where name like '".$name."';";
$result = db2_exec($conn, $select);

if($result){
	print "Successfully inserted!";
}
echo json_encode($result);

$rc = db2_close($conn);
?>
