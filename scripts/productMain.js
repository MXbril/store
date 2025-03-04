import { createCard, printCards } from './productCards.js';

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM completamente cargado y parseado");
    fetchProducts();
});

export function fetchProducts() {
    fetch('json/products.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('La respuesta de la red no fue correcta');
            }
            return response.json();
        })
        .then(data => {
            console.log("Productos obtenidos:", data);
            renderProducts(data);
        })
        .catch(error => console.error('Error al recuperar productos:', error));
}

export function renderProducts(data) {
    const productList = document.getElementById("products");

    console.log("Intentando acceder al elemento con ID 'products'");


    if (productList) {
        console.log("Elemento con ID 'products' encontrado:", productList);
        productList.innerHTML = data.products.map(product => createCard(product)).join(' ');
        printCards(data.products, "products");
    } else {
        console.error('Element with ID "products" not found.');
    }
}