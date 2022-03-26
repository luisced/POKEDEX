
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

    document.getElementById('ps').textContent = `${data.stats[0].base_stat}`;
    document.getElementById('atk').textContent = `${data.stats[1].base_stat}`;
    document.getElementById('def').textContent = `${data.stats[2].base_stat}`;
    document.getElementById('spatk').textContent = `${data.stats[3].base_stat}`;
    document.getElementById('spdef').textContent = `${data.stats[4].base_stat}`;
    document.getElementById('speed').textContent = `${data.stats[5].base_stat}`;
    document.getElementById('type').textContent = `${data.types[0].type.name}`;
 });
}










// const fetchPokemon = (pokemon) =>{
//     const url  = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
//     fetch(url).then((res) => {
//         return res.json();
//     }).then((data) => {
//         let pokeImg = data.sprites.front_default;

//         document.getElementById('sprite1').src = pokeImg;
//         document.getElementById('sprite2').src = data.sprites.back_default;
//         document.getElementById('name').textContent = `${data.forms[0].name}`.toUpperCase();
//         if(data.types.length == 2)
//         {
//             document.getElementById('type').textContent = `type: ${data.types[0].type.name} - ${data.types[1].type.name}`.toUpperCase();
//         }
//         else{
//             document.getElementById('type').textContent = `type: ${data.types[0].type.name}`.toUpperCase();
//         }
//         infoBackground(data.types[0].type.name);
        
//         document.getElementById('number').textContent = `No. ${pokemon}`;
//         currentPokemon = data.id;
//         document.getElementById('ps').textContent = `${data.stats[0].base_stat}`;
//         document.getElementById('atk').textContent = `${data.stats[1].base_stat}`;
//         document.getElementById('def').textContent = `${data.stats[2].base_stat}`;
//         document.getElementById('spatk').textContent = `${data.stats[3].base_stat}`;
//         document.getElementById('spdef').textContent = `${data.stats[4].base_stat}`;
//         document.getElementById('speed').textContent = `${data.stats[5].base_stat}`;
//         document.getElementById('height').textContent = `height: ${data.height/10} m`;
//         document.getElementById('weight').textContent = `weight: ${data.weight/10} kg`;





const pokeImage = (url) => {
    // Esta función va a recibir la url de la imagen del pokemon y va a pintarla en el DOM
    const pokeImg = document.getElementById('pokeImg');
    pokeImg.src = url;

}



const pokeTypes = (url) => {

    // Esta función va a recibir la url de la imagen del pokemon y va a pintarla en el DOM
    const pokeType = document.getElementById('pokeType');
    pokeType.src = url;


}