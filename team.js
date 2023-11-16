let estudiantes = [
{
    name: "paul",
    surname: "castillo",
    age: 25,
    city: "madrid",
    hobby: "futbol",
    favoriteFood: "pasta",
    favoriteVideoGame: "fifa",
    favoriteFilm: "",
    favoriteBook: "",
    petName: ""
},
{
    name: "monica", surname: "guerra", age:30, city: "Tarragona", hobby: "leer", favoriteFood: "sushi", favoriteVideoGame: "",
    favoriteFilm: "", favoriteBook: "", petName: "",
},
{   
    name: "Carlos", surname: "Cuartero", age: 26, city: "Zaragoza", hobby: ["Futsal", "Mangaku", "Videojuegos", "Fiestuki"], 
    favoriteFood: "Pizza", favoriteVideoGame: "Fire Emblem", favoriteFilm: "LoR", favoriteBook: "Soy analfabeto", petName: "Cuquin"
},
{   name: "Christian",
    surname: "Hernandez",
    age: 25,
    city: "Vitoria-Gasteiz",
    hobby: "Videojuegos",
    favoriteFood: "Lasagna",
    favoriteVideoGame: "Pokemon",
    favoriteFilm: "Harry Potter",
    favoriteBook: "Harry Potter",
    petName: ""
},
{
    name: "Francisco Javier",
    surname: "Martinez Rodriguez",
    age: 27,
    city: "Badajoz",
    hobby: "Videogames",
    favoriteFood: "Kebab",
    favoriteVideoGame: "Risk of Rain 2",
    favoriteFilm: "Better call Saul",
    favoriteBook: "Vigilantes",
    petName: ""
},
];

function ordenarEstudiantes() {     // Función para ordenar los estudiantes

    let listaOrdenada = estudiantes.sort(function (a, b) {      // Método para ordenar por apellido y nombre
        if (a.surname.toLowerCase() > b.surname.toLowerCase()) {
            return 1;
        } else if (a.surname.toLowerCase() < b.surname.toLowerCase()) {
            return -1;
        } else if (a.surname.toLowerCase() === b.surname.toLowerCase()) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
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
    };
};

ordenarEstudiantes();