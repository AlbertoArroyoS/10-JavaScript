//declarar de las variables
let nombreArticulo;
let precioArticulo;
let unidades;
let botonAñadir;
let arrayArticulos;
let articulosCarrito;
let precioTotal;
let formaPago;



//inicializar variables en funcion
function initVariables(){
    arrayArticulos = [];
    //arrayArticulos = new Array();
    nombreArticulo=document.getElementById("nombre-articulo");
    precioArticulo=document.getElementById("precio-articulo");
    unidades=document.getElementById("unidades");
    botonAñadir=document.getElementById("añadir-carrito");

}

//funciones
function nombreFuncion(){

}

//funcion añadir articulos al array
function añadirArticulos(){

    nombreArray.push(elementos);
    //nombreArray.unshift(elementos) Añade el elemento del array al principio
}

//Onload con los listeners

window.addEventListener("load",()=>{

    

	//listener empezar partida al darle a aceptar
	botonAñadir.addEventListener('click', () => {

	
		
	});

    nombreCaja.addEventListener("input",()=>{

		
		
	});

	//listener pata que aparezca un promt si pierdes el foco de la caja de texto sin poner el nombre
	nombreCaja.addEventListener("blur",()=>{
	

	});

});