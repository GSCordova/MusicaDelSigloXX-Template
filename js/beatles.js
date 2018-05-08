

var div = document.getElementById('clicko');
var boton = document.getElementById('btn');

let texto = "Grupo británico de música rock y pop, el más admirado y popular de la década de 1960 y uno de los más influyentes en la historia de la música moderna. Si el gran Elvis Presley dominó los años 50 como rey del rock and roll, correspondió a The Beatles, un grupo también rockero en sus raíces, ejercer la hegemonía en la década siguiente con una acertadísima y sofisticada amalgama de estilos que llevaría la música pop a todos los públicos y preludió géneros posteriores"
var cuenta = 0;
boton.addEventListener("click", Pulsado)

function Pulsado () {
  if(cuenta === 0){
    div.insertAdjacentHTML('beforeend', texto)
    cuenta +=1;
  } else {
    console.log("Estás pulsando de más")
  }
}
