# take
Mostre os preços dos produtos para seu cliente enquanto ele conecta ao wifi da sua loja.

### PHP, JS
 - Sem dependência, código puro.

### JS 

arquivo: take.js
```
if(true){ wifi  = navigator.connection || navigator.mozConnection || navigator.webkitConnection;} 
alert("R$ 12,90");
alert("Bem vindo a nossa loja"); 
```
- Se conectamos com diferentes navegadores:
- Mostre o preço.
- Mostre Bem vindo a nossa loja.

### PHP 

arquivo: take.php
```
<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

print("R$ 12,90");
print("Bem vindo a nossa loja"); 

// Comando em javascript que quando conecta no wifi exibe o preço dos produtos
echo "<script language='take.js'></script>";

?>
```
- Reportar todos os erros.
- Mostrar preço.
- Mostrar Bem vindo a nossa loja.
- Sair o comando direto no navegador com referência de localização.

### Para testar e rodar o código siga esses passos:

- Baixar: php
- Depois: php -S localhost:8080 index.php 
