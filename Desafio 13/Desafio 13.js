function exibirAleatoriamente() {
    let nomes = ["Maria", "João", "Fulano", "Sicrano", "Beltrano", "Mario", "Joana", "Fulana", "Sicrana", "Beltrana"];

    const i = Math.floor(Math.random() * nomes.length);
    const nomeAleatorio = nomes[i];

    return nomeAleatorio; 
}

console.log(exibirAleatoriamente());
