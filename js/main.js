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
        displayPets(data); // aquí pasamos la data al utils
    } catch (error) {
        console.error("Error cargando mascotas:", error);
    }
}

document.addEventListener("DOMContentLoaded", loadPets);
document.addEventListener("DOMContentLoaded", () => {
    loadFooter();
});
document.addEventListener("DOMContentLoaded", () => {
    loadHeader();
});