const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// estáticos
app.use(express.static('public'));

// rota Landing Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// rota Admin
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// rota API produtos (json)
app.get('/api/produtos', (req, res) => {
    const produtos = [
        { id: 1, name: 'Headphone Pro', price: 699, stock: 5 },
        { id: 2, name: 'Mouse Gamer', price: 119, stock: 20 },
        { id: 3, name: 'Monitor 144hz', price: 859, stock: 8 }
    ];
    res.json(produtos);
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor: http://localhost:${PORT}`);
    console.log(`📱 Landing: http://localhost:${PORT}/`);
    console.log(`🔐 Admin: http://localhost:${PORT}/admin`);
});
