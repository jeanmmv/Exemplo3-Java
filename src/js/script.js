var nome = "FIAP";
console.log(nome);

let idade = "19";
console.log(idade);

const sobrenome = "Faculdade";
console.log(sobrenome);

//declarando vaiáel indefinida
let nome1;
console.log(nome1);

//declarando variávl nula
let nome2 = null;
console.log(nome2);

//tipos de variáveis
let exemplo1 = 10;
console.log(typeof exemplo1);

let exemplo2 = "energia";
console.log(typeof exemplo2);

let exemplo3 = {};
console.log(typeof exemplo3);

let exemplo4 = {};
console.log(typeof exemplo4);

//CONVERSÕES

let numFloat = 1.233;
console.log (parseInt (numFloat));

let numString = "123.456";
console.log(parseFloat(numString));

//METODOS

//lenght = verifica o tamanho da string
let frase = "O mundo e suas tecnologias"
console.log(frase.length);

//indexOf - retorna um trecho do texto

let texto = "A programaçãp indomável e sustentável";
console.log(texto.indexOf(""));

//slice - retorna um trecho do texto com inicio e final
let info = "processamento de ponta";
console.log(info.slice(8,10))