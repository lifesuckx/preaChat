document.addEventListener('DOMContentLoaded', function() {

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtenção dos valores dos campos
    var nome = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('password').value;

    // Criação de um objeto para armazenar os dados
    var registro = {
      nome: nome,
      email: email,
      senha: senha
    };

    // Exemplo de exibição dos dados no console
    console.log(registro);

    // Aqui você pode adicionar código para enviar os dados para um servidor, armazená-los em um banco de dados, etc.
    window.open('login.html');

    // Limpar os campos do formulário
    document.getElementById('registroForm').reset();


    window.open('msgPanel.html');

    document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita o envio do formulário
  
      // Obtenção dos valores dos campos
      var email = document.getElementById('email').value;
      var senha = document.getElementById('password').value;
  
      // Obtenção dos dados do registro armazenados
      var registroArmazenado = JSON.parse(localStorage.getItem('registro'));
  
      if (registroArmazenado && registroArmazenado.email === email && registroArmazenado.senha === senha) {
        alert('Login realizado com sucesso!');
        // Aqui você pode adicionar o redirecionamento para a página de sucesso ou executar outras ações desejadas
      } else {
        alert('Email ou senha incorretos. Tente novamente!');
        // Aqui você pode adicionar o tratamento para login inválido, como exibir uma mensagem de erro
      }
  
      // Limpar os campos do formulário
      document.getElementById('loginForm').reset();
    });
  });
  
    });
});