// fluxoDeRepeticoes.js
// Altere a variável menu para testar os exercícios

const menu = 10;

switch (menu) {
    case 1:
        console.log("Exercício 1 selecionado - Listar nomes com for...of.\n");
        listarNomes();
        break;

    case 2:
        console.log("Exercício 2 selecionado - Somar valores com for...of.\n");
        somarValores();
        break;

    case 3:
        console.log("Exercício 3 selecionado - Exibir propriedades de um objeto com for...in.\n");
        propriedadesObjeto();
        break;

    case 4:
        console.log("Exercício 4 selecionado - Contar quantas propriedades tem um objeto.\n");
        contarPropriedades();
        break;

    case 5:
        console.log("Exercício 5 selecionado - Concatenar nomes em uma string com for...of.\n");
        concatenarNomes();
        break;

    case 6:
        console.log("Exercício 6 selecionado - Imprimir tipos de dados de elementos de um array.\n");
        tiposArray();
        break;

    case 7:
        console.log("Exercício 7 selecionado - Transformar valores de um objeto.\n");
        somarIdades();
        break;

    case 8:
        console.log("Exercício 8 selecionado - Converter objeto em array de strings.\n");
        objetoParaArray();
        break;

    case 9:
        console.log("Exercício 9 selecionado - Contar quantos valores únicos existem em um array.\n");
        contarUnicos();
        break;

    case 10:
        console.log("Exercício 10 selecionado - Criar um objeto com a contagem de caracteres de uma frase.\n");
        contarCaracteres();
        break;
}

// =======================
// FUNÇÕES - Exercícios de fluxo de repetições
// =======================

// 1. Listar nomes com for...of
function listarNomes() {
    const nomes = ["Ana", "Lucas", "Pedro", "Maria", "Lorena"];

    for (let nome of nomes) {
        console.log(nome);
    }
}

// 2. Somar valores com for...of
function somarValores() {
    const numeros = [10, 20, 30, 40];
    let soma = 0;

    for (let num of numeros) {
        soma += num;
    }

    console.log("Total:", soma);
}

// 3. Exibir propriedades de um objeto com for...in
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

// 4. Contar quantas propriedades tem um objeto
function contarPropriedades() {
    const carro = {
        marca: "Hyundai",
        modelo: "Tucson",
        ano: 2026,
        cor: "Branco"
    };

    let contador = 0;

    for (let chave in carro) {
        contador++;
    }

    console.log("Quantidade de propriedades:", contador);
}

// 5. Concatenar nomes em uma string com for...of
function concatenarNomes() {
    const nomes = ["Ana", "Lorena", "Lucas", "Maria"];
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

// 6. Imprimir tipos de dados de elementos de um array
function tiposArray() {
    const lista = [10, "Olá", true, null, 5.5];

    for (let item of lista) {
        console.log(typeof item);
    }
}

// 7. Transformar valores de um objeto
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

// 8. Converter objeto em array de strings
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

// 9. Contar quantos valores únicos existem em um array
function contarUnicos() {
    const numeros = [1, 2, 2, 3, 4, 4, 5];
    const unicos = new Set();

    for (let num of numeros) {
        unicos.add(num);
    }

    console.log("Valores únicos:", unicos.size);
}

// 10. Criar um objeto com a contagem de caracteres de uma frase
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