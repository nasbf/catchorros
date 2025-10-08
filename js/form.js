import { loadFooter, loadHeader, displayPets, getAccessToken } from "./utils.js";


document.addEventListener("DOMContentLoaded", () => {
  loadFooter();
});
document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
});

document.addEventListener("DOMContentLoaded", () => {
  const storedAnimal = localStorage.getItem("selectedPet");

  if (storedAnimal) {
    const animal = JSON.parse(storedAnimal);

    // Muestra los datos del animal seleccionado
    const animalInfo = document.getElementById("resume");
    if (animalInfo) {
      animalInfo.innerHTML = `
      <input class = "submit" type="submit" value="Adopting ${animal.name} ❤">`;
    }
    const animalImg = document.getElementById("petChoiced");
    const imageUrl = animal.photos && animal.photos.length > 0 ? animal.photos[0].small : " ";
    if (animalImg) {
      animalImg.innerHTML = `
        <h2>Bring ${animal.name} Home</h2>
        <img src="${imageUrl}"
             alt="${animal.name}">
        
        <p><strong>Species:</strong> ${animal.species}</p>
        <p><strong>Age:</strong> ${animal.age}</p>
        <p><strong>Breed:</strong> ${animal.breeds.primary}</p>
        <p><strong>Gender:</strong> ${animal.gender}</p>
        <p><strong>Tags:</strong></p> ${animal.tags.slice(0, 2).join(", ")}
      `;
    }
  }
});
