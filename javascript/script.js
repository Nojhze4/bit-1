"use strict"


// script.js

// Este script maneja el formulario de contacto, validando los campos y enviando los datos al servidor.
document.addEventListener('DOMContentLoaded', () => {
const contactForm = document.getElementById('contactForm');

const handleSubmit = (event) => {
event.preventDefault();

const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const message = document.getElementById('message').value.trim();
if (validateForm(name, email, message)) {
console.log('Enviando los datos:');
console.log({ name, email, message });
contactForm.reset();
alert('Gracias por tu mensaje, nos pondremos en contacto pronto.');
} else {
alert('Por favor, completa todos los campos correctamente.');
}
};

const validateForm = (name, email, message) => {
const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/
return name !== '' && emailRegex.test(email) && message !== '';
};

contactForm.addEventListener('submit', handleSubmit);
})

// conectar a json-server

// ...existing code...

// Mostrar consolas desde consolas.json
async function mostrarConsolas() {
  const container = document.getElementById('consolas-container');
  if (!container) return;

  try {
    const response = await fetch('./json/consolas.json');
    const consolas = await response.json();

    container.innerHTML = consolas.map(consola => `
      <div class="col-md-3 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">${consola.nombre}</h5>
            <p class="card-text">${consola.descripcion}</p>
            <p class="card-text fw-bold text-success">$${consola.precio.toLocaleString('es-CO')}</p>
          </div>
        </div>
      </div>
    `).join('');
  } catch (error) {
    container.innerHTML = '<p>Error al cargar las consolas.</p>';
  }
}

document.addEventListener('DOMContentLoaded', mostrarConsolas);


// Mostrar consolas PlayStation desde consolas.json
async function mostrarPSAccesorios() {
  const container = document.getElementById('ps-accesorios-container');
  if (!container) return;

  try {
    const response = await fetch('./json/accesorios.json');
    const accesorios = await response.json();
    // Filtrar solo PlayStation
    const psAccesorios = accesorios.filter(a => a.categoria === "PlayStation");

    container.innerHTML = psAccesorios.map(accesorio => {
      // Simulación de disponibilidad: disponible si el precio es mayor a 0
      const disponible = accesorio.precio > 0 ? "Disponible" : "Agotado";
      const disponibilidadClass = accesorio.precio > 0 ? "text-success" : "text-danger";
      return `
      <div class="col-md-4 mb-4">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="${accesorio.imagen}" class="card-img-top" alt="${accesorio.nombre}" height="372px">
              <div class="card-body">
                <h5 class="card-title">${accesorio.nombre}</h5>
                <p class="card-text fw-bold text-success">$${accesorio.precio.toLocaleString('es-CO')}</p>
                <p class="card-text ${disponibilidadClass}">${disponible}</p>
              </div>
            </div>
            <div class="flip-card-back">
              <div class="card-body">
                <h5 class="card-title">${accesorio.nombre}</h5>
                <p class="card-text">${accesorio.descripcion}</p>
                <p class="card-text fw-bold text-success">$${accesorio.precio.toLocaleString('es-CO')}</p>
                <p class="card-text ${disponibilidadClass}">${disponible}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
    }).join('');
  } catch (error) {
    container.innerHTML = '<p>Error al cargar los accesorios PlayStation.</p>';
  }
}
// Ejecutar funciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  mostrarPSAccesorios();
});

// Nueva sección para PS4
<div class="container my-5">
  <h2>PlayStation 4</h2>
  <div id="ps4-container" class="row"></div>
</div>

async function mostrarPS4() {
  const container = document.getElementById('ps4-container');
  if (!container) return;

  try {
    const response = await fetch('./json/consolas.json');
    const consolas = await response.json();
    // Filtrar solo PlayStation 4
    const ps4 = consolas.filter(c => c.nombre === "PlayStation 4");

    container.innerHTML = ps4.map(consola => {
      // Simulación de disponibilidad: disponible si el precio es mayor a 0
      const disponible = consola.precio > 0 ? "Disponible" : "Agotado";
      const disponibilidadClass = consola.precio > 0 ? "text-success" : "text-danger";
      return `
      <div class="col-md-4 mb-4">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="${consola.imagen}" class="card-img-top" alt="${consola.nombre}" height="372px">
              <div class="card-body">
                <h5 class="card-title">${consola.nombre}</h5>
                <p class="card-text fw-bold text-success">$${consola.precio.toLocaleString('es-CO')}</p>
                <p class="card-text ${disponibilidadClass}">${disponible}</p>
              </div>
            </div>
            <div class="flip-card-back">
              <div class="card-body">
                <h5 class="card-title">${consola.nombre}</h5>
                <p class="card-text">${consola.descripcion}</p>
                <p class="card-text fw-bold text-success">$${consola.precio.toLocaleString('es-CO')}</p>
                <p class="card-text ${disponibilidadClass}">${disponible}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
    }).join('');
  } catch (error) {
    container.innerHTML = '<p>Error al cargar la PlayStation 4.</p>';
  }
}

document.addEventListener('DOMContentLoaded', mostrarPS4);