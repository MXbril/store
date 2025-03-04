function getProducts() {
  return fetch("./json/products.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      return data.products;
    })
    .catch((error) => {
      console.error('Hubo un problema con la operación fetch:', error);
      throw error;
    });
}
function products() {
  return getProducts();
}

export { getProducts };



// class Product {
//   constructor(id, title, price, stock, discount, images, supplier, color, description) {
//     this.id = id;
//     this.title = title;
//     this.price = price;
//     this.stock = stock;
//     this.discount = discount;
//     this.images = images;
//     this._supplier = supplier;
//     this.color = color;
//     this.description= description;
//   }

//   get getSupplier() {
//     return this._supplier;
//     }
//     set setSupplier(newName) {
//     this._supplier = newName;
//     }

// }


// const prod1 = new Product("MacbookPro", "Macbook Pro 15'4", 750, 10, '50% Off', ['assets/mock1.jpg', 'assets/mock2.jpg'], 'Mac', ['Space Gray', 'Black'], 'El MacBook Pro de 15.4" es una computadora portátil premium de Apple, conocida por su potencia, pantalla de alta resolución y diseño delgado. Ideal para profesionales creativos y usuarios exigentes.');
// const prod2 = new Product("J00Macbook", "Laptop Asus Gamer", 650, 12, '30% Off', ['assets/mock2.jpg', 'assets/mock1.jpg'], 'Lenovo', ['Space Black', 'Space Gray', 'Space Green', 'Space Blue'], 'Una laptop negra es elegante y moderna, con un diseño minimalista y profesional. La carcasa, el teclado y la pantalla son de color negro, ofreciendo un aspecto sofisticado. Es funcional y fácil de usar, ideal para cualquier situación.');
// const prod3 = new Product("MacbookP", "Laptop MSI", 750, 11, '50% Off', ['assets/laptop-2.png'], 'Mac', ['Space Gray'], 'El MacBook Pro de 15.4" es una computadora portátil premium de Apple, conocida por su potencia, pantalla de alta resolución y diseño delgado. Ideal para profesionales creativos y usuarios exigentes.');
// const prod4 = new Product("Macboo", "MacBook Air", 750, 14, '50% Off', ['assets/mock1.jpg'], 'Mac', ['Space Gray'], 'El MacBook Pro de 15.4" es una computadora portátil premium de Apple, conocida por su potencia, pantalla de alta resolución y diseño delgado. Ideal para profesionales creativos y usuarios exigentes.');
// const prod5 = new Product("MacbookPr", "Macbook Pro 15'4", 750, 10, '50% Off', ['assets/mock1.jpg'], 'Mac', ['Space Gray'], 'El MacBook Pro de 15.4" es una computadora portátil premium de Apple, conocida por su potencia, pantalla de alta resolución y diseño delgado. Ideal para profesionales creativos y usuarios exigentes.');
// const prod6 = new Product("Macbo", "Macbook Pro 15'4", 750, 15, '50% Off', ['assets/mock1.jpg'], 'Mac', ['Space Gray'], 'El MacBook Pro de 15.4" es una computadora portátil premium de Apple, conocida por su potencia, pantalla de alta resolución y diseño delgado. Ideal para profesionales creativos y usuarios exigentes.');
// export const products = [prod1, prod2, prod3, prod4, prod5, prod6];
// export { Product };

// console.log(products);
// console.log(products[1]);
// console.log(products[products.length - 1].title);


// products.unshift(prod5)
// products.push(prod6)
// console.log(products)

// products.shift()
// products.pop()
// console.log(products)

// prod1.addImage('Leche2.jpg')
// prod1.addImage('Leche3.jpg')
// prod2.addImage('Pan2.jpg')
// prod2.addImage('Pan3.jpg')
// prod3.addImage('Huevos2.jpg')
// prod4.addImage('Queso2')
// console.log(products)

// const producto1 = {
//     nombre: "celular",
//     precio: 100000,
//     stock: 2
//     };
//     producto1.id = "id123";
//     producto1["foto"] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";

//     console.log(producto1)
//     console.log(producto1.nombre)





// const prod1 = new Product();
// console.log(prod1)

// const prod2 = new Product('J00T', 'galletas', 1.50)
// console.log(prod2)

// const prod3 = new Product('Y0K00l', 'papitas', 2.00, 5, ['imagen.jpg'], true)
// console.log(prod3)

// console.log('buscando ' +prod2.title, 'se encontraron: ' +prod3.onsale)

// const prod4 = new Product('C0J0', 'frugos', 2.30, 3, ['imagen2.jpg'], true, 'proveedorX')
// console.log(prod4)

// prod4.setSupplier = 'ProveedorZ'
// console.log(prod4)

// const prod5 = new Product('H00P', 'gaseosa', 1.75, 12, ['imageProduct.jpg'], true, 'proveedorNewX')
// prod5.sellUnits(10);
// prod5.sellUnits(5);
// console.log(prod5)