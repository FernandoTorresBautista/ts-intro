/*
    ===== Código de TypeScript =====
*/

//let habilidades:(boolean|string|number)[] = ['bash', 'counter', 'heailng', 100];
//habilidades.push(1);

let habilidades:string[] = ['bash', 'counter', 'heailng'];

interface Personaje  {
    nombre: string;
    hp:number;
    habilidades: string[];
    puebloNatal?:string;
}

const personaje: Personaje = {
    nombre: "Strider",
    hp: 100, 
    habilidades: ['bash', 'counter', 'heailng']
}

personaje.puebloNatal = 'Pueblo Paleta';

//console.log(personaje);
console.table(personaje);
