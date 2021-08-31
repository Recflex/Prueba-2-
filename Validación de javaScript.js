/*---Validación de Formulario---*/

var nombre = document.getElementById('nombre');
var nombre = document.getElementById('email');
var apellido = document.getElementById('apellido');
var direccion = document.getElementById('direccion');
var error = document.getElementById('error');
error.style.color= 'red';

function enviarformulario (){

    console.log('enviando formulario')
    
    var mensajesError =[];
    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingresa tu nombre');
    }
    if(apellido.value === null || apellido.value === ''){
        mensajesError.push('Ingresa tu apellido');
    }
    if(direccion.value === null ||direccion.value === ''){
        mensajesError.push('Ingresa tu email');
    }
    if(email.value === null || nombre.value === ''){
        mensajesError.push('Ingresa tu email');
    }
    error.innerHTML = mensajesError.join(',');
    return false;
}
