let logout = document.querySelector(".logout")
let mail = localStorage.getItem ('email')
let contra = localStorage.getItem ('contra')
let mensaje = document.querySelector ('.mensajeSaludo')
if (mail != null){
    logout.addEventListener('click', function(){
    localStorage.removeItem(mail);
    localStorage.removeItem(contra);
    let mensaje = document.querySelector ('.mensajeSaludo')
    mensaje.style.display = 'none'
    logout.style.display = 'none'
    let aparece = document.querySelector ('.saludoli')
    let aparece2 = document.querySelector ('.saludoli2')
    aparece.style.display = 'inline'
    aparece2.style.display ='inline'
})}