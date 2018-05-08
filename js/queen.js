var div = document.getElementById('clicko');
var boton = document.getElementById('btn');

let texto = "Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Mercury, fallecido en 1991, y Deacon, retirado en 1997), los integrantes restantes, May y Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún es considerada activa"
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
