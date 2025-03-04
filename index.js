// let totalApagar = 0;
// const cantidad = Number(prompt("¿Cuántos productos va a llevar?"));

// for (let i = 1; i <= cantidad; i++) {
//   const nombre = prompt("¿Qué producto desea llevar?");
//   const unidades = Number(prompt("¿Cuántas unidades?"));
//   const precio = Number(prompt("¿Cuánto sale cada unidad?"));
//   const subtotal = unidades * precio;
//   totalApagar += subtotal;
// }

// console.log("El total a pagar es: " + totalApagar);

const comprar = () => {
  let totalApagar = 0;
  for (let i = 1; i <= 3; i++) {
    const nombre = prompt("¿Qué producto desea llevar?");
    const unidades = Number(prompt("¿Cuántas unidades?"));
    const precio = Number(prompt("¿Cuánto sale cada unidad?"));
    const subtotal = unidades * precio;
    totalApagar += subtotal;
  }
  console.log(totalApagar);
  return totalApagar;
};

const total1 = comprar();
const total2 = comprar();
const total3 = comprar();
const total = total1 + total2 + total3;

console.log("El total a pagar es: "  + total)