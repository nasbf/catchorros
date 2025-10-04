export function showDetails(card, animal) {
    //const details = document.getElementById("petDetails");
    card.innerHTML = `
    <h2>${animal.name}</h2>
    <p><strong>Especie:</strong> ${animal.species}</p>
        <p><strong>Raza:</strong> ${animal.breeds.primary}</p>
        <img src="${animal.photos[0] ? animal.photos[0].medium : "https://via.placeholder.com/300x300"}" 
             alt="${animal.name}">

        <h3>Refugio</h3>
        <p>${animal.contact.address.city}, ${animal.contact.address.state}</p>

        <iframe
        width="400"
        height="300"
        style="border:0"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyASQYdlOVmx1U6q9eZdsOjTeRblppIMrgE&q=${animal.contact.address.city},${animal.contact.address.state}">
        </iframe>
    `;
}

