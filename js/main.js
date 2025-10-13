import { getAccessToken, displayPets, loadFooter, loadHeader} from "./utils.js";
import { showDetails } from "./details.js";

// async function loadPets() {
//     const token = await getAccesToken();

//     const res = await fetch("https://api.petfinder.com/v2/animals?type=dog", {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     });

//     const data = await res.json();
//     console.log(data); // por ahora solo vemos qué llega
//     displayPets();
    
// }
async function loadPets() {
    try {
        const token = await getAccessToken();

        const res = await fetch("https://api.petfinder.com/v2/animals", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const data = await res.json();
        displayPets(data); // viene de data utils.js
    } catch (error) {
        console.error("Error cargando mascotas:", error);
    }
}

// document.addEventListener("DOMContentLoaded", loadPets);

async function sortPets(filter = "") {
  try {
    const token = await getAccessToken();

    
    const url = `https://api.petfinder.com/v2/animals?${filter}`;
     
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    displayPets(data); 
  } catch (error) {
    console.error("Error cargando mascotas:", error);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  loadPets();
  const filterSelect = document.getElementById("sort");

  filterSelect.addEventListener("change", (event) => {
    const value = event.target.value;

    // Construir el filtro para cada categoria
    let filter = "";
    if (value === "Dogs") filter = "type=dog";
    else if (value === "Cats") filter = "type=cat";
    else if (value === "Male") filter = "gender=male";
    else if (value === "Female") filter = "gender=female";
    else if (value === "Baby") filter = "age=baby";
    else if (value === "Adult") filter = "age=adult";

    
    sortPets(filter);
  });
});


document.addEventListener("DOMContentLoaded", () => {
    loadFooter();
});
document.addEventListener("DOMContentLoaded", () => {
    loadHeader();
});