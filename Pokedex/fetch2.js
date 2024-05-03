const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';



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



/*const ls = localStorage.getItem('pokeId');
const il = ls ? parseInt(ls) : 1;
const pp = fetchPokemon(il);
cards(pp);*/


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
        cards(pokemon);
        console.log(pokemon);
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
        cards(pokemon);
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
        cards(pokemon);
    })




/*function crearTarjeta(poke) {
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

function agregarTarjeta(pokes) {
    const CARDS_CONTAINER = document.querySelector("#card-container");

    pokes.forEach(e => {
        const pokeCard = crearTarjeta(e);
        CARDS_CONTAINER.appendChild(pokeCard);
    });
}*/

const card = document.createElement("div");
const id_section = document.createElement("h3");
const name_section = document.createElement("p");
const weight_section = document.createElement("p");
const img_section = document.createElement("img");

//function card (){
function cards (pokemon){
const CARDS_CONTAINER = document.querySelector("#card-container");//(".container")


id_section.textContent = pokemon.id;
name_section.textContent = pokemon.name;
weight_section.textContent = pokemon.weight;
img_section.src = pokemon.sprites.front_default;

card.append(id_section,name_section, weight_section, img_section);
CARDS_CONTAINER.appendChild(card);

}
