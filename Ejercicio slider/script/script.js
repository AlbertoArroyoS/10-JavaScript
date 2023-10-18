//variables
let contadorImg;
let imgTotales;
let botonAvanzar;
let botonRetroceder;
let imagen;
let radioSeleccion;

function initVariables(){

    contadorImg=1;
    //imagenes totales que vamos a tener en el documento 4
    imgTotales=4;
    botonAvanzar = document.getElementById("siguiente-img");
    botonRetroceder = document.getElementById("anterior-img");
    imagen = document.getElementById("imagen")
    radioSeleccion = document.getElementsByName("radio-img");

}


//Al hacer un click aumenta en 1 el contador de la imagen y si es la ultima imagen vuelve a la primera
function listeners(){

    botonAvanzar.addEventListener('click', () => {

        if (contadorImg==imgTotales){
            contadorImg =1;
        }else{
            contadorImg ++;
        }
        cambiarImagen(contadorImg);
        marcarRadio(contadorImg);      
    });

    botonRetroceder.addEventListener('click', () => {

        if (contadorImg==1){
            contadorImg = imgTotales;
        }else{
            contadorImg --;
        }
        cambiarImagen(contadorImg);
        marcarRadio(contadorImg);    
    });


    botonAvanzar.addEventListener("mouseenter",()=>{
		botonAvanzar.style.cursor = "pointer";
		botonAvanzar.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
     

	});
	//al salir el raton se vuelve negro
	botonAvanzar.addEventListener("mouseout",()=>{
		botonAvanzar.style.backgroundColor = "transparent";
	});

    botonRetroceder.addEventListener("mouseenter",()=>{
		botonRetroceder.style.cursor = "pointer";
		botonRetroceder.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
     

	});
	//al salir el raton se vuelve negro
	botonRetroceder.addEventListener("mouseout",()=>{
		botonRetroceder.style.backgroundColor = "transparent";
	});

}
//funcion en la que segun el numero entrado por parametro cambia el nombre de la imagen

function cambiarImagen(numero){

    imagen.src="/img/img-0"+numero+".jpg";

}

//funcion marcar el radio button segun la imagen que sea al pasar de imagen, como va por posicion,
// y la posicion empieza por 0, pero la imagen en 1, habra que restar 1

function marcarRadio(numero){
    radioSeleccion[numero-1].checked = true;
}



window.addEventListener("load",()=>{

    initVariables();
	listeners();
  //  radioSeleccion[numero].checked

});