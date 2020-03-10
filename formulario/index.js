// let nambre = document.getElementById('name');
// let correo = document.getElementById('email');
// let telefono = document.getElementById('numCelular');
// let mujer = document.getElementById('flame');
// let hombre = document.getElementById('male');
// let opciones = document.getElementById('dropdown');
// let check1 = document.getElementById('checkbox1');
// let check2 = document.getElementById('checkbox2');
// let check3 = document.getElementById('checkbox3');
// let check4 = document.getElementById('checkbox4');
// let mwnsaje = document.getElementById('message');
// let boton = document.getElementById('submit');


let formulario = document.getElementsByName('form')[0];
let ele = formulario.elements;
let boton = document.getElementById('submit');

formulario.addEventListener('submit', validacion);

function valiPersonal(e){
    if(formulario.name.value== 0 ){
        alert('completa el campo nombre');
        e.preventDefault();
    }
}

function valiRadio(e){
    if(formulario.genero[0].checked  == true || formulario.genero[1].checked  == true ){

    }else{
        alert('Completa el campo de genero');
        e.preventDefault();
    }
}

function valiMessage(e){
    if(formulario.messag.value < 50 ){
        alert('Debe enviar un mensaje')
    }

}
function validacion(e){
    valiPersonal(e);
    valiRadio(e);
}
