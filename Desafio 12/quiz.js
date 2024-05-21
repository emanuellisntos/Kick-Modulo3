alert('Bem vindo ao Quiz de Cultura Pop! :)');

const jogador = prompt('Qual o seu nome?');

let pontuacao = 0;

alert(`Certo, ${jogador}. Para jogar, basta responder com V para Verdadeiro e F para Falso, ok?`);
alert(`Vamos lá! :)`);

function exibirPergunta(pergunta) {
    return prompt(pergunta);
}

function verificarResposta(resposta, respostaCorreta) {
    if (resposta.toLowerCase() === respostaCorreta) {
        alert('Parabéns! Resposta correta.');
        pontuacao++;
    } else {
        alert('Resposta incorreta.');
    }
}

function quiz() {
    let resposta = exibirPergunta("O filme 'Titanic' ganhou 10 Oscars.");
    verificarResposta(resposta, "f");

    resposta = exibirPergunta("'Harry Potter e a Pedra Filosofal' foi o primeiro livro da série escrita por J.K. Rowling. Verdadeiro ou falso?");
    verificarResposta(resposta, "v");

    resposta = exibirPergunta("O álbum 'Thriller' de Michael Jackson é o álbum mais vendido de todos os tempos. Verdadeiro ou falso?");
    verificarResposta(resposta, "v");

    resposta = exibirPergunta("O personagem principal da série de TV 'Breaking Bad' é um professor de química que começa a produzir metanfetamina. Verdadeiro ou falso?");
    verificarResposta(resposta, "v");

    resposta = exibirPergunta("O personagem Darth Vader é o tio de Luke Skywalker na saga 'Star Wars'. Verdadeiro ou falso?");
    verificarResposta(resposta, "f");

    resposta = exibirPergunta("O personagem Homem de Ferro faz parte do universo cinematográfico da DC Comics. Verdadeiro ou falso?");
    verificarResposta(resposta, "f");

    resposta = exibirPergunta("O diretor Quentin Tarantino dirigiu o filme 'Pulp Fiction'. Verdadeiro ou falso?");
    verificarResposta(resposta, "v");

    resposta = exibirPergunta("O personagem Batman é conhecido como o Cavaleiro das Trevas. Verdadeiro ou falso?");
    verificarResposta(resposta, "v");

    resposta = exibirPergunta("O diretor Steven Spielberg dirigiu o filme 'Jurassic Park'. Verdadeiro ou falso?");
    verificarResposta(resposta, "v");

    resposta = exibirPergunta("O personagem Tony Stark, também conhecido como Homem de Ferro, é interpretado pelo ator Robert Downey Jr. nos filmes da Marvel. Verdadeiro ou falso?");
    verificarResposta(resposta, "v");

    resposta = exibirPergunta("O personagem Capitão América tem um escudo feito de vibranium. Verdadeiro ou falso?");
    verificarResposta(resposta, "v");

    resposta = exibirPergunta("O filme 'Avatar', dirigido por James Cameron, é o filme com a maior bilheteria de todos os tempos. Verdadeiro ou falso?");
    verificarResposta(resposta, "v");

    resposta = exibirPergunta("O personagem Wolverine faz parte da equipe de super-heróis conhecida como X-Men. Verdadeiro ou falso?");
    verificarResposta(resposta, "v");

    resposta = exibirPergunta("A série de TV 'Stranger Things' se passa na década de 1980. Verdadeiro ou falso?");
    verificarResposta(resposta, "v");
}

quiz();

alert(`Agradecemos por jogar, ${jogador}! Sua pontuação foi: ${pontuacao} pontos.`);
