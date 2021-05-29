/*
    ===== Código de TypeScript =====
*/


interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Fernando1'
}

const pasajero2: Pasajero = {
    nombre: 'Fernando2',
    hijos: ['Fernando 2', 'Fernando 3']
}

function imprimiHijos(pasajero:Pasajero) :void {
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}

console.log(pasajero1);
console.log(pasajero2);

imprimiHijos(pasajero1);
imprimiHijos(pasajero2);
