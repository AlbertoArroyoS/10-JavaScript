//declarar de las variables
let nombreArticulo;
let precioArticulo;
let unidades;
let botonAñadir;
let arrayArticulos;
let articulosCarrito;
let precioTotal;
let formaPago;

//variables para almacenar datos
let articulo;
let precio;
let cantidad;

//acumuladores
let acumuladorPrecio;
let total;
let precioAnterior;

//mensaje errores
let mensajeErrorNombre;
let mensajeErrorPrecio;

//forma de pago

let cajasTarjeta;
let cajaEfectivo;
let stringFormaPago;


//inicializar variables en funcion
function initVariables(){
    arrayArticulos = [];
    //arrayArticulos = new Array();
    
    nombreArticulo = document.getElementById("nombre-articulo");
    nombreArticulo.focus();
    precioArticulo = document.getElementById("precio-articulo");
    unidades=document.getElementById("unidades");
    botonAñadir=document.getElementById("añadir-carrito");
    articulosCarrito = document.getElementById("total-articulos");
    precioTotal = document.getElementById("precio-total");
    precioTotal.value='0';
    mensajeErrorNombre = document.getElementById("error-nombre");
    mensajeErrorPrecio = document.getElementById("error-precio");
    formaPago = document.getElementById("pago");
    formaPago.value='';
    cajasTarjeta = document.getElementById("tarjeta-credito");
    cajaEfectivo =  document.getElementById("efectivo");
    cajasTarjeta.style.display='none';
    cajaEfectivo.style.display='none';
    //mensajeErrorNombre.style.border = 'white';
    //mensajeErrorNombre.style.display = 'none';
    document.getElementById('imprimir').disabled = true;
}

//funciones
/*
function nombreFuncion(){

}
*/

//funcion añadir articulos al array
function añadirArticulos(){

    articulo = nombreArticulo.value;
    //precio por pantalla
    precio= parseFloat(precioArticulo.value);
    cantidad = parseFloat(unidades.value);
    total = precio * cantidad;
    //le sumo la cantidad que habia en la caja antes al actual para acumular
    precioAnterior = parseFloat(precioTotal.value);
    acumuladorPrecio = precioAnterior + total;
    precioTotal.value = acumuladorPrecio.toString();

    //meter el articulo en el array
    arrayArticulos.push(articulo);
    //nombreArray.unshift(elementos) Añade el elemento del array al principio
    //articulosCarrito.value = arrayArticulos;
    articulosCarrito.value = arrayArticulos.join(', '); // Convierte el array en una cadena

    
    resetCajas();

}

//funcion reset las cajas de texto
 function resetCajas(){
    nombreArticulo.value='';
    precioArticulo.value='';
    unidades.value=1;
    nombreArticulo.focus();
 }
 //funcion validar formulario precio, si meto algun caracter no digito avisa y pone el boton disabled

 function validarPrecio(){
    // \D cualquier caracter que no sea digito
    //para 
    let patronPrecio = /\D/;

	if(patronPrecio.test(precioArticulo.value)){
        mensajeErrorPrecio.textContent = 'tipo de dato incorrecto';
        botonAñadir.disabled = true;
      
	}else{
        mensajeErrorPrecio.textContent = '';
        botonAñadir.disabled = false;
	}

 }

//Onload con los listeners

window.addEventListener("load",()=>{
    //inicializo variables
    initVariables();

    //listener añadir al carrito con errores si estan las cajas vacias
    botonAñadir.addEventListener('click', () => {

        if(nombreArticulo.value!='' && precioArticulo.value !=''){
            mensajeErrorNombre.textContent = '';
            mensajeErrorPrecio.textContent = '';
            añadirArticulos();
        }
        else{
            if(nombreArticulo.value=='' && precioArticulo.value==''){
                mensajeErrorNombre.textContent = 'falta nombre';
                mensajeErrorPrecio.textContent = 'falta precio';
                nombreArticulo.focus();
            }else if(precioArticulo.value==''){
                mensajeErrorPrecio.textContent = 'falta precio';
                mensajeErrorNombre.textContent = '';
                precioArticulo.focus();
            }else if(nombreArticulo.value==''){
                mensajeErrorNombre.textContent = 'falta nombre';
                mensajeErrorPrecio.textContent = '';
                nombreArticulo.focus();
            }

        }
        	
	});
    //listener presionar forma de pago aparecen las opciones correspondientes de efectivo o tarjeta
    formaPago.addEventListener('click', () => {
        if(formaPago.value == 'TAR'){
            cajasTarjeta.style.display= 'inline';
            cajaEfectivo.style.display='none';
            stringFormaPago="tarjeta";
        }
        if(formaPago.value == 'EF'){
            cajaEfectivo.style.display='inline';
            cajasTarjeta.style.display= 'none';
            document.getElementById('importe-efectivo').value= precioTotal.value;
            stringFormaPago = "efectivo";
        }
      
        	
	});
    //listener comprobar si es digito o no el precio

    precioArticulo.addEventListener("input",()=>{

        validarPrecio();
	});

    //listener al darle al checkbox se habilita el boton imprimir
    //checkbox puede ser onchange o onclick como forma de pago
    document.getElementById('aceptar').addEventListener('click', () => {
        
        document.getElementById('imprimir').disabled = false;
        	
	});
    //listener para resumen resultados al hacer click sobre la puntuacion
	document.getElementById('imprimir').addEventListener("click",()=>{
		
        if(stringFormaPago == "efectivo" || stringFormaPago == "tarjeta"){
            alert('Los articulos de mi carrito son: '+ arrayArticulos + '\n'+
			'y el precio total es de: '+ precioTotal.value + ' €'  +'\n'+
			'forma de pago: ' + stringFormaPago + '\n');
        }else{
            alert('Seleccione una forma de pago');
        } 
        
	});


    document.getElementById('resetear').addEventListener("click",()=>{
		
        
        nombreArticulo.focus();
        //limpiar el array de objetos tambien
        arrayArticulos = [];
        precioTotal.value='0';
        articulosCarrito.value='';
        document.getElementById('importe-efectivo').value= '';
        formaPago.value='';
        cajasTarjeta.style.display='none';
        cajaEfectivo.style.display='none';

        //Otra opcion recargando la pagina
        //window.location.reload()
 
	});


});