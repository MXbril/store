
// function printThreeCards(arrayOfProducts, idSelector) {
//     let productsTemplate = "";
//     // Itera sobre los primeros tres elementos del array de productos o sobre todos los elementos si hay menos de tres
//     for (let i = 0; i < Math.min(arrayOfProducts.length, 3); i++) {
//       productsTemplate = productsTemplate + createCard(arrayOfProducts[i]);
//     }
//     // Agrega las tarjetas al contenedor HTML utilizando el selector de ID
//     const productsSelector = document.getElementById(idSelector);
//     productsSelector.innerHTML = productsTemplate;
//   }
  
//   function createCard(product) {
//     // Crea la tarjeta para un producto dado
//     return `<a class="product-card" href="./details.html?id=${product.id}">
//       <img class="product-img" src="${product.images[0]}" alt="${product.id}" />
//       <div class="product-info">
//         <span class="product-title">${product.title}</span>
//         <span class="product-description">${product.color[0]}</span>
//         <div class="product-price-block">
//           <span class="price">$${product.price}</span>
//           <span class="discount">${product.discount}</span>
//         </div>
//         <div class="product-tax-policy">
//           Incluye impuesto País y percepción AFIP
//         </div>
//       </div>
//     </a>`;
//   }
  
//   // Llama a printThreeCards para mostrar solo tres tarjetas en el nuevo contenedor
//   printThreeCards(products, "products-details");
  