const pokemonName = document.getElementById('pokemon-name');
const pokemonHeight = document.getElementById('pokemon-height');
const pokemonFrontImg = document.getElementById('pokemon-img-front');
const pokemonNumber = document.getElementById('pokemon-number');
const pokemonWeight = document.getElementById('pokemon-weight');
const pokemonAbilities = document.getElementById('pokemon-abilities');

const pokemonApiUrl = 'https://pokeapi.co/api/v2/';

let getPokemonData = async ()=> {
    const respose = await fetch(`${pokemonApiUrl}pokemon/250`);
    const pokemon = await respose.json();
    console.log(pokemon);
    const {name , height , abilities } = pokemon;
    const frontImg = pokemon.sprites.front_default;
    abilities.foreach(element => {
        pokemonAbilities.innerHTML = `<li>${element.name}</li>`;
    });

    pokemonName.innerText = name;
    pokemonWeight.innerText = `El peso es: ${pokemon.weight}0 g`;
    pokemonHeight.innerText = `La altura es: ${height}`;
    pokemonNumber.innerText = `Número en pokedex: ${pokemon.id}`;
    pokemonFrontImg.src = frontImg;
    
};

getPokemonData();