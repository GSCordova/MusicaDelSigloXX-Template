var parrafo = document.getElementById('texto');
var boton = document.getElementById('boton');

var cuenta = 0;
boton.addEventListener("click", Pulsado)

function Pulsado () {
  if(cuenta === 0){
    parrafo.insertAdjacentHTML('beforeend', texto)
    cuenta +=1;
  } else {
    console.log("Estás pulsando de más")
  }
}
