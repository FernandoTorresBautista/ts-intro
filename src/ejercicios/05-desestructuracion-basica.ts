/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor:'Ed Sheeran',
        anio:2015,
    }
}

// 1 solo linea
//const { volumen, segundo, cancion, detalles:{autor} } = reproductor;

// 2 lineas mas legible 
const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

/*console.log("El volumen actual es de: ", volumen);
console.log("El segundo actual es de: ", segundo);
console.log("La cancion actual es de: ", cancion);
console.log("El autor actual es de: ", autor);*/

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks']
console.log('Personaje 1 ', dbz[0]);
console.log('Personaje 2 ', dbz[1]);
console.log('Personaje 3 ', dbz[2]);

// desestructura el arreglo en orden
//const [goku, vegeta, trunks ] = dbz;
const [, , trunks ] = dbz;
//console.log('Personaje 1 ', goku);
//console.log('Personaje 2 ', vegeta);
console.log('Personaje 3 ', trunks);

