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
    surname: "Hernandez",
    age: 25,
    city: "Vitoria-Gasteiz",
    hobby: "Videojuegos",
    favoriteFood: "Lasagna",
    favoriteVideoGame: "Pokemon",
    favoriteFilm: "Harry Potter",
    favoriteBook: "Harry Potter",
    petName: "",
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
    petName: "",
  },
];

function middleAge() {
  let aux = [...estudiantes];
  aux.sort((a, b) => a.age - b.age);
  let i = Math.floor(aux.length/2);
  console.log("The person with the middle age is " + aux[i].name + ", who is " + aux[i].age + " years old.");
}

middleAge();

  const busqueda = estudiantes.reduce((acc, estudiantes) => {
    acc[estudiantes.name] = ++acc[estudiantes.name] || 0;
    return acc;
    }, {}); 
  
    const duplicados = estudiantes.filter( (estudiantes) => {
      return busqueda[estudiantes.name];
    });

let nombreRepetido = (duplicados) => {
    for (let i = 0; i <= duplicados.length - 1; i++) {
        let list = duplicados[i];

    if(estudiantes.indexOf(estudiantes.name)!=-1 && estudiantes.indexOf(estudiantes.name)==-1)
        repetidos.push(estudiantes.name); {
            console.log(list.name, "esta repetido")}
    }};
             nombreRepetido(duplicados); 
