// fluxoDeRepeticoes.js
// Altere a variável menu para testar os exercícios

const menu = 1;

switch (menu) {
    case 1:
        console.log("Exercício 1 selecionado.\n");
        listarNomes();
        break;

    case 2:
        console.log("Exercício 2 selecionado.\n");
        somarValores();
        break;

    case 3:
        console.log("Exercício 3 selecionado.\n");
        propriedadesObjeto();
        break;

    case 4:
        console.log("Exercício 4 selecionado.\n");
        contarPropriedades();
        break;

    case 5:
        console.log("Exercício 5 selecionado.\n");
        concatenarNomes();
        break;

    case 6:
        console.log("Exercício 6 selecionado.\n");
        tiposArray();
        break;

    case 7:
        console.log("Exercício 7 selecionado.\n");
        somarIdades();
        break;

    case 8:
        console.log("Exercício 8 selecionado.\n");
        objetoParaArray();
        break;

    case 9:
        console.log("Exercício 9 selecionado.\n");
        contarUnicos();
        break;

    case 10:
        console.log("Exercício 10 selecionado.\n");
        contarCaracteres();
        break;

    default:
        console.log("Opção inválida.");
}

// =======================
// FUNÇÕES
// =======================

// 1
function listarNomes() {
    const nomes = ["Ana", "Lucas", "Pedro", "Maria", "Lorena"];

    for (let nome of nomes) {
        console.log(nome);
    }
}

// 2
function somarValores() {
    const numeros = [10, 20, 30, 40];
    let soma = 0;

    for (let num of numeros) {
        soma += num;
    }

    console.log("Total:", soma);
}

// 3
function propriedadesObjeto() {
    const pessoa = {
        nome: "Lorena",
        idade: 17,
        cidade: "Campinas"
    };

    for (let chave in pessoa) {
        console.log(chave + ": " + pessoa[chave]);
    }
}

// 4
function contarPropriedades() {
    const carro = {
        marca: "Fiat",
        modelo: "Uno",
        ano: 2020,
        cor: "Prata"
    };

    let contador = 0;

    for (let chave in carro) {
        contador++;
    }

    console.log("Quantidade de propriedades:", contador);
}

// 5
function concatenarNomes() {
    const nomes = ["Ana", "Pedro", "Lucas", "Maria"];
    let texto = "";

    for (let nome of nomes) {
        if (texto === "") {
            texto = nome;
        } else {
            texto += ", " + nome;
        }
    }

    console.log(texto);
}

// 6
function tiposArray() {
    const lista = [10, "Olá", true, null, 5.5];

    for (let item of lista) {
        console.log(typeof item);
    }
}

// 7
function somarIdades() {
    const pessoas = {
        Ana: 20,
        Pedro: 18,
        Lucas: 25
    };

    for (let nome in pessoas) {
        pessoas[nome] = pessoas[nome] + 1;
    }

    console.log(pessoas);
}

// 8
function objetoParaArray() {
    const produto = {
        nome: "Notebook",
        preco: 3500,
        marca: "Dell"
    };

    const lista = [];

    for (let chave in produto) {
        lista.push(chave + ": " + produto[chave]);
    }

    console.log(lista);
}

// 9
function contarUnicos() {
    const numeros = [1, 2, 2, 3, 4, 4, 5];
    const unicos = new Set();

    for (let num of numeros) {
        unicos.add(num);
    }

    console.log("Valores únicos:", unicos.size);
}

// 10
function contarCaracteres() {
    const frase = "javascript";
    const letras = {};

    for (let letra of frase) {
        if (letras[letra]) {
            letras[letra]++;
        } else {
            letras[letra] = 1;
        }
    }

    console.log(letras);
}