let estudiantes = [
{
    name: "", surname: "", age: "", city: "",hobby: "", favoriteFood: "", favoriteVideoGame: "",
    favoriteFilm: "", favoriteBook: "", petName: "",
},
  {name: "Carlos", surname: "Cuartero", age: 26, city: "Zaragoza", hobby: ["Futsal", "Mangaku", "Videojuegos", "Fiestuki"], 
                favoriteFood: "Pizza", favoriteVideoGame: "Fire Emblem", favoriteFilm: "LoR", favoriteBook: "Soy analfabeto", petName: "Cuquin"},
  {
    name: "Christian",
    surname: "Hernandez",
    age: 25,
    city: "Vitoria-Gasteiz",
    hobby: "Videojuegos",
    favoriteFood: "Lasagna",
    favoriteVideoGame: "Pokemon",
    favoriteFilm: "Harry Potter",
    favoriteBook: "Harry Potter",
    petName: ""
    }
];

listaOrdenada = estudiantes.sort(function (a, b) {      // Método para ordenar las personas por apellido y nombre
    if (a.surname > b.surname) {
        return 1;
    } else if (a.surname < b.surname) {
        return -1;
    } else if (a.surname === b.surname) {
        if (a.name > b.name) {
            return 1;
        } else if (a.name < b.name) {
            return -1;
        } else { return 0; }
    }
    
    }
);

for (i in listaOrdenada) {      // Bucle para mostrar las personas ordenadas
    console.log(`${listaOrdenada[i].name} ${listaOrdenada[i].surname}:`);
    for (k in listaOrdenada[i]) {
        process.stdout.write(`${k}: ${listaOrdenada[i][k]} `);
    }
    console.log();
}