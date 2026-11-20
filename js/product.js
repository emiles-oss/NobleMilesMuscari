let formulario = document.querySelector('.buscador');
let buscador = document.querySelector('input');

formulario.addEventListener('submit', function (e) {

    if (buscador.value == "") {
        e.preventDefault();
        alert("El campo de búsqueda está vacío");
    }

    else if (buscador.value.length < 3) {
        e.preventDefault();
        alert("La búsqueda debe tener al menos 3 caracteres");
    }

});


let menu = document.querySelector('#lista-menu');
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

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let idproducto = queryStringObj.get("id");

if (idproducto != null) {

    fetch("https://dummyjson.com/products/" + idproducto)
      .then(function(response) {
            return response.json();
    })
    .then(function(data) {

        document.querySelector("#product-image").src = data.images[0];
        document.querySelector("#product-image").alt = data.title;

        document.querySelector("#product-title").innerText = data.title;

        if(data.brand){
            document.querySelector("#product-brand").innerText = data.brand;   
        }
        else {
            document.querySelector("#product-brand").innerText = "Sin Marca";
        }
        document.querySelector("#product-brand").innerText = data.brand ? data.brand : "Sin marca";

        document.querySelector("#product-description").innerText = data.description;

        document.querySelector("#product-price").innerText = "$ " + data.price;

        document.querySelector("#product-stock").innerText = "Stock: " + data.stock;
        
        let categoria = document.querySelector("#product-category");
        let tags = document.querySelector("#product-tags");
        
        categoria.innerText = data.category;
        categoria.href = "./category.html?categoria=" + data.category;
    
        for (let i = 0; i < data.tags.length; i++) {
            tags.innerHTML += `
            <li class="dua">${data.tags[i]}</li>
        `
        }

        let reviews = document.querySelector("#product-reviews");
        for (let i = 0; i < data.reviews.length; i++) {
            reviews.innerHTML += `
            <div class="usuario">
                <h3>${data.reviews[i].reviewerName}:</h3>
                <p>Rating: ${data.reviews[i].rating}/5</p>
                <p>${data.reviews[i].comment}</p>
                <p>${new Date(data.reviews[i].date).toLocaleDateString()}</p>
            </div>
        `
        }
    })
    .catch(function(error) {
        console.log("El error es: " + error);
    });
}