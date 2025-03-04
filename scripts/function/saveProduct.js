import { getProducts } from "../products.js";
function saveProduct(id) {
    getProducts()
    .then((products) => {
    const found = products.find((each) => each.id === id);
    const product = {
      id: id,
      title: found.title,
      price: found.price,
      image: found.images[0],
      color: document.querySelector("#color-").value,
      quantity: document.querySelector("#quantity-" + id).value,
    };
  
    // // Convertir la cantidad y el precio a números
    // const quantity = parseInt(product.quantity);
    // const price = parseFloat(product.price);
    // product.totalPrice = quantity * price;
  
    console.log("Valor que se agrega en el almacenamiento local:", product);
  
    // Verificar si la clave "cart" existe en el localStorage
    let cart = localStorage.getItem("cart");
    if (cart) {
          // Si existe, convertir el JSON almacenado en un array de productos
          cart = JSON.parse(cart);
          // Agregar el nuevo producto al array de productos
          cart.push(product);
        } else {
          // Si no existe, crear un nuevo array con el producto y guarda en el localStorage
          cart = [product];
        }
  
    // console.log(product)
    // const stringifyProduct = JSON.stringify(product);
    const stringifyCart = JSON.stringify(cart);
    localStorage.setItem("cart", stringifyCart);
    });
}

  export { saveProduct };