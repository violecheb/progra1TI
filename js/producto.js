let query = location.search 
let querys = new URLSearchParams (query)
let id = querys.get ('id')

let url = `https://fakestoreapi.com/products/${id}`

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let titulo = document.querySelector('h2');
        let imagen = document.querySelector('.fotoProducto');
        let descripcion = document.querySelector('.descripcion');
        let categoria = document.querySelector ('.categoria')
        let precio = document.querySelector('.precio');

        
        titulo.innerText = `${data.title}`;
        imagen.src= `${data.image}`;
        categoria.innerText = `${data.category}`
        descripcion.innerText += `${data.description}`;
        precio.innerText += `${data.price}`;      

    })
    
    .catch(function(error){
        console.log(error);
    })


let carrito = []
let favorito = document.querySelector ('.favorito')
favorito.addEventListener ('click', function(evento){
    evento.preventDefault()
    carrito.push (id)
    let carritoString = JSON.stringify (carrito)
    localStorage.setItem ('itemsCarrito', carritoString)
})

let recuperoStorage = localStorage.getItem ('itemsCarrito')
if (recuperoStorage != null){
    pCarritoString = JSON.parse (recuperoStorage)
    carrito = pCarritoString
}