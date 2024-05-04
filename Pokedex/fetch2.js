const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

const fetchPokemon = async (pokemon) => {
    try {
        const response = await fetch(BASE_URL + pokemon + "/");
        const parsedResponse = await response.json();
        return parsedResponse;
    } catch (err) {
        console.error(err);
    }
}

document.getElementById('get-btn')
    .addEventListener('click', async () => {
        const text = document.getElementById('poke-name').value.toLowerCase();
        const pokemon = await fetchPokemon(text);
        localStorage.setItem('pokeId', pokemon.id);
        cards(pokemon);
        document.getElementById('poke-name').value = localStorage.getItem('pokeId');
    })

document.addEventListener('DOMContentLoaded', async () => {
    const storedId = localStorage.getItem('pokeId');
    const initialId = storedId ? parseInt(storedId) : 1;
    const pokemon = await fetchPokemon(initialId);
    document.getElementById('poke-name').value = initialId;
    console.log("DOM fully loaded and parsed");
    cards(pokemon);
})

document.getElementById('previous-btn')
    .addEventListener('click', async () => {
        let pokeId = parseInt(localStorage.getItem('pokeId'));
        pokeId = Math.max(1, pokeId -1);
        const pokemon = await fetchPokemon(pokeId);
        localStorage.setItem('pokeId', pokemon.id);
        cards(pokemon);
        document.getElementById('poke-name').value = localStorage.getItem('pokeId');
    })

document.getElementById('next-btn')
    .addEventListener('click', async () => {
        let pokeId = parseInt(localStorage.getItem('pokeId'));
        pokeId = pokeId + 1;
        const pokemon = await fetchPokemon(pokeId);
        localStorage.setItem('pokeId', pokemon.id);
        cards(pokemon);
        document.getElementById('poke-name').value = localStorage.getItem('pokeId');
    })

const card = document.createElement("div");
const id_section = document.createElement("h3");
const name_section = document.createElement("p");
const weight_section = document.createElement("p");
const img_section = document.createElement("img");

function cards (pokemon){
    const CARDS_CONTAINER = document.querySelector("#card-container");
    id_section.textContent = pokemon.id;
    name_section.textContent = pokemon.name;
    weight_section.textContent = pokemon.weight;
    img_section.src = pokemon.sprites.front_default;
    card.append(id_section,name_section, weight_section, img_section);
    CARDS_CONTAINER.appendChild(card);
}