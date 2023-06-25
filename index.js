document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
  
    // Obter os valores dos campos do formulário
    var name = document.getElementsByName("name")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var password = document.getElementsByName("password")[0].value;
  
    // Criar um objeto com os dados a serem enviados para o servidor
    var data = {
      name: name,
      email: email,
      password: password
    };
  
    // Enviar os dados para o servidor usando Ajax
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "signup.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Processar a resposta do servidor (opcional)
        var response = JSON.parse(xhr.responseText);
        console.log(response);
      }
    };
    xhr.send(JSON.stringify(data));
  });
  