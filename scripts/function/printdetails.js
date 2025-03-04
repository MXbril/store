import { getProducts } from "../products.js";
import { saveProduct } from "./saveProduct.js";
import { changeSubtotal } from "./changeSubtotal.js"
import { changeMini } from "./changeMini.js";

function printDetails(id) {
    getProducts().then((products) => {
    const product = products.find((each) => each.id === id);
    //   const colorOptions = product.color.map((color) => `<option value="${color}">${color}</option>`).join("");
    const detailsTemplate = `<div class="product-images-block">
    ${product.images.map((each) =>`<img class="miniImg" src="${each}" alt="mini" />`).join("")}
     <img class="main-image" id="bigImg" src="${product.images[0]}" alt="${product.id}" />  
   </div>  
   <div class="product-description-block">
     <h1 class="title">${product.title}</h1>
     <form class="selector">
       <fieldset>
         <label class="label" for="color">Color</label>
         <select type="text" placeholder="Selecciona un color" id="color-">
         ${product.color.map((each) => `<option value=${each}>${each}</option>`).join("")}
         </select>
       </fieldset>
     </form>
     <div class="description">
       <span> Descripción </span>
       <p>
         ${product.description}
       </p>
     </div>
   </div>
   <div class="product-checkout-block">
     <div class="checkout-container">
       <span class="checkout-total-label">total:</span>
       <h2 class="checkout-total-price" id="subtotal">$${product.price}</h2>
       <p class="checkout-description">
         Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$ 50711
         haciendo la solicitud en AFIP.
       </p>
       <ul class="checkout-policy-list">
         <li>
           <span class="policy-icon">
             <img src="assets/truck.png" alt="truck" />
           </span>
           <span class="policy-desc">
             Agrega el producto al carrito para conocer los costos de envío
           </span>
         </li>
         <li>
           <span class="policy-icon">
             <img src="assets/plane.png" alt="plane" />
           </span>
           <span class="policy-desc">
             Recibe aproximadamente entre 10 a 15 días hábiles,
             seleccionando envío normal
           </span>
         </li>
       </ul>
       <div class="checkout-process">
         <div class="top">
           <input type="number" value="1" min="1"  id="quantity-${product.id}" />
           <button class="btn-primary">Comprar</button>
         </div>
          <div class="bottom">
           <button class="btn-outline" id="add-to-cart-${product.id}" 
           >Añadir al carrito</button>
          </div> 
       </div>
     </div>
   </div>`;
  
   const detailsSelector = document.querySelector("#details");
      detailsSelector.innerHTML = detailsTemplate;

      document.querySelectorAll('.miniImg').forEach((img) => {
        img.addEventListener('click', changeMini);
    });

      document.querySelector(`#add-to-cart-${product.id}`).addEventListener('click', () => saveProduct(product.id));
    document.querySelector(`input`).addEventListener('change', (event) => changeSubtotal(event, id));
  }).catch((error) => {
    console.error('Hubo un problema al obtener los productos:', error);
  });
  }

export { printDetails };