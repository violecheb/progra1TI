let formulario = document.querySelector("form");
let campoemail = document.querySelector("#email");
let campocontraseña = document.querySelector("#password");
let camporecontraseña = document.querySelector("#password2");
let campoCheck = document.querySelector ('#sesion');
let submit = document.querySelector('#submit');

formulario.addEventListener("submit", function(event){
    event.preventDefault()
    let todosok = true
    if (campoemail.value == ''){
        let mensajeEmail = document.querySelector(".vaciomail")
        mensajeEmail.innerText = "Por favor complete el campo"
        todosok = false
    }
    if (campocontraseña.value ==''){
        let mensajeContraseña = document.querySelector(".vaciocontra")
        mensajeContraseña.innerText = "Por favor complete el campo"
        todosok = false
    } else if (campocontraseña.value.length < 6){
        let mensajeContraseña2 = document.querySelector(".vaciocontra2")
        mensajeContraseña2.innerText = "Debe ingresar al menos 6 caracteres"
        todosok = false
    }
    if (campocontraseña.value != camporecontraseña.value){
        let mensajeRecontraseña =document.querySelector(".vaciorecontra");
        mensajeRecontraseña.innerText = "Las contraseñas no coinciden"
        todosok = false
    }
    if (campoCheck.checked == false){
        let mensajeCheck = document.querySelector ('.mensajecondiciones')
        mensajeCheck.innerText = 'Por favor acepte los Terminos y Condiciones'
        todosok = false
    }
    if (todosok){
        window.location.href = "login.html";
    }
})