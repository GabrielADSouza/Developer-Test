//Definir a string a ser invertida
const str = "Quero ser contratado pela Target Sistemas";

// Converte a string em um array de caracteres
const chars = str.split("");

// Inverte a ordem dos caracteres no array
for (let i = 0; i < chars.length / 2; i++) {
  const temp = chars[i];
  chars[i] = chars[chars.length - 1 - i];
  chars[chars.length - 1 - i] = temp;
}

// Converte o array de caracteres de volta para uma string
const reversedStr = chars.join("");

// Imprime a string invertida
console.log(reversedStr);
