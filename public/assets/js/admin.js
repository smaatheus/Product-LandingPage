console.log('Admin JS carregado!');

const products = [
{
    id: 1,
    name: 'Headphone Pro',
    price: 899,
    stock: 5
},
{
    id: 2,
    name: 'Mouse Gamer',
    price: 119,
    stock: 20
},
{
    id: 3,
    name: 'Monitor 144hz',
    price: 1199,
    stock: 8
}
];

console.log(products);

const tableBody = document.getElementById('products-table-body');
console.log('Tabela encontrada:', tableBody);

function renderProducts(productsArray) {
    console.log('Função chamada!');
    console.log('Array recebido:', productsArray);

    tableBody.innerHTML = '';
    console.log('Tabela limpa!');

// cria loop
    productsArray.forEach(function(product) {
        console.log('Criando linha para:', product.name);

        const row = document.createElement('tr');
        tableBody.appendChild(row);

        const idCell = document.createElement('td');
        idCell.textContent = product.id;
        row.appendChild(idCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = product.name;
        row.appendChild(nameCell);

        const priceCell = document.createElement('td');
        priceCell.textContent = product.price;
        row.appendChild(priceCell);

        const stockCell = document.createElement('td');
        stockCell.textContent = product.stock;
        row.appendChild(stockCell);
    });
    console.log('3 linhas criadas!');
}
renderProducts(products);