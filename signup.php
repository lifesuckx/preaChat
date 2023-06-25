<?php
// Conectar ao banco de dados MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "message_app";
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar se a conexão foi bem-sucedida
if ($conn->connect_error) {
  die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

// Obter os dados enviados pelo JavaScript
$data = json_decode(file_get_contents("php://input"), true);
$name = $data['name'];
$email = $data['email'];
$password = $data['password'];

// Executar a inserção dos dados na tabela do banco de dados
$sql = "INSERT INTO usuarios (nome, email, senha) VALUES ('$name', '$email', '$password')";
if ($conn->query($sql) === TRUE) {
  $response = array("success" => true, "message" => "Conta criada com sucesso");
} else {
  $response = array("success" => false, "message" => "Erro ao criar conta: " . $conn->error);
}

// Enviar a resposta de volta para o JavaScript
header("Content-Type: application/json");
echo json_encode($response);

// Fechar a conexão com o banco de dados
$conn->close();
?>
