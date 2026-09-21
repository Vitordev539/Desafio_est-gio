// Lista de produtos e seus estoques iniciais
const estoque = [
    {
        codigoProduto: 101,
        descricaoProduto: "Caneta Azul",
        estoque: 150
    },
    {
        codigoProduto: 102,
        descricaoProduto: "Caderno Universitário",
        estoque: 75
    },
    {
        codigoProduto: 103,
        descricaoProduto: "Borracha Branca",
        estoque: 200
    },
    {
        codigoProduto: 104,
        descricaoProduto: "Lápis Preto HB",
        estoque: 320
    },
    {
        codigoProduto: 105,
        descricaoProduto: "Marcador de Texto Amarelo",
        estoque: 90
    }
];

// Array que vai guardar todas as movimentações realizadas
const movimentacoes = [];

function lancarMovimentacao(movimentacao) {

    // Verifica se o ID da movimentação já foi utilizado
    const idExiste = movimentacoes.some(function(item) {
        return item.id === movimentacao.id;
    });

    if (idExiste) {
        console.log("Esse ID já foi utilizado.");
        return;
    }

    // Procura o produto pelo código informado na movimentação
    const produto = estoque.find(function(item) {
        return item.codigoProduto === movimentacao.codigoProduto;
    });

    if (!produto) {
        console.log("Produto não encontrado.");
        return;
    }

    // Se for entrada, adiciona a quantidade ao estoque
    if (movimentacao.descricao === "entrada") {

        produto.estoque += movimentacao.quantidade;

    // Se for saída, verifica se existe estoque suficiente
    } else if (movimentacao.descricao === "saida") {

        if (movimentacao.quantidade <= produto.estoque) {
            produto.estoque -= movimentacao.quantidade;
        } else {
            console.log("Estoque insuficiente.");
            return;
        }

    } else {
        console.log("Tipo de movimentação inválido.");
        return;
    }

    // Depois que tudo foi validado, guarda a movimentação
    movimentacoes.push(movimentacao);

    console.log("Movimentação realizada!");
    console.log("Produto:", produto.descricaoProduto);
    console.log("Estoque final:", produto.estoque);
}


// TESTES

// Saída de 20 Canetas Azuis
lancarMovimentacao({
    id: 1,
    codigoProduto: 101,
    descricao: "saida",
    quantidade: 20
});

// Entrada de 50 Canetas Azuis
lancarMovimentacao({
    id: 2,
    codigoProduto: 101,
    descricao: "entrada",
    quantidade: 50
});

// Saída de 10 Cadernos
lancarMovimentacao({
    id: 3,
    codigoProduto: 102,
    descricao: "saida",
    quantidade: 10
});

console.log("\nMovimentações realizadas:");
console.log(movimentacoes);

console.log("\nEstoque atualizado:");
console.log(estoque);