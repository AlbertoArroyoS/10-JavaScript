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

    botonAvanzar.addEventListener('click', () => {
        //Cuando llega a la ultima foto (imagenes totales), la siguiente vez que se pulsa se pone la 1
        if (contadorImg==imgTotales){
            contadorImg =1;
        }else{
            contadorImg ++;
        }
        cambiarImagen(contadorImg);
        marcarRadio(contadorImg);      
    });

    botonRetroceder.addEventListener('click', () => {
        //Si estamos en la primera foto, al darle atras se pone la ultima foto
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
		botonAvanzar.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
     

	});
	//al salir el raton se vuelve negro
	botonAvanzar.addEventListener("mouseout",()=>{
		botonAvanzar.style.backgroundColor = "transparent";
	});

    botonRetroceder.addEventListener("mouseenter",()=>{
		botonRetroceder.style.cursor = "pointer";
		botonRetroceder.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
     

	});
	//al salir el raton se vuelve negro
	botonRetroceder.addEventListener("mouseout",()=>{
		botonRetroceder.style.backgroundColor = "transparent";
	});

    //al pulsar botones radio cambia la imagen y pone el contador de la imagen en el numero correspondiente
    opcion1.addEventListener('click', () => {
        contadorImg = 1;
        cambiarImagen(contadorImg);
           
    });
    opcion2.addEventListener('click', () => {
        contadorImg = 2;
        cambiarImagen(contadorImg);    
     });
     opcion3.addEventListener('click', () => {
        contadorImg = 3;
        cambiarImagen(contadorImg);    
     });
     opcion4.addEventListener('click', () => {
        contadorImg = 4;
        cambiarImagen(contadorImg);    
     });

     //al pasar por los radio que se cambie el cursor

    opcion1.addEventListener("mouseenter",()=>{
		opcion1.style.cursor = "pointer";
	});
    opcion2.addEventListener("mouseenter",()=>{
		opcion2.style.cursor = "pointer";
	});
    opcion3.addEventListener("mouseenter",()=>{
		opcion3.style.cursor = "pointer";
	});
    opcion4.addEventListener("mouseenter",()=>{
		opcion4.style.cursor = "pointer";
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