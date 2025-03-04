
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM completamente cargado y parseado");
  fetchOptions();
});

export function fetchOptions() {
  fetch('json/options.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('La respuesta de la red no fue correcta');
      }
      return response.json();
    })
    .then(data => {
      console.log("Opciones obtenidas:", data);
      renderOptions(data);
    })
    .catch(error => console.error('Error al obtener opciones:', error));
}

export function renderOptions(data) {
  const nav = document.getElementById('nav');
  const footer = document.getElementById('footer');
  
  if (nav) {
    nav.innerHTML = data.navigation.map(navItem => `<li><a class="nav-button" href="${navItem.linkTo}">${navItem.text}</a></li>`).join('  ');
  } else {
    console.error('Element with ID "nav" not found.');
  }

  if (footer) {
    footer.innerHTML = data.footer.map(footerItem => 
      `<div class="col">
         <li class="col-main-item">
           <a class="nav-button2" href="${footerItem.linkTo}">${footerItem.text}</a>
         </li>
         ${footerItem.opts.filter(opt => opt).map(opt => 
           `<li class="col-main-item-opts">
              <a href="#">${opt}</a>
            </li>`
         ).join('')}
       </div>`
    ).join(' ');
  } else {
    console.error('Element with ID "footer" not found.');
  }
}

// const navSelector = document.getElementById("nav");
// const options = [
//   { text: "Ofertas", linkTo: "./outlet.html", opts: ["Laptops", "Audio", "Auticulares"] },
//   { text: "Cómo comprar", linkTo: "./how.html", opts: ["Formas de pago", "Envios", "Devoluciones"] },
//   { text: "Costos y tarifas", linkTo: "./taxs.html", opts: ["Impuestos", "Facturación"]},
//   { text: "Mis pedidos", linkTo: "./orders.html", opts: ["Pedir nuevamente", "Lista de deseos"] },
//   { text: "Garantía", linkTo: "./warranty.html", opts: [""] },
// ];

// for (let option of options) {
//   const anchor = document.createElement("a");
//   anchor.className = "nav-button";
//   anchor.textContent = option.text;
//   anchor.href = option.linkTo;
//   navSelector.appendChild(anchor);
// }

// const footerSelector = document.querySelector("#footer");

// for (let option of options) {
//     const column = document.createElement("div");
//     column.classList.add("col");
//     const mainItem = document.createElement("li");
//     mainItem.classList.add("col-main-item");
//     const mainLink = document.createElement("a");
//     mainLink.className = "nav-button2";
//     mainLink.textContent = option.text;
//     mainLink.href = option.linkTo;
//     column.appendChild(mainItem)
//     mainItem.appendChild(mainLink);

//     for (let subOption of option.opts) {
//         if (subOption) {
//             const listItem = document.createElement("li");
//             listItem.classList.add("col-main-item-opts");
//             const subLink = document.createElement("a");
//             subLink.textContent = subOption;
//             subLink.href = "#"; // Enlazar a donde corresponda
//             listItem.appendChild(subLink);
//             column.appendChild(listItem)
//           }
//         }
      
//         footerSelector.appendChild(column);
// }