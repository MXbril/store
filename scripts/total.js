function createTotalTemplate(arrayOfProducts) {

  // Calcula el total sumando el precio de cada producto multiplicado por su cantidad
  const total = arrayOfProducts.reduce((accumulator, product) => {
    return accumulator + (product.price * product.quantity);
  }, 0);

  // Genera el template del total
  const totalTemplate = `
    <h1 class="nuevamente-titulo">Resumen del pedido</h1>
    <div class="total-a-pagar">
      <span>Total</span>
      <span>$ ${(total !== null || total !=0) ? total : 0 }</span>
    </div>
    <span class="modify-tax-policy">Incluye impuesto país y percepción AFIP</span>
    <button class="comprar-ahora" id="buy">Comprar</button>
  `;

  return totalTemplate;
}

// Actualiza el total en el contenedor correspondiente
function printTotal() {
  // Obtener los productos del carrito desde localStorage
  const cartProductsJSON = localStorage.getItem("cart");
  let cartProducts = [];

  // Si hay productos en el carrito, parsear el JSON
  if (cartProductsJSON) {
    cartProducts = JSON.parse(cartProductsJSON);
  }

  const totalContainer = document.querySelector("#total");
  const totalTemplate = createTotalTemplate(cartProducts);
  totalContainer.innerHTML = totalTemplate;

  const buyButton = document.getElementById("buy");
  buyButton.addEventListener("click", () => {
    alert('¡Gracias por tu compra!');
    localStorage.removeItem("cart");
    window.location.href = "./cart.html";
  });
}

// Llama a la función printTotal para imprimir el total al cargar la página
printTotal();
