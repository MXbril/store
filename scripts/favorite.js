let favorites = localStorage.getItem("favorite");

// Verificar si hay productos en el almacenamiento local
if (favorites) {
    // Convertir los datos del almacenamiento local de nuevo en un array
    favorites = JSON.parse(favorites);
} else {
    // Si no hay datos en el almacenamiento local, asignar un array vacío
    favorites = [];
}

// Ahora la variable 'favorites' contiene un array con los productos del almacenamiento local, o un array vacío si no hay datos
console.log(favorites);
function createCard() {
    return `
    <article class="cart-details">
      <img src="./assets/mock1.jpg" alt="laptop-favorito">
      <div class="details-cart">
        <span>
          <h3 class="title-cart-compra">Macbook Pro 15'4</h3>
          <p>black</p>
        </span>
        <h3 class="center-price">$650</h3>
      </div>
      <div class="icons-favorite">
        <i class="fa-solid fa-trash"></i>
        <i class="fa-solid fa-cart-shopping"></i> 
      </div>
    </article>
    `;
  }

// Función para imprimir la tarjeta dentro del contenedor de favoritos
function printCardInFavorites() {
  const favoriteContainer = document.querySelector(".container-favorite");
  const cartData = localStorage.getItem("favorite"); // Obtener datos del carrito del localStorage
  if (cartData) {
    const product = JSON.parse(cartData); // Parsear los datos del carrito si existen
    const cardHTML = createCard(product); // Llama a la función createCard con el producto obtenido
    favoriteContainer.innerHTML = cardHTML; // Inserta el HTML de la tarjeta en el contenedor de favoritos
  } else {
    console.error("No hay datos de carrito en el localStorage.");
  }
}

if (localStorage.getItem("favorite") !== null) {
  console.log("La clave 'favorite' está presente en el localStorage.");
} else {
  console.log("La clave 'favorite' no está presente en el localStorage.");
}

// Llama a la función para imprimir la tarjeta en el contenedor de favoritos
printCardInFavorites();