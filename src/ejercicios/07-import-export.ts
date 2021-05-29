/*
    ===== Código de TypeScript =====
*/

//import { Producto, calculaISV } from "./ejercicios/06-desestructuracion-funcion";
import { Producto, calculaISV } from "./06-desestructuracion-funcion";


// el producto se importa desde 06-desestructuracion-funcion.ts
const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    },
];

const [total, isv] = calculaISV(carritoCompras);

console.log("total: ", total);
console.log("isv: ", isv);


