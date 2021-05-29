/*
    ===== Código de TypeScript =====
*/

class PersonalNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ) {
    }
}

class Heroe extends PersonalNormal{
    //public alterEgo: string; // solo se puede ver en la clase
    //public edad: number; // se puede ver fuera de clase
    //public nombreReal: string; // se puede acceder sin una instancia de clase

    // constructor se inicializa cuando se crea la instancia
    constructor(
        public alterEgo: string,
        public edad: number, 
        public nombreReal: string, 
        ) {
        super( nombreReal, 'New York' );
        //console.log("hey!");
        //this.alterEgo = alterEgo;
    }

}

const ironman = new Heroe('Ironman', 45, 'Tony Stark');

console.log(ironman);
