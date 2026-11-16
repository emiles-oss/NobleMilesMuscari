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

  let productos = document.querySelector('#productos-nuevos')
  fetch('https://dummyjson.com/products/category/smartphones')
  .then(function (response) {
    return response.json();
  })
