
/*---mostrar Información o No Mostrar---*/

function mostrar(){
    document.getElementById('precio').style.display ='block'; 
}
function ocultar(){
    document.getElementById('precio').style.display ='none';
}

/*---Modo Oscuro 2--*/

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