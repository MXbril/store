import { captureText } from './filterProducts.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM completamente cargado en productCards.js");
  
  const searchSelector = document.getElementById('search');
  if (searchSelector) {
    searchSelector.addEventListener("keyup", event => captureText(event));
  } else {
    console.error('Elemento con ID "search" no encontrado.');
  }

});

export function sortProductsByNameAsc(products) {
  products.sort((a, b) => {
      const nameA = a.title.toUpperCase();
      const nameB = b.title.toUpperCase();
      if(nameA < nameB){
          return -1;
      }
      if(nameA > nameB){
          return 1;
      }
      return 0;
  });
}

export function printCards(arrayOfProducts, idSelector) {
  console.log("Imprimiendo tarjetas para el selector:", idSelector);
  sortProductsByNameAsc(arrayOfProducts);
  
  let productsTemplate = "";
  for (const element of arrayOfProducts) {
    console.log("Creando tarjeta para el producto:", element.title);
    productsTemplate += createCard(element);
  }
  const productsSelector = document.getElementById(idSelector);
  if (productsSelector) {
    console.log("Elemento encontrado:", productsSelector);
    productsSelector.innerHTML = productsTemplate;
  } else {
    console.error(`Element with id "${idSelector}" not found.`);
  }
}

export function createCard(prod1) {
  if (!prod1.title || !prod1.images || !prod1.price) {
    console.error("Datos incompletos para crear la tarjeta:", prod1);
    return "";
  }

  return `<a class="product-card" href="./details.html?id=${prod1.id}" aria-label="Más detalles sobre ${prod1.title}">
    <img
      class="product-img"
      src="${prod1.images[0]}"
      alt="${prod1.title}"
      onerror="this.onerror=null;this.src='/assets/default-image.png';"
    />
    <div class="product-info">
      <span class="product-title">${prod1.title}</span>
      <span class="product-description">${prod1.color ? prod1.color[0] : "Sin especificar"}</span>
      <div class="product-price-block">
        <span class="price">$${prod1.price}</span>
        <span class="discount">${prod1.discount ? prod1.discount : "Sin descuento"}</span>
      </div>
      <div class="product-tax-policy">
        Incluye impuesto País y percepción AFIP
      </div>
    </div>
  </a>`;
}



