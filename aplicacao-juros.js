import entradaDados from 'readline-sync';

console.log("Aplicação de Juros:");

let valor_juros;

let valor_divida = Number(entradaDados.question("\nInforme o valor devido: R$ "));

if (valor_divida > 0) {
    let dias_vencimento = Number(entradaDados.question("Informe quantos dias se passaram desde o vencimento do boleto: "));

    if (dias_vencimento > 0) {
        valor_juros = dias_vencimento > 15 ? 10 : 5;

        let total_juros = (valor_divida / 100) * valor_juros;
        let valor_total = valor_divida + total_juros;

        console.log("\nResumo da Dívida:");
        console.log("Valor original da dívida: R$ " + valor_divida.toFixed(2));
        console.log("Dias atrasados: " + dias_vencimento);
        console.log("Taxa de Juros: " + valor_juros + "%");
        console.log("Valor total com juros: R$ " + valor_total.toFixed(2));
    } else {
        console.log("Você está em dia!");
    }
} else {
    console.log("O valor da dívida deve ser maior que zero!");
}
