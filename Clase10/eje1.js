//Ejercicio de manejo del objeto
let product = {
    name: 'headphones',
    price: 120,
    doesItWork: false,
    previousOwner: 'Bob'
};
  
//Imprimimos los datos del objeto
for (let key in product) {
console.log(`${key}: ${product[key]}`)
}

//Eliminamos el previousOwner
delete product.previousOwner;

//Añadimos doesitWork con el valor True
product.doesItWork = true;

//Chequea si el precio del producto es mayor que 100. Si es así se descuenta un 10% y se añade.
if (product.price > 100) {
product.discountPercentage = 10;
}
//Descontamos el porcentaje y actualizamos
product.price -= product.price * (product.discountPercentage / 100)

//Revisa que esté el descuento en el objeto y nos lo printea el objeto que tiene el descuento
if ("discountPercentage" in product) {
console.log(`Tenemos el producto ${product.name} en venta, con un precio de ${product.price}, actualmente tiene un descuento de ${product.discountPercentage}%`);
}
