// Fetch
//
// POST

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

// Fetch no async
/*
fetch(BASE_URL + 'pokemon/ditto')
    .then(res => res.json())
    .then(data => console.log(data));
*/
// fetch async

const fetchPokemon = async (pokemon) => {
    try {
        const response = await fetch(BASE_URL + pokemon + "/");
        const parsedResponse = await response.json();
        return parsedResponse;
        //console.log(parsedResponse);
        //console.log(parsedResponse.weight)
    } catch (err) {
        console.error(err);
    }
}




// Obtener pokemon
document.getElementById('get-btn')
    .addEventListener('click', async () => {
        const text = document.getElementById('poke-name').value.toLowerCase();
        const pokemon = await fetchPokemon(text);
        localStorage.setItem('pokeId', pokemon.id);
        localStorage.setItem('name', pokemon.name);
        localStorage.setItem('weight', pokemon.weight);
        console.log(pokemon.name);
        console.log(pokemon.id);
        console.log(pokemon.weight);
    })

document.addEventListener('DOMContentLoaded', async () => {
    const storedId = localStorage.getItem('pokeId');
    const initialId = storedId ? parseInt(storedId) : 1;
    const pokemon = await fetchPokemon(initialId);
    console.log(pokemon.name);
    console.log(pokemon.id);
    console.log(pokemon.weight);
})


document.getElementById('previous-btn')
    .addEventListener('click', async () => {
        let pokeId = parseInt(localStorage.getItem('pokeId'));
        pokeId = Math.max(1, pokeId -1);
        const pokemon = await fetchPokemon(pokeId);
        console.log(pokemon.name);
        console.log(pokemon.id);
        console.log(pokemon.weight);
        localStorage.setItem('pokeId', pokemon.id);
    })

document.getElementById('next-btn')
    .addEventListener('click', async () => {
        let pokeId = parseInt(localStorage.getItem('pokeId'));
        pokeId = pokeId + 1;
        const pokemon = await fetchPokemon(pokeId);
        console.log(pokemon.name);
        console.log(pokemon.id);
        console.log(pokemon.weight);
        localStorage.setItem('pokeId', pokemon.id);
    })



////////////////// POST
//

/*fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'title1',
        body: 'Lorem ipsum dolor sit amet',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}).then(res => res.json())
    .then(json => console.log(json))
*/

//
//
//
//
const USERS = [
    {
      id: 1,
      username: "booklover123",
      desc: "Avid reader and coffee enthusiast.",
      age: 29,
    },
    {
      id: 2,
      username: "literature_junkie",
      desc: "Poetry lover and amateur writer.",
      age: 35,
    }
  ];


function crearTarjeta(poke) {
    const card = crearSeccion("div");
    card.className = "card-class col-6 border";
    const id_section = crearSeccion("h3", `Nombre: ${poke.id}`);
    id_section.className = "id-class";
    const name_section = crearSeccion("p", `Descripción: ${poke.name}`);
    name_section.className = "name-class";
    const weight_section = crearSeccion("p", `Edad: ${poke.weight}`);
    weight_section.className = "weight-class";
    
    card.append(id_section,name_section, weight_section);
    return card;
}


function crearSeccion(etiqueta, contenido) {
    const section = document.createElement(etiqueta);
    section.textContent = contenido;
    return section;
}

/*function crearLista(books) {
    const BOOK_LIST = document.createElement("div");
    BOOK_LIST.className = "book-class"
    books.forEach((e, index) => {
        const item = crearSeccion("p", `Libro ${index + 1}: ${e}`);
        BOOK_LIST.appendChild(item);
    });
    return BOOK_LIST;
}*/

/*function agregarTarjeta(users) {
    const CARDS_CONTAINER = document.querySelector("#card-container");

    users.forEach(user => {
        const userCard = crearTarjeta(user);
        CARDS_CONTAINER.appendChild(userCard);
    });
}*/
function agregarTarjeta(pokes) {
    const CARDS_CONTAINER = document.querySelector("#card-container");

    pokes.forEach(e => {
        const pokeCard = crearTarjeta(e);
        CARDS_CONTAINER.appendChild(pokeCard);
    });
}

agregarTarjeta(fetchPokemon("10"));
console.log(USERS);
fetchPokemon("10");