<?php
$database = 'SHOOTERS';
$user = 'db2p50';
$password = 'db2p50';
$hostname='localhost';
$port = 60000;
$conn = db2_connect($database, $user, $password);
$resultdata=[];

$conn_string = "DRIVER={IBM DB2 ODBC  DRIVER};DATABASE=$database;PORT=$port;HOSTNAME=$hostname;".
"PROTOCOL=TCPIP;UID=$user;PWD=$password;";

$conn = db2_connect($conn_string, '', '');
if (!$conn) {
	echo "connection to $database failed";
	echo db2_conn_errormsg();
	ret;
	}

$SelectString="SELECT ID,KUERZEL FROM SHOOTERS.NUTZER WHERE AKTIV='1';";
$stmt = db2_prepare($conn, $SelectString);
$result = db2_execute($stmt);

while ($row = db2_fetch_array($stmt)) {
	array_push($resultdata, $row);
}

echo json_encode($resultdata);

$rc = db2_close($conn);
?>