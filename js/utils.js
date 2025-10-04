import { showDetails } from "./details.js";


const apiKey = "YesIkkSGHinfNBaIwwMmyRad9G7hYca4QYo0L194qlBAI7V56W";
const apiSecret = "muZVDdT4z31Y4XxwDdRQiS24k8qDAZJnkn4YilM2";

export async function getAccessToken() {
    const url = "https://api.petfinder.com/v2/oauth2/token";
    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${apiSecret}`
    });

    const data = await res.json();
    return data.access_token; // devolvemos el token
}
     
    export function displayPets (data){
        const container = document.getElementById("optionsPets");
        container.innerHTML = "";

        data.animals.forEach(animal => {
            const petCard = document.createElement("div");
            petCard.classList.add("pet-card");

            petCard.innerHTML = `
            <h3>${animal.name}</h3>
            <p>${animal.breeds.primary}</p>
            <p>${animal.type}</p>
    
            `;

        petCard.addEventListener("click", () => {
            showDetails(petCard, animal);
        });

        container.appendChild(petCard);
    });

  

    
}





