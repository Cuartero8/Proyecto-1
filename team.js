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
    favoriteBook: "Harry Potter"},

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
  }]


function ordenarEstudiantes() {     

    let listaOrdenada = estudiantes.sort(function (a, b) { 
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

    for (i in listaOrdenada) {      
        console.log(`${listaOrdenada[i].name} ${listaOrdenada[i].surname}:`);
        for (k in listaOrdenada[i]) {
            process.stdout.write(`${k}: ${listaOrdenada[i][k]} `);
        }
        console.log();
    };
};
ordenarEstudiantes();


function middleAge() {
  let aux = [...estudiantes];
  aux.sort((a, b) => a.age - b.age);
  let i = Math.floor(aux.length/2);
  console.log("The person with the middle age is " + aux[i].name + ", who is " + aux[i].age + " years old.");
}

middleAge();


let whoHasAPet = (estudiantes) => {
  for(let i=0; i<=estudiantes.length-1; i++){
  let list = (estudiantes[i])
  
  if (list.petName != "" ){
    console.log(list.name, ("tiene mascota"));
  }}
}

whoHasAPet(estudiantes);
