let cartProducts;

// Asigna a esta variable un array con los productos del localStorage.
const cartData = localStorage.getItem("cart");
if (cartData) {
  cartProducts = JSON.parse(cartData);
} else {
  cartProducts = [];
}

function createCartCard(product) {
  return `
  <article class="cart-destails">
  <img src="${product.image}" alt="${product.title}">
    
    <div class="detalles-carrito">
      
      <span>
        <h3 class="title-cart-compra">${product.title}</h3>
        <p>${product.color}</p>
        <p>descripcion del articulo de todo lo que se pueda escr...</p>
        <input class="mover-input" type="number" name="quantity" min="1" id="${product.id}_${product.color}" value="${product.quantity}" onchange="changeQuantity(event)" />
      </span>
      <h3 class="center-price">$ ${product.price}</h3>
    </div>
  </div>
  </article>
  `;
}

// Define una función para imprimir todas las tarjetas del carrito
function printCartCards(products) {
  const cartContainer = document.querySelector(".container-cart");
  cartContainer.innerHTML = ""; // Limpiar el contenido existente antes de imprimir nuevos productos

  products.forEach(product => {
    const cartCard = createCartCard(product);
    cartContainer.innerHTML += cartCard;
  });
}

function changeQuantity(event) {
  //Traer el id del producto
  const id = event.target.id.split("_");
  //Traer el valor de la cantidad
  const quantity = event.target.value;
  //Iterar sobre los productos del carrito
  cartProducts.forEach(product => {
      //Verificar si el id del producto es igual al id del producto seleccionado
      if (product.id == id[0] && product.color == id[1]) {
          //Cambiar la cantidad del producto
          product.quantity = quantity;
      }
  });
  //Guardar el carrito en localStorage
  localStorage.setItem('cart', JSON.stringify(cartProducts));
  printTotal();
}


// Llama a la función printCartCards para renderizar los productos en el carrito

printCartCards(cartProducts);

console.log(cartProducts)