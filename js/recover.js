let formulario = document.querySelector ('form')
let campoEmail = document.querySelector('#email')
let campoCheck = document.querySelector ('#sesion')



formulario.addEventListener ('submit', function(event){
    event.preventDefault ()
    let todosok = true
    if (campoEmail.value == ''){
        let mensajeEmail = document.querySelector ('.mensajeEmail')
        mensajeEmail.innerText = 'Por favor escriba su email.'
        todosok = false
    }
    
    if (campoCheck.checked == false){
        let mensajeCheck = document.querySelector ('.mensajeCheck')
        mensajeCheck.innerText = 'Por favor acepte el campo Quiero recuperar mi contraseña'
        todosok = false
    }
    
    if (todosok){
        
        let mensajeSubmit =  document.querySelector ('.mensajeSubmit')
        
        mensajeSubmit.innerText = 'Recibirás un email con las instrucciones para recuperar tu contraseña'
        let boton = document.querySelector ('.botonreiniciar')
        console.log("boton: ", boton);
        boton.innerHTML += '<a class="textobotrei" href="login.html">Volver a iniciar sesión</a>'
        
        this.submit
        
    } 
})
