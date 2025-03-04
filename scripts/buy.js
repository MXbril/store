// const buySelector = document.getElementById("buy");
// console.log(buySelector);

// // Añade un evento de click al botón
// buySelector.addEventListener("click", function() {
//     console.log("Botón 'Comprar' clickeado");

//     // Borra todos los productos del array cartProducts
//     cartProducts = [];
//     console.log("Contenido después de borrar cartProducts:", cartProducts);

//     // Borra todos los productos del localStorage
//     localStorage.removeItem("cart");

//     // Actualiza la impresión de las tarjetas de productos del carrito
//     printCartCards(cartProducts);

//     // Actualiza la impresión del cuadro de detalle del total
//     printTotal(cartProducts);

//     
// });
 

function comprar() {
    const buySelector = document.getElementById("buy");

    buySelector.addEventListener("click", () => {
        //Borrar los productos del carrito
        localStorage.removeItem('cart');
        //Redirigir a la página de inicio
        window.location.href = "./cart.html";
    });
    //Verifica si hay productos en el carrito para mostrar un mensaje apropiado
    const cartContainer = document.querySelector(".container-cart");
    if (cartProducts.length === 0) {
        cartContainer.innerHTML = "<p>No hay productos en el carrito.</p>";
    }
}

comprar()


