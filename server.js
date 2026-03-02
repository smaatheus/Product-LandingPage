const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// estáticos
app.use(express.static("public"));

app.use(express.json());

app.post("/api/login", (req, res) => {
  const { email, senha } = req.body;

  console.log(`Login tentativa: ${email}`);

  if (email === "admin@aurora.com" && senha === "123") {
    res.json({
      success: true,
      token: "aurora-jwt-2026",
      user: { email, role: "admin" },
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Credenciais inválidas",
    });
  }
});

// rota Landing Page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/check-token", (req, res) => {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (token === "aurora-jwt-2026") {
    res.json({ valid: true, role: "admin" });
  } else {
    res.status(401).json({ valid: false });
  }
});

// rota Admin
app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "admin.html"));
});

// rota API produtos (json)
app.get("/api/produtos", (req, res) => {
  const produtos = [
    { id: 1, name: "Headphone Pro", price: 699, stock: 5 },
    { id: 2, name: "Mouse Gamer", price: 119, stock: 20 },
    { id: 3, name: "Monitor 144hz", price: 859, stock: 8 },
  ];
  res.json(produtos);
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor: http://localhost:${PORT}`);
  console.log(`📱 Landing: http://localhost:${PORT}/`);
  console.log(`🔐 Admin: http://localhost:${PORT}/admin`);
});
