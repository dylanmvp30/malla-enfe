const ramos = [
  { id: "DBIO1011", nombre: "Biología Celular" },
  { id: "DBIO1012", nombre: "Lab. Biología Celular", prereq: ["DBIO1011"] },
  { id: "DQUI1013", nombre: "Química General y Orgánica" },
  { id: "DQUI1015", nombre: "Lab. Química General y Orgánica", prereq: ["DQUI1013"] },
  { id: "DBIO1050", nombre: "Anatomía Humana" },
  { id: "DBIO1051", nombre: "Lab. Anatomía Humana", prereq: ["DBIO1050"] },
  { id: "ENFE0009", nombre: "Psicología del Desarrollo y Aprendizaje" },
  { id: "ENFE0003", nombre: "Bases Conceptuales de la Gestión del Cuidado" },
  { id: "INTEGRAL1", nombre: "Formación Integral I" },
  { id: "DBIO1037", nombre: "Bioquímica General", prereq: ["DBIO1011"] },
  { id: "DBIO1038", nombre: "Lab. Bioquímica General", prereq: ["DBIO1037"] },
  { id: "DBIO1034", nombre: "Histología General" },
  { id: "DBIO1036", nombre: "Lab. Histología General", prereq: ["DBIO1034"] },
  { id: "DBIO1027", nombre: "Fisiología Humana" },
  { id: "DBIO1028", nombre: "Lab. Fisiología Humana", prereq: ["DBIO1027"] },
  { id: "ENFE0022", nombre: "Socioantropología en Salud" },
  { id: "ENFE0008", nombre: "Primeros Auxilios" },
  { id: "INTEGRAL2", nombre: "Formación Integral II" },
  { id: "DBIO1044", nombre: "Farmacología General" },
  { id: "DBIO1045", nombre: "Farmacología Aplicada", prereq: ["DBIO1044"] },
  { id: "ENFE0012", nombre: "Fisiopatología" },
  { id: "DBIO1019", nombre: "Microbiología General" },
  { id: "DBIO1020", nombre: "Lab. Microbiología General", prereq: ["DBIO1019"] },
  { id: "ENFE0013", nombre: "Enfermería en el Ciclo Vital" },
  { id: "ENFE0060", nombre: "Educación en Salud" },
  { id: "ENFE0014", nombre: "Epidemiología" },
  { id: "ENFE0016", nombre: "Metodologías de Enseñanza en Salud" },
  { id: "ENFE0077", nombre: "Gestión del Cuidado en la Persona" },
  { id: "ENFE0018", nombre: "Comunicación e Interacción Humana" },
  { id: "ENFE0015", nombre: "Enfermería en Salud Comunitaria I" },
  { id: "INTEGRAL3", nombre: "Formación Integral III" },
  { id: "ENFE0019", nombre: "Gestión del Cuidado en el Adulto" },
  { id: "ENFE0024", nombre: "Administración en Enfermería" },
  { id: "ENFE0020", nombre: "Enfermería en Salud Mental" },
  { id: "ENFE0025", nombre: "Gestión del Cuidado Adulto Mayor" },
  { id: "ENFE0061", nombre: "Gestión en Servicios Clínicos" },
  { id: "ENFE0026", nombre: "Gestión Mujer y RN" },
  { id: "ENFE0027", nombre: "Alteraciones en Salud Mental" },
  { id: "ENFE0023", nombre: "Bioestadística" },
  { id: "INTEGRAL4", nombre: "Formación Integral IV" },
  { id: "ENFE0029", nombre: "Enfermería en Urgencia" },
  { id: "ENFE0030", nombre: "Gestión en Niño y Niña" },
  { id: "ENFE0031", nombre: "Ética en Enfermería" },
  { id: "ENFE0028", nombre: "Investigación I" },
  { id: "ELE0001", nombre: "Electivo Profesional" },
  { id: "ENFE0034", nombre: "Gestión en Servicios de Urgencia" },
  { id: "ENFE0035", nombre: "Gestión en el Adolescente" },
  { id: "ENFE0032", nombre: "Salud Comunitaria II" },
  { id: "ENFE0033", nombre: "Investigación II" },
  { id: "INTRA", nombre: "Internado Intra" },
  { id: "EXTRA", nombre: "Internado Extra" }
];

const aprobados = new Set();

function renderRamos() {
  const container = document.getElementById("grid-container");
  container.innerHTML = "";

  ramos.forEach(ramo => {
    const button = document.createElement("button");
    button.classList.add("ramo");
    button.textContent = ramo.nombre;
    button.id = ramo.id;

    const requisitos = ramo.prereq || [];

    if (requisitos.every(req => aprobados.has(req))) {
      button.classList.add("active");
      button.disabled = false;
    } else {
      button.disabled = true;
    }

    if (aprobados.has(ramo.id)) {
      button.classList.add("approved");
    }

    button.addEventListener("click", () => {
      if (aprobados.has(ramo.id)) {
        aprobados.delete(ramo.id);
      } else {
        aprobados.add(ramo.id);
      }
      renderRamos();
    });

    container.appendChild(button);
  });
}

document.addEventListener("DOMContentLoaded", renderRamos);
