function fazerLogin(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (!email || !senha) {
    alert("Preencha e-mail e senha.");
    return;
  }

  fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, senha }),
  })
    .then(function (res) {
      if (!res.ok) {
        throw new Error("Erro na resposta do servidor.");
      }
      return res.json();
    })
    .then(function (dados) {
      if (dados.success === true) {
        localStorage.setItem("token", dados.token);
        window.location.href = "/admin.html";
      } else {
        alert("E-mail ou senha incorretos.");
      }
    })
    .catch(function (erro) {
      console.error("Erro no login:", erro);
      alert("Não foi possível fazer login agora. Tente novamente.");
    });
}
