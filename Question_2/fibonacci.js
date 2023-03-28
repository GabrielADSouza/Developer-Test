//Fibonacci
function fibonacci(n) {
  //Inicia a sequência de Fibonacci com 0 e 1
  let fib = [0, 1];

  //Adiciona os próximos valores na sequência até chegar em n ou ultrapassá-lo
  while (fib[fib.length - 1] < n) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }

  //Verifica se n pertence à sequência
  if (fib.includes(n)) {
    console.log(n + " pertence à sequência de Fibonacci");
  } else {
    console.log(n + " não pertence à sequência de Fibonacci");
  }
}

//Exemplo de uso
fibonacci(13);
