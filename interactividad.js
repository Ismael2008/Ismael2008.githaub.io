// Cambiar Tema (claro/oscuro)
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        themeToggle.textContent = 'Cambiar a Tema Claro';
    } else {
        themeToggle.textContent = 'Cambiar a Tema Oscuro';
    }
});



// Mostrar/Ocultar lista de Servicios
const toggleServices = document.getElementById('toggle-services');
const servicesList = document.getElementById('services-list');

toggleServices.addEventListener('click', () => {
    if (servicesList.style.display === 'none') {
        servicesList.style.display = 'block';
        toggleServices.textContent = 'Ocultar Servicios';
    } else {
        servicesList.style.display = 'none';
        toggleServices.textContent = 'Mostrar Servicios';
    }
});

document.getElementById("menu-button").addEventListener("click", function() {
    var dropdown = document.getElementById("dropdown-menu");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block"; // Muestra el menú
    } else {
        dropdown.style.display = "none"; // Oculta el menú
    }
});

