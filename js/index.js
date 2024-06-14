let categories = {
    "women's clothing": "productos-womens-clothing",
    "men's clothing": "productos-mens-clothing",
    "jewelery": "productos-jewelery"
};
/*En este caso utilice el bucle for...in para iterar sobre
las categorias del objeto categories de manera eficiente.
El bucle recorre cada clave del objeto y ademas me permite
acceder a su valor asociado, en este caso, los nombres 
de los contenedores en el DOM. Aprendi esta logica en 
Python(materia IPC), donde se utiliza un metodo similar
para iterar sobre las claves de un diccionario. Lo uso para 
generar dinamicamente el contenido de la pagina para cada categoria
de productos, evitando escribir un codigo muy parecido 3
veces(una por cada seccion).
*/
for (let category in categories){
    let nombreContenedor = categories[category];
    fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                let contenedor = document.querySelector(`section.${nombreContenedor}`);
                let productos = "";
                for(let i=0; i < data.length; i++){
                    let producto = data[i];
                    productos += `<article class="productos">
                                <img class="imagenes" src="${producto.image}"/>
                                <h2 class="titulo">${producto.title}</h2>
                                <p class="descripcion">${producto.description}</p>
                                <p class="precio">${producto.price} USD</p>
                                <a class="boton2" href="producto.html?id=${producto.id}">Ver más</a>
                            </article>`;
                }
                contenedor.innerHTML = productos;
            })
            .catch(function(error){
                console.log("El error es: " + error);
            })
}
