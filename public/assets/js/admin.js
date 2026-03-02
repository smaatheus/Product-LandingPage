console.log("Admin JS carregado!");

async function renderProducts() {
  try {
    console.log("Buscando produtos da API...");
    const response = await fetch("/api/produtos");
    const products = await response.json();

    console.log("Produtos recebidos:", products);

    const tableBody = document.getElementById("products-table-body");
    tableBody.innerHTML = "";

    products.forEach((product) => {
      const row = document.createElement("tr");
      row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td class="price-cell">R$ ${product.price.toFixed(2).replace(".", ",")}</td>
            <td>${product.stock}</td>
            `;
      tableBody.appendChild(row);
    });

    console.log("Estoque carregado com sucesso!");
  } catch (error) {
    console.error("Erro:", error);
  }
}

const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "/login.html";
} else {
  fetch("/api/check-token", {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((r) => r.json())
    .then((data) => {
      if (!data.valid) {
        localStorage.removeItem("token");
        window.location.href = "/login.html";
      } else {
        renderProducts();
      }
    })
    .catch(() => {
      window.location.href = "/login.html";
    });
}
