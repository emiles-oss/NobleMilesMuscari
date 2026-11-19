let linkLogout = document.querySelector('#link-logout');

linkLogout.addEventListener('click', function (e) {
    e.preventDefault();

    localStorage.removeItem('email');

    document.querySelector('#saludo').style.display = 'none';
    document.querySelector('#link-logout').style.display = 'none';

    document.querySelector('#menu-login').style.display = '';
    document.querySelector('#menu-separador').style.display = '';
    document.querySelector('#menu-registro').style.display = '';
});