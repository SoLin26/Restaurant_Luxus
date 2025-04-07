// Exemple de données simulées pour le menu
const menuData = [
  {
    name: "Foie Gras Maison",
    description: "Servi avec confiture de figues",
    price: "28€",
    image: "../images/foie_gras.jpg"

  },
  {
    name: "Filet de Bœuf Rossini",
    description: "Truffes et sauce au vin rouge",
    price: "42€",
    image: "../images/filet de bœuf rossini-1.jpeg"
  },
  {
    name: "Homard Thermidor",
    description: "Gratiné au four avec sa sauce crémeuse",
    price: "38€",
    image: "../images/Homard Thermidor.jpg"
  }
];

window.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.getElementById("menu-items");

  menuData.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("menu-item");
    div.innerHTML = `
      <div class="img-wrapper">
        <img src="${item.image}" alt="${item.name}" class="menu-img" />
      </div>
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <strong>${item.price}</strong>
    `;
    menuContainer.appendChild(div);
  });

  const form = document.getElementById("res-form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Merci pour votre réservation ! Nous vous contacterons bientôt.");
    form.reset();
  });
});
