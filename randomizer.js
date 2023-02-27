function getrandom () {
    return Math.floor(Math.random()*1008);
}

window.addEventListener ("load", cargar_datos);

function cargar_datos () {

    function getPokemon( event ){
        event.preventDefault();
        const pokemon = getrandom (); // no lo declaramos fuera de la función porque si no sólo lo hará random la primera vez. 

        fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then ((r)=>r.json())
        .then (coge_datos);

        function coge_datos (data) {
            let tipo = data.types[0].type.name;
            let parrafo = document.createElement ("p");
            parrafo.innerHTML = "Type: " + tipo;
            document.body.appendChild (parrafo);

            let nombre = data.species.name;
            let titulo = document.createElement ("h2");
            titulo.innerHTML = nombre;
            document.body.appendChild (titulo);

            let imagen = data.sprites.front_default;
            let img = document.createElement ("img");
            img.setAttribute ("src", imagen);
            document.body.appendChild (img);

            let imagen1 = data.sprites.back_default;
            let img1 = document.createElement ("img");
            img1.setAttribute ("src", imagen1);
            document.body.appendChild (img1);
        }
    }

    let accion = document.querySelector ("form"); 
    accion.addEventListener ("submit", getPokemon);

    let button = document.getElementById ("reload"); 
    button.addEventListener ("click", location.reload.bind(location));  
}

let sustituir = document.getElementById ("boton");
sustituir.addEventListener ("click", sustituir_pokemon);

function sustituir_pokemon () {

    const pokemon = getrandom ();

    fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then ((r)=>r.json())
    .then (coge_datos);

    function coge_datos (data) {
        let datos = data;
        
    }
}