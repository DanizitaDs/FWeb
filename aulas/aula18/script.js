// Seleciona a imagem do Pokémon na tela
let imgPokemon = document.querySelector("#fotoPoke");

// Seleciona o formulário de busca
let form = document.querySelector("#form");

// Seleciona o campo de entrada do formulário
let inputF = document.querySelector("#inputForm");

// Seleciona onde será exibido o ID do Pokémon
let idPoke = document.querySelector("#idPokemon");

// Seleciona onde será exibido o nome do Pokémon
let nomePoke = document.querySelector("#nomePokemon");

// Seleciona onde será exibido o primeiro tipo do Pokémon
let tipo1Poke = document.querySelector("#tipo1");

// Seleciona onde será exibido o segundo tipo do Pokémon (caso exista)
let tipo2Poke = document.querySelector("#tipo2");

// Seleciona onde será exibida a habilidade do Pokémon
let habili = document.querySelector("#habilidade");

// Seleciona onde será exibido o peso do Pokémon
let peso = document.querySelector("#peso");

// Seleciona onde será exibida a altura do Pokémon
let altura = document.querySelector("#altura");

// Define o número atual da Pokédex, começando por 1
let numeroPokeDex = 1;

// Função que busca os dados do Pokémon na API
const fetchPokemon = async(pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`); // Faz requisição à API com o nome ou número do Pokémon
    const data = await APIresponse.json(); // Converte a resposta para JSON
    return data; // Retorna os dados
}

// Função que mostra os dados do Pokémon na tela
const showPokemon = async(pokemon) => {
    const data = await fetchPokemon(pokemon); // Busca os dados do Pokémon
segundaImagem(data.sprites.other.showdown.front_default,data.sprites.front_default); //chamando a função para aparecer a imagem
    nomePoke.innerHTML = data.name; // Exibe o nome do Pokémon
    idPoke.innerHTML ="ID: "+ data.id; // Exibe o ID
    tipo1Poke.innerHTML = "Tipo: " + data.types[0].type.name; // Exibe o primeiro tipo

    // Verifica se há um segundo tipo e exibe, se existir
    if (data.types[1] != undefined) {
        tipo2.innerHTML = "Extra: " + data.types[1].type.name;
    } else {
        tipo2.innerHTML = ""; // Limpa se não houver segundo tipo
    }

    habili.innerHTML = "Habilidade:  " + data.abilities[0].ability.name; // Exibe a habilidade
    peso.innerHTML = "Peso:  " + parseInt(data.weight / 10) + "kg"; // Converte o peso para kg
    altura.innerHTML = "Altura:  " + data.height/10 + "m"; // Converte a altura para metros

    // Reproduz o som do Pokémon (cries)
    const audio = new Audio(data.cries.latest);
    audio.play();
}

// Adiciona evento ao formulário para buscar Pokémon ao enviar
form.addEventListener("submit", (event) =>{
    event.preventDefault(); // Impede o recarregamento da página
    showPokemon(inputF.value.toLowerCase()); // Mostra o Pokémon digitado no input (em letras minúsculas)
    numeroPokeDex = inputF.value // Atualiza o número da Pokédex atual
})

// Seleciona os botões de "próximo" e "voltar"
let next = document.querySelector('#proximo');
let back = document.querySelector('#voltar');

// Evento de clique para o botão "próximo"
next.addEventListener('click', (event) => {
    if(numeroPokeDex < 1000){ // Limita até 1000 Pokémon
        numeroPokeDex++; // Incrementa o número da Pokédex
    }
    showPokemon(numeroPokeDex); // Mostra o próximo Pokémon
})

// Evento de clique para o botão "voltar"
back.addEventListener('click', (event) => {
    if(numeroPokeDex > 1){ // Impede de ir abaixo de 1
        numeroPokeDex--; // Decrementa o número da Pokédex
    }
    showPokemon(numeroPokeDex); // Mostra o Pokémon anterior
})

// função que faz a imagem não repetir 

function segundaImagem(gif,image){
    imgPokemon.src = gif;
    imgPokemon.onerror = function(){
        this.onerror = null;
        this.src = image;
    }
return
}


// Exibe o primeiro Pokémon assim que a página carrega
showPokemon(numeroPokeDex);

// Função que toca o som do Pokémon (chamada por outro botão ou evento)
const som = document.getElementById('somPokemon');
document.addEventListener('click', () => {
  som.muted = false;
  som.play();
});