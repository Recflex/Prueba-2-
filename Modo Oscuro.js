var nombre = prompt ('¿Cual es tu nombre?')
var alerta = alert ('Tenemos un limite maximo de $50000 y un minimo de $20000 de compra')
var numero = prompt ('¿cuanto desea gastar?')

if(numero > 50000 ){
    alert('Sobrepasas el limite')    
}
else {
    if(numero < 20000){
    alert('No llegas al minimo')}
    else{
    alert('Bienvenido/a')
    }
}



/*---Modo Oscuro 1---*/

const bdark = document.querySelector('#bdark');
const body = document.querySelector('body');

load();

bdark.addEventListener('click',e=>{
    body.classList.toggle('darkmode');
    store(body.classList.contains('darkmode'));
});

function load(){
    const darkmode = localStorage.getItem('darkmode');
    if(darkmode){
        store('false');
    }else if (darkmode =='true'){
        body.classList.add('darkmode')
}
}
function store(value){
    localStorage.setItem('darkmode',value);
}
