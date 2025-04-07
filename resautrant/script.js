// Beispielhafte Menü-Daten (simuliert)
const menuData = [
  {
    name: "Foie Gras Maison",
    description: "Serviert mit Feigenkonfitüre",
    price: "28€",
    image: "../images/foie_gras.jpg"
  },
  {
    name: "Filet de Bœuf Rossini",
    description: "Mit Trüffeln und Rotweinsauce",
    price: "42€",
    image: "../images/filet_de_boeuf_rossini-1.jpeg"
  },
  {
    name: "Homard Thermidor",
    description: "Im Ofen gratiniert mit cremiger Sauce",
    price: "38€",
    image: "../images/homard_thermidor.jpg"
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
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Vielen Dank für Ihre Reservierung! Wir werden Sie bald kontaktieren.");
      form.reset();
    });
  }
});
