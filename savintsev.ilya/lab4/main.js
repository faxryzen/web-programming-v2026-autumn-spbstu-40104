import './model.js';

// Реализуйте асинхронную логику UI и синхронизацию с localStorage.

const productList = document.getElementById('product-list');

const productForm = document.getElementById('product-form');
productForm.addEventListener('submit', submitProduct);

async function submitProduct(event)
{
    event.preventDefault();
    const data = new FormData(event.target);

    const productCard = document.createElement("div");
    productCard.className = 'product-card';
    productCard.setAttribute('data-testid', 'entity-card');

    const idSpan = document.createElement('span');
    idSpan.className = 'id';
    idSpan.textContent = `№ ${data.get('id')}`;

    const nameSpan = document.createElement('span');
    nameSpan.className = 'name';
    nameSpan.textContent = `${data.get('name')}`;

    const priceSpan = document.createElement('span');
    priceSpan.className = 'price';
    priceSpan.textContent = `${data.get('price')} $`;

    productCard.append(idSpan, nameSpan, priceSpan);
    productList.append(productCard);

    // window.localStorage.setItem
}
