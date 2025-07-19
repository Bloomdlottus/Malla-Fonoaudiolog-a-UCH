// script.js

const data = [
  {
    semestre: "I Semestre",
    ramos: [
      { nombre: "Introducción a la Fonoaudiología", prerequisitos: [] },
      { nombre: "Bases teóricas y prácticas de la comunicación humana", prerequisitos: [] },
      { nombre: "Anatomía", prerequisitos: [] },
      { nombre: "Matemáticas", prerequisitos: [] },
      { nombre: "Física", prerequisitos: [] },
      { nombre: "Biología molecular y celular", prerequisitos: [] },
      { nombre: "CFG", prerequisitos: [] },
    ],
  },
  {
    semestre: "II Semestre",
    ramos: [
      { nombre: "Inglés I", prerequisitos: [] },
      { nombre: "Introducción a la salud pública", prerequisitos: ["Introducción a la Fonoaudiología"] },
      { nombre: "Morfología", prerequisitos: ["Biología molecular y celular"] },
      { nombre: "Fisiología I (Célular y neurofisiología)", prerequisitos: ["Biología molecular y celular", "Física"] },
      { nombre: "Física y fonética acústica", prerequisitos: ["Física"] },
      { nombre: "Sociedad, cultura y comunicación", prerequisitos: [] },
      { nombre: "Fonética y fonología españolas", prerequisitos: [] },
    ],
  },
  // Agrega el resto de los semestres de forma similar...
];

const malla = document.getElementById("malla");
const colores = ["#e74c3c", "#3498db", "#27ae60", "#f39c12", "#8e44ad", "#16a085", "#d35400"];
const estadoRamos = {}; // Guarda el estado de cada ramo

function crearMalla() {
  data.forEach((semestre, idx) => {
    const col = document.createElement("div");
    col.className = "semestre";
    const titulo = document.createElement("h3");
    titulo.textContent = semestre.semestre;
    col.appendChild(titulo);

    semestre.ramos.forEach((ramo, i) => {
      const div = document.createElement("div");
      div.className = "ramo locked";
      div.textContent = ramo.nombre;
      div.style.backgroundColor = colores[(i + idx) % colores.length];
      div.onclick = () => toggleRamo(ramo.nombre);
      col.appendChild(div);
      estadoRamos[ramo.nombre] = {
        el: div,
        aprobado: false,
        prerequisitos: ramo.prerequisitos,
      };
    });

    malla.appendChild(col);
  });

  validarEstado();
}

function toggleRamo(nombre) {
  const ramo = estadoRamos[nombre];
  if (ramo.el.classList.contains("locked")) return;
  ramo.aprobado = !ramo.aprobado;
  ramo.el.classList.toggle("done", ramo.aprobado);
  validarEstado();
}

function validarEstado() {
  Object.keys(estadoRamos).forEach((nombre) => {
    const ramo = estadoRamos[nombre];
    const requisitosCumplidos = ramo.prerequisitos.every(
      (req) => estadoRamos[req] && estadoRamos[req].aprobado
    );
    ramo.el.classList.toggle("locked", !requisitosCumplidos);
  });
}

function resetMalla() {
  Object.values(estadoRamos).forEach((ramo) => {
    ramo.aprobado = false;
    ramo.el.classList.remove("done");
  });
  validarEstado();
}

function exportPDF() {
  window.print();
}

crearMalla();
