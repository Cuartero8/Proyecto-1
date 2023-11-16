let whoGame = (estudiantes) => {
  for (let i = 0; i <= estudiantes.length - 1; i++) {
    let list = estudiantes[i];

    if (list.favoriteVideoGame === "LOL") {
      console.log(list.name, "juega LOL");
    } else if (list.favoriteVideoGame === "League Of Legends") {
      console.log(list.name, "League Of Legends");
    } 
  }
}; whoGame(estudiantes)
