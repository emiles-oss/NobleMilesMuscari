let formulario = document.querySelector('.buscador');
let buscador = document.querySelector('input');

formulario.addEventListener('submit', function(e) {

    if (buscador.value == "") {
        e.preventDefault();
        alert("El campo de búsqueda está vacío");
    }

    else if (buscador.value.length < 3) {
        e.preventDefault();
        alert("La búsqueda debe tener al menos 3 caracteres");
    }

});


let menu = document.querySelector('#lista-menu')

fetch('https://dummyjson.com/products/category-list')  
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let rtdo = data
    for (let i = 0; i < rtdo.length; i++) {
        menu.innerHTML += `
            <li class="menu-li">
                <a href="category.html?categoria=${rtdo[i]}" >${rtdo[i]}</a>
            </li>
        `
    }
  })
  .catch(function (error) {
    console.log("Error: " + error);
  })

let productosCategoria = document.querySelector('#productos-categoria');
let tituloCategoria = document.querySelector('#titulo-categoria');
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoria = queryStringObj.get("categoria");

if (categoria !== null) {

    tituloCategoria.innerText = categoria;
  fetch("https://dummyjson.com/products/category/" + categoria)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let productos = data.products;
      productosCategoria.innerHTML = '';
      for (let i = 0; i < productos.length; i++) {
        productosCategoria.innerHTML += `
          <article class="producto">
            <img class="foto" src="${productos[i].thumbnail}" alt="${productos[i].title}">
            <h3>${productos[i].title}</h3>
            <p>${productos[i].description}</p>
            <p class="precio">$${productos[i].price}</p>
            <a class="ver" href="./product.html?id=${productos[i].id}">Ver Más</a>
          </article>
        `;
      }
    })
    .catch(function (error) {
      console.log("Error: " + error);
    });
}