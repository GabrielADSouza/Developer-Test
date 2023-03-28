// Define o faturamento mensal por estado
const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

//Cálculo do faturamento total
const faturamentoTotal = Object.values(faturamento).reduce(
  (acc, curr) => acc + curr,
  0
);

//Calcula o percentual de representação de cada estado
for (const [estado, valor] of Object.entries(faturamento)) {
  const percentual = (valor / faturamentoTotal) * 100;
  console.log(`${estado}: ${percentual.toFixed(2)}%`);
}
