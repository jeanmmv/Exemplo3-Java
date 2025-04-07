// var nome = "FIAP";
// console.log(nome);

// let idade = "19";
// console.log(idade);

// const sobrenome = "Faculdade";
// console.log(sobrenome);

// //declarando vaiáel indefinida
// let nome1;
// console.log(nome1);

// //declarando variávl nula
// let nome2 = null;
// console.log(nome2);

// //tipos de variáveis
// let exemplo1 = 10;
// console.log(typeof exemplo1);

// let exemplo2 = "energia";
// console.log(typeof exemplo2);

// let exemplo3 = {};
// console.log(typeof exemplo3);

// let exemplo4 = {};
// console.log(typeof exemplo4);

// //CONVERSÕES

// let numFloat = 1.233;
// console.log (parseInt (numFloat));

// let numString = "123.456";
// console.log(parseFloat(numString));

// //METODOS

// //lenght = verifica o tamanho da string
// let frase = "O mundo e suas tecnologias";
// console.log(frase.length);

// //indexOf - retorna um trecho do texto

// let texto = "A programaçãp indomável e sustentável";
// console.log(texto.indexOf(""));

// //slice - retorna um trecho do texto com inicio e final
// let info = "processamento de ponta";
// console.log(info.slice(8,10));

// // OPERADORES ARITMETICOS

// const num1 = 10;
// const num2 = 20;

// console.log(num1+num2);
// console.log(num1-num2);
// console.log(num1*num2);
// console.log(num1/num2);

// //OPERADORES LÓGICOS

// const num3 = 20;
// const num4 = "20";

// console.log(num3 < num4);
// console.log(num3 < num4 && num4 < num3); //&& - Significa condição de "e"
// console.log(num3 < num4 || num4 < num3); //|| - significa condição de "ou"

// //OPERADORES DE COMPARAÇÃO

// console.log(num3 == num4);
// console.log(num3 === num4); //Compara variaveis de mesmo tipo

//if
let num="10";

if (num=10){
    console.log("É verdadeiro!")
}

//if / else

let usuario="teste";
if(usuario = "teste"){
    console.log("Usuário correto")
} else {
    console.log("Usuário incorreto")
}

//if encadeado / aninhado

let idade = 15
if(idade < 15){
    console.log("Menor de idade")
} else if(idade > 15 && idade < 18){
 console.log("Não é maior de idade, porém é permitido a entrada sem o consumo de itens alcóolicos")
} else{
    console.log("Pode entrar sem restrições")
}

// switch

let time = "São paulo"

switch (time){
    case "São paulo":
        console.log("Melhor time")
        break;
    case "Corinthians":
        console.log("Acesso negado!")
        break;
    case "Palmeiras":
        console.log("Não tem Mundial")
        break;
    default:
        console.log ("Nenhuma das opções")
}

// ternario

let valor = 100

let resultado = valor == 100 ? "Certo" : "Errado"
console.log(resultado)

// ternatio encadeado
let produto = "notebook"
const desconto = true;
const  preco = produto === "notebook" ? desconto ? 100 : 200 : produto === "mouse" ? 30 : 100;
console.log(preco)