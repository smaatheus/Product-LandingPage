function fazerLogin() {

  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;
  
  fetch('/api/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email: email, senha: senha})
  })
  .then(function(res) {
    return res.json();  // converte pra objeto
  })
  .then(function(dados) {
    if (dados.success === true) {
      localStorage.setItem('token', dados.token);
      window.location.href = '/admin.html';
    } else {
      alert('Email ou senha errados!');
    }
  });
}
