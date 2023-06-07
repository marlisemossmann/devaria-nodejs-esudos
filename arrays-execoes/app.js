try {
    const listaDeProdutosDisponiveis = [
        "Pao",
        "Leite",
        "Cafe",
        "Detergente",
        "Laranja",
        "Macarrao",
        "Sabonete",
    ];
    
    const listaDeArgumentos = process.argv.slice(2);
    
    const listaDeProdutosSolicitadosDiponiveis = listaDeProdutosDisponivei.filter(produto =>{
        return listaDeArgumentos.find(argumento => argumento === produto);
    });
    listaDeProdutosSolicitadosDiponiveis.forEach(produto => console.log("Este produto nós temos: ${produto}"));
    
    const listaDeProdutosSolicitadosNaoDiponiveis = listaDeArgumentos.filter(argumento => {
        return listaDeProdutosDisponiveis.find(produto => produto === argumento);
    });
    listaDeProdutosSolicitadosNaoDiponiveis.forEach(argumento => console.log ("Este produto não temos: ${argumento}"));

    listaDeProdutosDisponiveis.sert();
    listaDeProdutosDisponiveis.forEach(produto => console.log ("Este produto está disponível"));
} catch (error) {
    console.log("Não foi possível executar pedido de compra");
}

