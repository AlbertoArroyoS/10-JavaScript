//variables
let contadorImg;
let imgTotales;
let botonAvanzar;
let botonRetroceder;
let imagen;
let radioSeleccion;
let opcion1;
let opcion2;
let opcion3;
let opcion4;
//intervalo
let intervaloTiempo;


function initVariables(){

    contadorImg=1;
    //imagenes totales que vamos a tener en el documento 4
    imgTotales=4;
    botonAvanzar = document.getElementById("siguiente-img");
    botonRetroceder = document.getElementById("anterior-img");
    imagen = document.getElementById("imagen")
    radioSeleccion = document.getElementsByName("radio-img");
    opcion1 = document.getElementById("opcion1");
    opcion2 = document.getElementById("opcion2");
    opcion3 = document.getElementById("opcion3");
    opcion4 = document.getElementById("opcion4");
      
}


//Al hacer un click aumenta en 1 el contador de la imagen y si es la ultima imagen vuelve a la primera
function listeners(){
    //al pulsar en > siguiente imagen
    botonAvanzar.addEventListener('click', siguienteImagen);
    //al pulsar en < anterior imagen
    botonRetroceder.addEventListener('click', anteriorImagen);
    //al pasar el puntero por >
    botonAvanzar.addEventListener("mouseenter",()=>{
		botonAvanzar.style.cursor = "pointer";
		botonAvanzar.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
     
	});
	//al salir el raton se vuelve negro
	botonAvanzar.addEventListener("mouseout",()=>{
		botonAvanzar.style.backgroundColor = "transparent";
	});
    //al pasar el puntero por <
    botonRetroceder.addEventListener("mouseenter",()=>{
		botonRetroceder.style.cursor = "pointer";
		botonRetroceder.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    
	});
	//al salir el raton se vuelve negro
	botonRetroceder.addEventListener("mouseout",()=>{
		botonRetroceder.style.backgroundColor = "transparent";
	});

    //al pulsar botones radio cambia la imagen y pone el contador de la imagen en el numero correspondiente
    radioSeleccion[0].addEventListener('click', () => {
        contadorImg = 1;
        cambiarImagen(contadorImg);
        clearInterval(intervaloTiempo);
        iniciarIntervalo();    
    });
    radioSeleccion[1].addEventListener('click', () => {
        contadorImg = 2;
        cambiarImagen(contadorImg);
        clearInterval(intervaloTiempo);
        iniciarIntervalo();     
     });
    radioSeleccion[2].addEventListener('click', () => {
        contadorImg = 3;
        cambiarImagen(contadorImg);
        clearInterval(intervaloTiempo);
        iniciarIntervalo();     
     });
    radioSeleccion[3].addEventListener('click', () => {
        contadorImg = 4;
        cambiarImagen(contadorImg);
        clearInterval(intervaloTiempo);
        iniciarIntervalo();     
     });


    //al pasar por los radio que se cambie el cursor

    radioSeleccion[0].addEventListener("mouseenter",()=>{
		radioSeleccion[0].style.cursor = "pointer";
	});
    radioSeleccion[1].addEventListener("mouseenter",()=>{
		radioSeleccion[1].style.cursor = "pointer";
	});
    radioSeleccion[2].addEventListener("mouseenter",()=>{
		radioSeleccion[2].style.cursor = "pointer";
	});
    radioSeleccion[3].addEventListener("mouseenter",()=>{
		radioSeleccion[3].style.cursor = "pointer";
	});


}
//funcion en la que segun el numero entrado por parametro cambia el nombre de la imagen

function cambiarImagen(numero){

    imagen.src="img/img-0"+numero+".jpg";

}



//funcion para que pasar a la siguiente imagen
//Cuando llega a la ultima foto (imagenes totales), la siguiente vez que se pulsa se pone la 1
function siguienteImagen() {
    if (contadorImg === imgTotales) {
        contadorImg = 1;
    } else {
        contadorImg++;
    }
    cambiarImagen(contadorImg);
    marcarRadio(contadorImg);
}

//funcion para que pasar a la anterior imagen

function anteriorImagen(){
    //Si estamos en la primera foto, al darle atras se pone la ultima foto
    if (contadorImg==1){
        contadorImg = imgTotales;
    }else{
        contadorImg --;
    }
    cambiarImagen(contadorImg);
    marcarRadio(contadorImg);    
}
//funcion hacher check auto el radio button segun la imagen que sea al pasar a otra, como va por posicion,
// y la posicion empieza por 0, pero la imagen en 1 entonces esta en la posicion 0
//los radio button tienen name="radio-img"

function marcarRadio(numero){
    //al numero de imagen le restaremos 1 y nos dara su posicion que ocupa en el array
    //y la posicion que ocupa la pondremos en checked como verdadero
    radioSeleccion[numero-1].checked = true;
}

function iniciarIntervalo() {
    intervaloTiempo = setInterval(siguienteImagen, 3000);
}

//Evento onload
window.addEventListener("load",()=>{

    
    initVariables();
	listeners();
  // Establece el intervalo para cambiar de imagen cada 3 segundos (3000 ms)
    iniciarIntervalo();

});