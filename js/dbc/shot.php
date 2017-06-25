<?php
$database = 'SHOOTERS';
$user = 'db2p50';
$password = 'db2p50';
$hostname='localhost';
$port = 60000;
$conn = db2_connect($database, $user, $password);
$name = $_POST['name'];
$zutaten = $_POST['zutaten'];

echo"$name, $zutaten";

$conn_string = "DRIVER={IBM DB2 ODBC  DRIVER};DATABASE=$database;PORT=$port;HOSTNAME=$hostname;".
"PROTOCOL=TCPIP;UID=$user;PWD=$password;";

$conn = db2_connect($conn_string, '', '');
if (!$conn) {
	echo "connection to $database failed";
	echo db2_conn_errormsg();
	ret;
	}

$insert="INSERT into SHOOTERS.SHOTS(NAME,ZUTATEN) values ('".$name."','".$zutaten."');";
$result = db2_exec($conn, $insert);

if($result){
	print "Successfully inserted!";
}
echo json_encode("result");

$rc = db2_close($conn);
?>
