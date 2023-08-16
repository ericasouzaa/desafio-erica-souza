class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {

        const cardapio = {
            "cafe": 3.00,
            "chantily": 1.50,
            "suco": 6.20,
            "sanduiche": 6.50,
            "queijo": 2.00,
            "salgado": 7.25,
            "combo1": 9.50,
            "combo2": 7.50
        }

        const opcoesPagamento = ["dinheiro", "debito", "credito"]
        let total = 0

        if (opcoesPagamento.includes(metodoDePagamento)) {
            if (itens.length > 0) {
                let pedido = {}

                for(let i = 0; i < itens.length; i++){
                    let item = itens[i].split(",")

                    if (item[1] < 1) {
                        return "Quantidade inválida!"
                    } else if (!(item[0] in cardapio)) {
                        return "Item inválido!"
                    } else {
                        pedido[item[0]] = item[1] 
                    }
                }

                if (("chantily" in pedido && !("cafe" in pedido)) || ("queijo" in pedido && !("sanduiche" in pedido))){
                    return "Item extra não pode ser pedido sem o principal"
                } else {
                    for (const nomeItem in pedido) {
                        total = total + cardapio[nomeItem] * pedido[nomeItem]
                    }

                    if (metodoDePagamento === "dinheiro") {
                        total = (total * 0.95)
                        return `R$ ${total.toFixed(2).toString().replace('.', ',')}`
                    } else if (metodoDePagamento === "credito") {
                        total = (total * 1.03)
                        return `R$ ${total.toFixed(2).toString().replace('.', ',')}`
                    } else {
                        return `R$ ${total.toFixed(2).toString().replace('.', ',')}`
                    }
                }

            } else {
                return "Não há itens no carrinho de compra!"
            }
        } else {
            return "Forma de pagamento inválida!"
        }
    }

}

export { CaixaDaLanchonete };