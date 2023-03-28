//Calcular média e faturamento
const dados =
  '{ "faturamento" : [' +
  '{ "dia":"1" , "valor":"25" },' +
  '{ "dia":"2" , "valor":"20" },' +
  '{ "dia":"3" , "valor":"30" } ]}';

const obj = JSON.parse(dados);

//Colocando objetos no vetor para comparar
let temp = [];

for (let i = 0; i < obj.faturamento.length; i++) {
  temp[i] = obj.faturamento[i].valor;
}

//Cálculos para descobrir a média
let sum = 0;

for (let i = 0; i < temp.length; i++) {
  sum += temp[i] / 1;
}

const average = sum / temp.length;

//Cálculos para descobrir dias maiores que a média mensal
let mediaDays = 0;

for (let i = 0; i < obj.faturamento.length; i++) {
  if (obj.faturamento[i].valor / 1 > average) {
    mediaDays++;
  }
}

//saída
console.log("Menor valor:", Math.min.apply(Math, temp));
console.log("Maior valor:", Math.max.apply(Math, temp));
console.log("Dias que o faturamento foi maior que a média mensal:", mediaDays);
