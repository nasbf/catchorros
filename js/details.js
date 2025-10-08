export function showDetails(card, animal) {
    //const details = document.getElementById("petDetails");
    const imageUrl = animal.photos && animal.photos.length > 0 ? animal.photos[0].small : " ";

    card.innerHTML = `
    <h2>${animal.name}</h2>
    <p><strong>Specie:</strong> ${animal.species}</p>
        <p><strong>Breed:</strong> ${animal.breeds.primary}</p>
        <p><strong>Age:</strong> ${animal.age}</p>
        <p><strong>Gender:</strong> ${animal.gender}</p>
        <p><strong>Tags:</strong></p> ${animal.tags.slice(0, 2).join(", ")}
        <hr>
        <img src="${imageUrl}"
             alt="${animal.name}">
        
        <button class="button">Adopt</button>
        
        <h3>Shelter</h3>
        <p>${animal.contact.address.city}, ${animal.contact.address.state}</p>

        <iframe
        width="100%"
        height="300"
        border: solid, 2px;
        style="border:10"
        
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyASQYdlOVmx1U6q9eZdsOjTeRblppIMrgE&q=${animal.contact.address.city},${animal.contact.address.state}">
        </iframe>
    `;
    const adoptButton = card.querySelector(".button");
    adoptButton.addEventListener("click", () => {
        localStorage.setItem("selectedPet", JSON.stringify(animal));
        
        window.location.href = "form.html";
    });


}

