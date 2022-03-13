/*class Restaurante{
    constructor(cidade,delivery = false ,pedPend=0){
        this.cidade = cidade;
        this.delivery = delivery;
        this.pedPend = pedPend;
        this.tempEntregEst = 10 + 2 * pedPend;
    }

    EntregaPedido(cidadecliente) {
        if (this.cidade != cidadecliente){
            return `Não entregamos em ${cidadecliente}`;
        }   

        this.pedPend ++
        this.tempEntregEst = 10 + 2 * this.tempEntregEst
        return `Tempo de entrega estimado é de: ${this.tempEntregEst} minutos`;
    };
}
const churrascaria = new Restaurante('bh',true)
console.log(churrascaria.EntregaPedido('gh'))*/



class Restaurante{
    #tempEntregEst
    constructor(cidade,delivery = false ,pedPend=0){
        this.cidade = cidade;
        this.delivery = delivery;
        this.pedPend = pedPend;
        this.#tempEntregEst = this.#formTempEntrega();
    }

    EntregaPedido(cidadecliente) {
        if (this.cidade != cidadecliente){
            return `Não entregamos em ${cidadecliente}`;
        }   

        this.pedPend += 1;
        this.#tempEntregEst = 10 + 2 * this.#tempEntregEst;
        return `Tempo de entrega estimado é de: ${this.tempEntregEst} minutos`;
    };

    #formTempEntrega = () => {
        return 10 + 2 * this.pedPend;
    }
}


const churrascariaPrivada = new Restaurante('bh',true);
console.log(churrascariaPrivada.EntregaPedido('gh'));