
const toggleButton = document.getElementById('toggle-button');
const naviList = document.getElementById('navi-list');

toggleButton.addEventListener('click', () => {
    naviList.classList.toggle('active');
});



const fetchPokemon = () => {
    // Esta función va a recibir el nombre del pokemon que el usuario escriba en el input y va a hacer una petición a la API
    const pokeName = document.getElementById('pokeName');
    let pokeInput = pokeName.value.toLowerCase();
    const url =  `https://pokeapi.co/api/v2/pokemon/${pokeInput}`; //url to get pokemon
    fetch(url).then((res)=>{
        if (res.status != "200") {
            console.log("response status: " + res.status);
            pokeImage('./notFound.png');
        }
        else {
                return res.json();
            }
        }
    
    ).then((data)=>{
        console.log(data);
        let pokeImg= data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
    }
    )
}



const pokeImage = (url) => {
    // Esta función va a recibir la url de la imagen del pokemon y va a pintarla en el DOM
    const pokeImg = document.getElementById('pokeImg');
    pokeImg.src = url;

}


