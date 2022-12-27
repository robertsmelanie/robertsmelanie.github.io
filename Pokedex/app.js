// Pokedex project

const pokeContainer = document.querySelector('#container');
// Using the first 151 Pokemon aks IDs/Objects in the PokeAPI
const numOfPokemon = 151;

// The createPokeCard function creates a new card (AKA Section element) and adds the new card to the webpage/document inside of the div (aka PokeContainer) with the ID of "container"
//Note: The value/argument that will be passed in for the 'pokemon' parameter will be the response received for the Axios request to the pokiAPI
function createPokeCard(pokemon) {
    const pokeCard = document.createElement('section');
    pokeCard.classList.add('pokemon');
    pokeContainer.append(pokeCard);
    // Setting the inner HTML for the new card using the data / object that is passed into the pokemon parameter, Also using toUpercase method on the pokemon name so it displays in uppercase text.
    pokeCard.innerHTML = `
    <div class="img-container">
        <img src="${pokemon.data.sprites.front_default}" alt="${pokemon.data.name}">
    </div>
    <h3 class="name">${pokemon.data.name.toUpperCase()}</h3>
    `;
 
    
}

// The getPokemonData function makes an Axios GET request to the PokiAPI using a specific pokemon ID/Number then takes the returned data and passes it into the createPokeCard function
// Note The argument/value passed into the "id'" parameter will be a number created in the loop in the next function (aka the getPokemon function)
// async function getPokemonData(id) {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//     const pokemonData = await axios.get(url);
//     console.log(pokemonData.data);
//     console.log(pokemonData.data.sprites.front_default);
   
// }
async function getPokemonData(id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemonData = await axios.get(url);
    console.log(pokemonData.data);
    console.log(pokemonData.data.sprites.front_default);
    console.log(pokemonData.data.name);
    createPokeCard(pokemonData);
}
// The getPokemon function loops through all the pokemon IDs from 1 to 150 and runs/executes the getPokemonData function for each ID
// NOTE: Using async/await on this function because the code in the getPokemonData function is asynchronous (There is an axios in the function)

async function getPokemon(){
    for(i = 1; i <= numOfPokemon; i++){
        console.log(i);
        await getPokemonData(i);
    }
}
// Running/Executing the getPokemon function which runs/executes the getPokemonData function each time through the loop
getPokemon();