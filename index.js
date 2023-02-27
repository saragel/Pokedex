window.addEventListener ("load", cargar_datos);

function cargar_datos () {

    function obtener_datos (ev) {
        ev.preventDefault ();
        let barra_busqueda = document.getElementById ("input").value;
        fetch ("https://pokeapi.co/api/v2/pokemon/" + barra_busqueda)
        .then ((r)=>r.json())
        .then (obtain_data);
        function obtain_data (data) {

            let type = data.types[0].type.name;
           let p = document.createElement ("p");
           p.innerHTML = "Type: " + type;
           document.body.appendChild (p);
          // if (document.getElementById("button")
          // .addEventListener ("click", document.body.removeChild (elemento)));

            let name = data.species.name;
            let h2 = document.createElement ("h2");
            h2.innerHTML = name;
            document.body.appendChild (h2);

            let img = data.sprites.front_default; 
            let imgElement = document.createElement("img"); 
            imgElement.setAttribute("src", img); 
            document.body.appendChild(imgElement); 

            let img1 = data.sprites.back_default; 
            let img1Element = document.createElement("img"); 
            img1Element.setAttribute("src", img1); 
            document.body.appendChild(img1Element); 
        }   
        }

        document.querySelector ("form")
        .addEventListener ("submit", obtener_datos)

        let button = document.getElementById ("reload"); 
        button.addEventListener ("click", location.reload.bind(location)); 


}