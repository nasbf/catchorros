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

export function displayPets(data) {
    const container = document.getElementById("optionsPets");
    container.innerHTML = "";

    data.animals.forEach(animal => {
        const petCard = document.createElement("div");
        petCard.classList.add("pet-card");
        const imageUrl = animal.photos && animal.photos.length > 0 ? animal.photos[0].small : " ";

        petCard.innerHTML = `
            <h3>${animal.name}</h3>
            <p>${animal.breeds.primary}</p>
            <p>${animal.type}</p>
            ${imageUrl ? `<img src="${imageUrl}" alt="${animal.name}">` : ""}`


        petCard.addEventListener("click", () => {
            showDetails(petCard, animal);
            
        });

        container.appendChild(petCard);
    });
}

export async function loadTemplate(path) {
    const res = await fetch(path);
    const template = await res.text();
    return template;
}
export async function loadFooter () {
    const footerTemplate = await loadTemplate("./partials/footer.html");
    const footerElement = document.querySelector(".footer");

    if (footerElement) {
        footerElement.innerHTML = footerTemplate;
    }
        
}
export async function loadHeader () {
    const headerTemplate = await loadTemplate("./partials/header.html");
    const headerElement = document.querySelector(".header");

    if (headerElement) {
        headerElement.innerHTML = headerTemplate;
    }
        
}










