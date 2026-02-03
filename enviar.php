<?php

$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$assunto = $_POST['assunto'];
$mensagem = $_POST['mensagem'];

$para = "contato@alliancaest.com.br"; // troca pelo seu email real

$texto = "
Nome: $nome
Email: $email
Telefone: $telefone
Assunto: $assunto

Mensagem:
$mensagem
";

$headers = "From: $email";

mail($para, "Contato Site", $texto, $headers);

header("Location: obrigado.html");

?>
