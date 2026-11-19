let formulario = document.querySelector('.buscador');
let buscador = document.querySelector('.buscador input');

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
let url = 'https://dummyjson.com/products/category-list'

fetch(url)  
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

let formLogin = document.querySelector('#form-login');
let inputEmail = document.querySelector('#email');
let inputPassword = document.querySelector('#contraseña');
let mensajeError = document.querySelector('#mensaje-error');

formLogin.addEventListener('submit', function (e) {
    e.preventDefault();
    mensajeError.innerText = '';

    if (inputEmail.value.trim() === '') {
        mensajeError.innerText = 'El campo email es obligatorio';
        return;
    }

    if (inputPassword.value.trim() === '') {
        mensajeError.innerText = 'El campo contraseña es obligatorio';
        return;
    }

    if (inputPassword.value.length < 6) {
        mensajeError.innerText = 'La contraseña debe tener al menos 6 caracteres';
        return;
    }

    localStorage.setItem('email', inputEmail.value.trim());
    window.location.href = './index.html';
});