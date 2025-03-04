import { printDetails } from "./function/printdetails.js";
import { getProducts } from "./products.js";

async function loadProductDetails() {
  try {
    const products = await getProducts();
    const query = location.search;
    const params = new URLSearchParams(query);
    const id = params.get("id");
    printDetails(id, products); // Pasar los productos como argumento
  } catch (error) {
    console.error('Error al cargar los productos:', error);
  }
}

loadProductDetails();

// const query = location.search;
// const params = new URLSearchParams(query);
// const id = params.get("id");
// console.log("Este es el id: " + id);













// let cart = JSON.parse(localStorage.getItem("cart")) ?? [];

//   console.log("Valor de cart antes de agregar el producto:", cart);

//   // Verificar si cart es un array
//   if (!Array.isArray(cart)) {
//     console.error("El valor de 'cart' no es un array:", cart);
//     // Si no es un array, inicializar cart como un array vacío
//     cart = [];
//   }

//   // Agregar el nuevo producto al array de productos
//   cart.push(product);

//   // Convertir el array de productos a JSON y guardarlo en el localStorage
//   localStorage.setItem("cart", JSON.stringify(cart));