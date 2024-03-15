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
        console.log('clicked');
    });

}

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
  })
  .catch(error => {
    // Handle errors
    console.error('There was a problem with the fetch operation:', error);
  });
