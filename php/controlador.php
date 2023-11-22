<?php
    $conn = new mysqli('localhost','id20331472_joshua_sgc_2','sisequeponeR1-','id20331472_usuarios');
 
    if(isset($_POST['registro'])){
        if(!empty(trim($_POST['password'])) && !empty(trim($_POST['usuario'])) ){
 
            $password = $_POST['password'];
            $usuario = $_POST['usuario'];
 
            $enc_password = password_hash($password, PASSWORD_DEFAULT);
 
            $conn->query("INSERT INTO registrarse (usuario, password) VALUES ('$usuario','$password')");
            header('');
 
        if($conn->affected_rows !=1){
            $registro_error = "hubo un error";
        }
 
        }else{
            $registro_error = "ambos campos deben ser llenados";
        }
    }