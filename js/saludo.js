let emailGuardado = localStorage.getItem('email');
let saludo = document.querySelector('#saludo');
let linkLogoutSaludo = document.querySelector('#link-logout');
let menuLogin = document.querySelector('#menu-login');
let menuSeparador = document.querySelector('#menu-separador');
let menuRegistro = document.querySelector('#menu-registro');

if (emailGuardado !== null) {
    saludo.innerText = 'Bienvenido: ' + emailGuardado;
    saludo.style.display = '';
    linkLogoutSaludo.style.display = '';
    menuLogin.style.display = 'none';
    menuSeparador.style.display = 'none';
    menuRegistro.style.display = 'none';
} else {
    saludo.style.display = 'none';
    linkLogoutSaludo.style.display = 'none';
    menuLogin.style.display = '';
    menuSeparador.style.display = '';
    menuRegistro.style.display = '';
}
