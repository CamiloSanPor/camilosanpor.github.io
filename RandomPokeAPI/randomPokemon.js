function getRandomPokemon(){

    const random = Math.floor(Math.random() * (1025 - 1) + 1);

    let apiUrl = `https://pokeapi.co/api/v2/pokemon/${random}/`;

    return apiUrl;
}

function displayPokemon(data){
    const body = document.body;
    const pokemon = document.createElement('div');
    const name = document.createElement('p');
    const sprite = document.createElement('img');
    const audio = document.createElement('audio');
    const refresh = document.createElement('button');

    name.innerHTML = data.name.toUpperCase();
    refresh.innerHTML = '🔄';

    sprite.setAttribute('src', data.sprites.front_default);
    sprite.classList.add('sprite');

    body.appendChild(pokemon);
    body.appendChild(refresh);

    
    pokemon.classList.add('pokemon');
    pokemon.appendChild(name);
    pokemon.appendChild(sprite);
    
    refresh.classList.add('refresh');
    refresh.addEventListener('click', (event) => {
        location.reload();
    });

    audio.setAttribute('src', data.cries.latest);
    audio.addEventListener('canplaythrough', (event) => {
        audio.play();
    });

    sprite.appendChild(audio);
    sprite.addEventListener('click', (event) => {
        audio.play();
    });

}

// set background color based on the pokemons type
function setBackgroundColor(data){

  let pkmnType = data.types[0].type.name;

  let typeColors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD'
};


  console.log(pkmnType);
  console.log(typeColors[pkmnType]);

  document.body.style.backgroundColor = typeColors[pkmnType];

}

function fetchPokeAPI(){

  // API endpoint URL
  const apiUrl = getRandomPokemon();

  // Make a GET request to the API endpoint
  fetch(apiUrl)
    .then(response => {
      // Check if the response is successful (status code between 200 and 299)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Parse the JSON response
      return response.json();
    })
    .then(data => {
      // Handle the JSON data
      console.log(data);
      displayPokemon(data);
      setBackgroundColor(data);
    })
    .catch(error => {
      // Handle errors
      console.error('There was a problem with the fetch operation:', error);
    });

}

document.addEventListener('keydown', function(event) {
  // Check if the pressed key is spacebar (keycode 32)
  if (event.key === ' ') {
      // Run your JavaScript function here
      this.location.reload();
  }
});

fetchPokeAPI();