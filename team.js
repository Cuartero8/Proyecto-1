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
<<<<<<< HEAD
    petName: "",
  },
  {
    name: "monica",
    surname: "guerra",
    age: 30,
    city: "Tarragona",
    hobby: "leer",
    favoriteFood: "sushi",
    favoriteVideoGame: "",
    favoriteFilm: "",
    favoriteBook: "",
    petName: "",
  },
  {
    name: "Carlos",
    surname: "Cuartero",
    age: 26,
    city: "Zaragoza",
    hobby: ["Futsal", "Mangaku", "Videojuegos", "Fiestuki"],
    favoriteFood: "Pizza",
    favoriteVideoGame: "Fire Emblem",
    favoriteFilm: "LoR",
    favoriteBook: "Soy analfabeto",
    petName: "Cuquin",
  },
  {
    name: "Christian",
=======
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
>>>>>>> 3231665105103f482068c40eb9191bf5ba69e0fc
    surname: "Hernandez",
    age: 25,
    city: "Vitoria-Gasteiz",
    hobby: "Videojuegos",
    favoriteFood: "Lasagna",
    favoriteVideoGame: "Pokemon",
    favoriteFilm: "Harry Potter",
    favoriteBook: "Harry Potter",
<<<<<<< HEAD
    petName: "",
  },
  {
=======
    petName: ""
},
{
>>>>>>> 3231665105103f482068c40eb9191bf5ba69e0fc
    name: "Francisco Javier",
    surname: "Martinez Rodriguez",
    age: 27,
    city: "Badajoz",
    hobby: "Videogames",
    favoriteFood: "Kebab",
    favoriteVideoGame: "Risk of Rain 2",
    favoriteFilm: "Better call Saul",
    favoriteBook: "Vigilantes",
<<<<<<< HEAD
    petName: "",
  },
];

const busqueda = estudiantes.reduce((acc, estudiantes) => {
  acc[estudiantes.name] = ++acc[estudiantes.name] || 0;
  return acc;
}, {});

const duplicados = estudiantes.filter((estudiantes) => {
  return busqueda[estudiantes.name];
});
=======
    petName: ""
},
];

/* Código de Carlos */
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

/* Código de Fco Javier */
function middleAge() {
  let aux = [...estudiantes];
  aux.sort((a, b) => a.age - b.age);
  let i = Math.floor(aux.length/2);
  console.log("The person with the middle age is " + aux[i].name + ", who is " + aux[i].age + " years old.");
}

middleAge();


/* Código de Monica */
  const busqueda = estudiantes.reduce((acc, estudiantes) => {
    acc[estudiantes.name] = ++acc[estudiantes.name] || 0;
    return acc;
    }, {}); 
  
    const duplicados = estudiantes.filter( (estudiantes) => {
      return busqueda[estudiantes.name];
    });
>>>>>>> 3231665105103f482068c40eb9191bf5ba69e0fc

let nombreRepetido = (duplicados) => {
  for (let i = 0; i <= duplicados.length - 1; i++) {
    let list = duplicados[i];

    if (
      estudiantes.indexOf(estudiantes.name) != -1 &&
      estudiantes.indexOf(estudiantes.name) == -1
    )
      repetidos.push(estudiantes.name);
    {
      console.log(list.name, "esta repetido");
    }
  }
};
nombreRepetido(duplicados);
