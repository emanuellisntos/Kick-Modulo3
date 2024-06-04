// Array inicial de desenhos animados dos anos 2000
let desenhosAnimados = [ // Erro 1. Para englobar itens em um array se usa [] e não ();
    "Bob Esponja",
    "Os Padrinhos Mágicos",
    "Kim Possible",
    "As Aventuras de Jackie Chan",
    "Hora de Aventura",
    "Avatar: A Lenda de Aang",
    "Ben 10", // Erro 2. Não havia o fechamento de aspas no item;
    "X-Men: Evolution",
    "Duck Dodgers",
    "Danny Phantom"
];

let indiceSubstituicao = 0; // Índice para controlar a substituição

// Função para exibir a lista de desenhos animados
function exibirLista() {
    const lista = document.getElementById('lista-desenhos'); // Erro 3. A função correta é .getElementByClassName() e não apenas getElementByClass();
    lista.innerHTML = ''; // Limpa a lista antes de preenchê-la novamente

    desenhosAnimados.forEach(desenho => {
        const item = document.createElement("li"); // Erro 4. O elemento a ser criado (li) deve ser tratado como string (entre aspas);
        item.textContent = desenho;
        lista.appendChild(item);
    });
}

// Função para adicionar um novo desenho
function adicionarDesenho() {
    const novoDesenho = document.getElementById('novo-desenho').value; // Erro 5. O valor do input não seria acessado sem o .value;
    if (novoDesenho.trim() !== '') {
        desenhosAnimados[indiceSubstituicao] = novoDesenho; // Substitui o elemento no índice atual
        indiceSubstituicao = (indiceSubstituicao + 1) % desenhosAnimados.length; // Atualiza o índice para a próxima substituição
        exibirLista(); // Atualiza a exibição da lista // Erro 6. Faltou o () ao chamar a função exibirLista;
        document.getElementById('novo-desenho').value = ''; // Limpa o input
    }
}

// Exibe a lista inicial quando a página carrega
window.onload = exibirLista; // Erro 7. Faltou a função exibirLista ser atríbuida ao evento window.onload;
