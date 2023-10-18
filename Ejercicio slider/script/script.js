//variables
let contadorImg;
let imgTotales;
let botonAvanzar;
let botonRetroceder;
let imagen;

function initVariables(){

    contadorImg=1;
    //imagenes totales que vamos a tener en el documento 4
    imgTotales=4;
    botonAvanzar = document.getElementById("siguiente-img");
    botonRetroceder = document.getElementById("anterior-img");
    imagen = document.getElementById("imagen")

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
    });

    botonRetroceder.addEventListener('click', () => {

        if (contadorImg==1){
            contadorImg = imgTotales;
        }else{
            contadorImg --;
        }
        cambiarImagen(contadorImg);     
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

function cambiarImagen(numero){

    imagen.src="/img/img-0"+numero+".jpg";

}



window.addEventListener("load",()=>{

    initVariables();
	listeners();

});