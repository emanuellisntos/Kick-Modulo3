alert("Seja bem vindo às eleições Kick! :)");

var votosJavaScript = 0;
var votosCSS = 0;
var votosHTML = 0;
var votosPython = 0;
var votosNulo = 0;

var continuarVotando = true;

while (continuarVotando) {
    var voto = prompt("Selecione um candidato para votar (utilize as teclas 1, 2, 3, 4 e 5):\n1. JavaScript de Oliveira\n2. CSS da Silva\n3. HTML Júnior\n4. Python dos Santos\n5. Voto nulo/branco.");

    switch (voto) {
        case "1":
            votosJavaScript++;
            alert("Você votou no JavaScript de Oliveira. Agradecemos seu voto!");
            break;

        case "2":
            votosCSS++;
            alert("Você votou no CSS da Silva. Agradecemos seu voto!");
            break;

        case "3":
            votosHTML++;
            alert("Você votou no HTML Júnior. Agradecemos seu voto!");
            break;

        case "4":
            votosPython++;
            alert("Você votou no Python dos Santos. Agradecemos seu voto!");
            break;

        case "5":
            votosNulo++;
            alert("Você votou nulo/branco. Agradecemos seu voto!");
            break;

        default:
            alert("Opção inválida. Tente novamente.");
            break;
    }

    var opcao = prompt("Você deseja:\n1. Votar novamente.\n2. Sair da votação.");
    if (opcao !== "1") {
        continuarVotando = false;
    }
}

alert("Resultado da votação:\nJavaScript de Oliveira: " + votosJavaScript + " votos\nCSS da Silva: " + votosCSS + " votos\nHTML Júnior: " + votosHTML + " votos\nPython dos Santos: " + votosPython + " votos\nVotos nulos/brancos: " + votosNulo + " votos");
alert("Fim da eleição. Agradecemos todos os votos! :)")