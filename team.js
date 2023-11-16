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
      favoriteVideoGame: "LOL",
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
    }]
  
  
    let whoHasAPet = (estudiantes) => {
          for(let i=0; i<=estudiantes.length-1; i++){
          let list = (estudiantes[i])
          
          if (list.petName != "" ){
            console.log(list.name, ("tiene mascota"));
          }}
        }
        
        whoHasAPet(estudiantes);

function orderByAge(){
  let estudiantesCopy=[...estudiantes];
  estudiantesCopy.sort((a,b)=>(a.age-b.age));
  estudiantesCopy.forEach((e)=>console.log(`${e.name} ${e.age}`));
}
