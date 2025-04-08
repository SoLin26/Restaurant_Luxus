// Menü-Daten
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
    image: "../images/homard-thermidor-version-allege.jpeg"
  }
];

// Alles starten, wenn DOM geladen ist
window.addEventListener("DOMContentLoaded", () => {
  // Menü anzeigen (optional, falls du später noch ein spezielles Menü anzeigst)
  const menuContainer = document.getElementById("menu-items");
  if (menuContainer) {
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
  }

  // Formular verarbeiten
  const form = document.getElementById("res-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Merci pour votre réservation ! Nous vous contacterons bientôt.");
      form.reset();
    });
  }

  // Swiper aktivieren
  const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    breakpoints: {
      600: { slidesPerView: 2 },
      900: { slidesPerView: 3 }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
});
