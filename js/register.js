let formulario = document.querySelector('.buscador');
let buscador = document.querySelector('.input-buscador');

formulario.addEventListener('submit', function (e) {
    if (buscador.value == "") {
        e.preventDefault();
        alert("El campo de búsqueda está vacío");
    } else if (buscador.value.length < 3) {
        e.preventDefault();
        alert("La búsqueda debe tener al menos 3 caracteres");
    }
});
let menu = document.querySelector('#lista-menu');
let url = 'https://dummyjson.com/products/category-list';

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        if (menu) {
            for (let i = 0; i < data.length; i++) {
                menu.innerHTML += `
                    <li class="menu-li">
                        <a href="category.html?categoria=${data[i]}">${data[i]}</a>
                    </li>
                `;
            }
        }
    })
    .catch(function (error) {
        console.log("Error: " + error);
    });


let formRegistro = document.querySelector('#form-registro');
let inputEmail = document.querySelector('#email');
let inputContrasenia = document.querySelector('#contrasenia');
let inputRepetir = document.querySelector('#repetir-contrasenia');
let mensajeError = document.querySelector('#mensaje-error');
formRegistro.addEventListener('submit', function (e) {
    e.preventDefault();
    mensajeError.innerText = "";

    if (inputEmail.value.trim() === "") {
        mensajeError.innerText = "El campo email es obligatorio";
    } else if (inputContrasenia.value === "") {
        mensajeError.innerText = "El campo contraseña es obligatorio";
    } else if (inputContrasenia.value.length < 6) {
        mensajeError.innerText = "La contraseña debe tener al menos 6 caracteres";
    } else if (inputRepetir.value !== inputContrasenia.value) {
        mensajeError.innerText = "Las contraseñas no coinciden";
    } else {
        window.location.href = "./login.html";
    }
});