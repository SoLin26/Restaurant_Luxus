// Beispielhafte Menü-Daten (simuliert)
const menuData = {
  vorspeise: [
    {
      name: "Foie Gras Maison",
      description: "Serviert mit Feigenkonfitüre",
      price: "28€",
      image: "../images/foie_gras.jpg"
    }
  ],
  hauptspeise: [
    {
      name: "Filet de Bœuf Rossini",
      description: "Mit Trüffeln und Rotweinsauce",
      price: "42€",
      image: "../images/filet_de_boeuf_rossini-1.jpeg"
    }
  ],
  nachspeise: [
    {
      name: "Homard Thermidor",
      description: "Im Ofen gratiniert mit cremiger Sauce",
      price: "38€",
      image: "../images/homard_thermidor.jpg"
    }
  ]
};

window.addEventListener("DOMContentLoaded", () => {
  // Funktion zum Anzeigen des Menüs
  window.zeigeMenü = function(menu) {
    // Alle Menüelemente ausblenden
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
      item.style.display = 'none';
      item.innerHTML = ''; // Inhalt zurücksetzen
    });

    // Das ausgewählte Menüelement anzeigen
    const selectedItems = menuData[menu];
    const selectedItemDiv = document.getElementById(menu);
    if (selectedItems && selectedItemDiv) {
      selectedItems.forEach(item => {
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
        selectedItemDiv.appendChild(div);
      });
      selectedItemDiv.style.display = 'block'; // Zeige das ausgewählte Menüelement
    }
  };

  const form = document.getElementById("res-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Vielen Dank für Ihre Reservierung! Wir werden Sie bald kontaktieren.");
      form.reset();
    });
  }
});