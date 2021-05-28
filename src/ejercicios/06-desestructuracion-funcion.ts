/*
    ===== Código de TypeScript =====
*/

interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'iPad A1',
    precio: 350
}

// calculaImpuestoSobreVenta
function calculaISV(productos: Producto[]):[number, number] {
    let total = 0;

    //productos.forEach((producto, i, arr)=>{
    //productos.forEach((producto)=>{
    //    total += producto.precio;
    productos.forEach(({precio})=>{
        total += precio;
    });

    return [total, total * 0.15]; // por el 15%
}

const articulos = [telefono, tableta];
const [total, isv] = calculaISV(articulos);

console.log('Total: ', total);
console.log('Isv: ', isv);
