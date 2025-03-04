import { getProducts } from './products.js';
import { printCards, sortProductsByNameAsc } from './productCards.js';

let allProducts = [];

document.addEventListener('DOMContentLoaded', async function() {
    try {
      allProducts = await getProducts();
      const searchInput = document.getElementById('search');
      if (searchInput) {
        searchInput.addEventListener('input', captureText);
      } else {
        console.error('Element with ID "search" not found.');
      }
    } catch (error) {
      console.error('Error al cargar productos:', error);
    }
  });

export function captureText(event) {
    // console.log('capturado')
    // Guardar el valor capturado por el evento
    const searchText = event.target.value.trim().toLowerCase();
    console.log(searchText)
    
    // Filtrar el array de productos
    const filteredProducts = allProducts.filter(prod1 => prod1.title.toLowerCase().includes(searchText));
    sortProductsByNameAsc(filteredProducts);
    // Actualizar la vista con una nueva impresión de las tarjetas
    printCards(filteredProducts, "products");
}

// const searchSelector = document.querySelector('#search');
// searchSelector.addEventListener("keyup", event => captureText(event));
 
