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



let contenedorResultados = document.querySelector('#resultados-busqueda');
let tituloBusqueda = document.querySelector('#titulo-busqueda')
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get("buscador"); 

fetch('https://dummyjson.com/products/search?q=${buscador}')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let productos = data.products;
      if (productos.length == 0) {
        tituloBusqueda.innerText = 'No hay resultados para el término: ' + busqueda;
      } else {
        tituloBusqueda.innerText = 'Resultados de búsqueda para: ' + busqueda;
        for (let i = 0; i < productos.length; i++) {
          contenedorResultados.innerHTML += `
            <article class="producto">
              <img class="foto" src="${productos[i].thumbnail}" alt="${productos[i].title}">
              <h3>${productos[i].title}</h3>
              <p>${productos[i].description}</p>
              <p class="precio">$${productos[i].price}</p>
              <a class="ver" href="./product.html?id=${productos[i].id}">Ver Más</a>
            </article>
          `;
        }
      }
    })
    .catch(function (error) {
      console.log("Error en la búsqueda:", error);
    });


