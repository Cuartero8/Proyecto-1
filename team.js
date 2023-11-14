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

function ordenarPorNombre(estudiantes=[]) {
    let listaNombres = [];

    for (i in estudiantes) {    // Bucle para conseguir los nombres
        listaNombres.push([estudiantes[i].surname, estudiantes[i].name]);
    };

    listaOrdenada = listaNombres.sort();    // Ordeno los nombres
    console.log(listaOrdenada);

    // console.log("Lista de equipo ordenada por Apellido-Nombre:");
    // for (i in listaOrdenada) {   // Bucle para mostrar los nombres ordenados
    //     for (o in estudiantes) {
    //         if ()

    //     }
    // };
};

ordenarPorNombre(estudiantes);