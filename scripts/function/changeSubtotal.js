import { getProducts } from "../products.js";

function changeSubtotal(event, productId) {
  getProducts().then((products) => {
    const product = products.find((each) => each.id === productId);
    const quantity = event.target.value;
    const subtotal = product.price * quantity;
    const subtotalElement = document.getElementById("subtotal");
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
  }).catch((error) => {
    console.error('Hubo un problema al obtener los productos:', error);
  });
}

  export { changeSubtotal };