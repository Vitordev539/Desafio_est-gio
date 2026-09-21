const dados = {
    vendas: [
        { vendedor: "João Silva", valor: 1200.50 },
        { vendedor: "João Silva", valor: 950.75 },
        { vendedor: "João Silva", valor: 1800.00 },
        { vendedor: "João Silva", valor: 1400.30 },
        { vendedor: "João Silva", valor: 1100.90 },
        { vendedor: "João Silva", valor: 1550.00 },
        { vendedor: "João Silva", valor: 1700.80 },
        { vendedor: "João Silva", valor: 250.30 },
        { vendedor: "João Silva", valor: 480.75 },
        { vendedor: "João Silva", valor: 320.40 },

        { vendedor: "Maria Souza", valor: 2100.40 },
        { vendedor: "Maria Souza", valor: 1350.60 },
        { vendedor: "Maria Souza", valor: 950.20 },
        { vendedor: "Maria Souza", valor: 1600.75 },
        { vendedor: "Maria Souza", valor: 1750.00 },
        { vendedor: "Maria Souza", valor: 1450.90 },
        { vendedor: "Maria Souza", valor: 400.50 },
        { vendedor: "Maria Souza", valor: 180.20 },
        { vendedor: "Maria Souza", valor: 90.75 },

        { vendedor: "Carlos Oliveira", valor: 800.50 },
        { vendedor: "Carlos Oliveira", valor: 1200.00 }
    ]
};

const comissoes = {};

for (const venda of dados.vendas) {

    let comissao = 0;

    if (venda.valor < 100) {
        comissao = 0;
    } else if (venda.valor < 500) {
        comissao = venda.valor * 0.01;
    } else {
        comissao = venda.valor * 0.05;
    }

    if (comissoes[venda.vendedor] === undefined) {
        comissoes[venda.vendedor] = 0;
    }

    comissoes[venda.vendedor] += comissao;
}

console.log(comissoes);