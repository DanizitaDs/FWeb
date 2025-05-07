let imgPokemon = document.querySelector("#fotoPoke");
let form = document.querySelector("#form");
let inputF = document.querySelector("#inputForm");
let idPoke = document.querySelector("#idPokemon");
let nomePoke = document.querySelector("#nomePokemon");
let tipo1Poke = document.querySelector("#tipo1");
let tipo2Poke = document.querySelector("#tipo2");
let habili = document.querySelector("#habilidade");
let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");

let numeroPokeDex = 1;

const fetchPokemon = async(pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data;
}

const showPokemon = async(pokemon) => {
    const data = await fetchPokemon(pokemon);
    imgPokemon.src = data.sprites.front_default;
    nomePoke.innerHTML = data.name;
    idPoke.innerHTML ="ID: "+ data.id;
    tipo1Poke.innerHTML = data.types[0].type.name;
    tipo2Poke.innerHTML = data.types[1].type.name;
    habili.innerHTML = "Habilidade:  " + data.abilities[0].ability.name;
    peso.innerHTML = "Peso:  " + parseInt(data.weight / 10) + "kg";
    altura.innerHTML = "Altura:  " + data.height/10 + "m";
    
}

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    showPokemon(inputF.value.toLowerCase());
})

let next = document.querySelector('#proximo');
let back = document.querySelector('#voltar');


next.addEventListener('click', (event) => {
    if (numeroPokeDex < 1000) {
        numeroPokeDex = numeroPokeDex + 1;
    }
    showPokemon(numeroPokeDex);
})

back.addEventListener('click', (event) => {
    if (numeroPokeDex > 1) {
        numeroPokeDex = numeroPokeDex - 1;
    }
    showPokemon(numeroPokeDex);
})

showPokemon(numeroPokeDex);
