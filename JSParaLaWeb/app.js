// console.log("Aquí estoy de verdad que si estoy");

// const boton = document.getElementById("btnCalcular");

// const nombre = document.getElementById("nombreUsuario").value;

// const htmlMarcado = document.getElementById("html").checked;

// document.getElementById("resultado").style.display="block"


// boton.addEventListener("click", function(){
//     console.log("Click en el botón");
// })


const tecnologias = ["html", "JS", "SQL", "Java", "GIT"];

tecnologias.forEach(function(id) {
  const checkbox = document.getElementById(id);
  const item = document.getElementById("item-" + id);

  checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
      item?.classList.add("seleccionado");
    } else {
      item?.classList.remove("seleccionado");
    }
  });
});

//& Calcular el puntaje
const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", function() {

  const nombre = document.getElementById("nombreUsuario").value.trim();
  const errorNombre = document.getElementById("errorNombre");

  if (nombre === "") {
    errorNombre.style.display = "block";
    document.getElementById("nombreUsuario").focus();
    return;
  }
  errorNombre.style.display = "none";

  let puntaje = 0;
  tecnologias.forEach(function(id) {
    const checkbox = document.getElementById(id);
    if (checkbox.checked) {
      puntaje += parseInt(checkbox.value);
    }
  });

  let perfil = "";

  if (puntaje === 0) {
    perfil = "¡Todo gran dev empezó desde cero!";
  } else if (puntaje <= 30) {
    perfil = "Dev en construcción — vas muy bien";
  } else if (puntaje <= 60) {
    perfil = "Dev con criterio — el stack te empieza a conocer";
  } else {
    perfil = "Full Stack en formación — el mercado te está buscando";
  }

  //! Mostrando resultado
  document.getElementById("mensajePrincipal").textContent = emoji + " " + nombre + ", tu perfil es:";
  document.getElementById("subMensaje").textContent = perfil;

  const puntajeEl = document.getElementById("puntaje");
  puntajeEl.innerHTML = puntaje + '<span> puntos sobre 100</span>';

  document.getElementById("resultado").style.display = "block";
});

