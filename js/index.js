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

  let tituloSmartphones = document.querySelector('.titulo-nuevos');
  let productosSmartphones = document.querySelector('#productos-nuevos')
fetch('https://dummyjson.com/products/category/smartphones')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.products);
    let smartphones = data.products
    tituloSmartphones.innerText = smartphones[0].category;
    for (let i = 0; i < smartphones.length; i++) {
      productosSmartphones.innerHTML += `
            <article class="producto">
                <img class="foto" src="${smartphones[i].thumbnail}" alt="imagen">
                <h3>${smartphones[i].title}</h3>
                <p>${smartphones[i].description}</p>
                <p class="precio" >${smartphones[i].price}</p>
                <a class="ver" href="./product.html?id=${smartphones[i].id}">Ver Más</a>
            </article>
        `
    }
  })
  .catch(function (error) {
    console.log("Error: " + error);
  })

let tituloGroceries = document.querySelector('.titulo-destacados');
let productosGroceries = document.querySelector('#productos-destacados')
fetch('https://dummyjson.com/products/category/groceries')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.products);
    let groceries = data.products
    tituloGroceries.innerText = groceries[0].category;
    for (let i = 0; i < groceries.length; i++) {
      productosGroceries.innerHTML += `
            <article class="destacado">
                <img class="foto" src="${groceries[i].images[0]}" alt="imagen">
                    <h3>${groceries[i].title}</h3>
                    <p>${groceries[i].description}</p>
                    <p class="precio" >${groceries[i].price}</p>
                    <a class="ver" href="./product.html?id=${groceries[i].id}">Ver Más</a>
            </article>
        `
    }
  })
  .catch(function (error) {
    console.log("Error: " + error);
  })
