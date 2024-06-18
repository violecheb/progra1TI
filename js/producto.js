let query = location.search 
let querys = new URLSearchParams (query)
let id = querys.get ('id')
let categoria = querys.get("category");

let url = `https://fakestoreapi.com/products/${id}`

fetch(url)                              
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let titulo = document.querySelector('h2');
        let imagen = document.querySelector('.fotoProducto');
        let descripcion = document.querySelector('.descripcionProd');
        let categoria = document.querySelector ('.categoriaProd')
        let precio = document.querySelector('.precioProd');
        let infoproducto = document.querySelector('.infoproducto')

        
        titulo.innerText = `${data.title}`;
        imagen.src= `${data.image}`;
        categoria.innerHTML = `<a href="category.html?category=${data.category}">${data.category}</a>`;
        descripcion.innerText = `${data.description}`;
        precio.innerText = `${data.price} USD`;      

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