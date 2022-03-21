let lancamentos = [];
let dthj = new Date()
let dthoje =  dthj.toLocaleDateString(); 

function validaData(data) {
    if (data.length != 10) {
        console.log('A data tem que possuir 10 caracteres. Deve ser dd/mm/aaaa.')
        return false
    }
    var dia = parseInt(data.substring(0,2));
    var mes = parseInt(data.substring(3,5));
    var ano = parseInt(data.substring(6,10));

    if (ano >= 1900 && ano <= 2050 && mes >= 1 && mes <= 12 && dia >= 1) {
        
            if ([1,3,5,7,8,10,12].includes(mes)){
                if (dia <= 31){
                    return true
                }
            }
            if ([4,6,9,11].includes(mes)){
                if (dia <= 30){
                    return true
                }
            }
            if (mes == 2 && (ano % 4) == 0){ // quando o ano for divisivel por 4
                
                if ((ano % 100) == 0 && (ano % 400) != 0){ //quando o ano é divisivel por 4 mas nao é bissexto
                    if (dia <=28){
                        return true
                    } else {return false}
                }

                if (dia <=29){
                    return true
                } else {return false}
                
            } else {
                if (dia <=28){
                    return true
                } else {return false}
            }

    } else {
        console.log('Ano inválido, informe entre 1900 e 2050.')
    }
    return false
}
class Conta{
    #saldo // propriedade privada
    // função construtora
    constructor(nome, conta, agencia, saldo,leasing = false){
        this.nome = nome;
        this.conta = conta;
        this.agencia = agencia;
        this.#saldo = saldo;
        this.leasing = leasing;
        this.txLeasing = 0;
        this.extrato = [];

        this.objeto = {
            data: dthoje,
            tipo: 'Saldo inicial',
            valor: saldo,
            saldo: saldo
        }
        this.extrato.push(this.objeto)
    }
    set deposito(valor){
        this.#saldo += parseFloat(valor.toFixed(2));
    }
    // set saldo(saldo){
    //     this.#saldo = saldo;
    // }
    get saldo(){
        return this.#saldo;
    }
    
    getExtrato(){
        var ext = this.extrato
        ext.push({
            data: dthoje,
            tipo: 'SALDO ATUAL',
            valor: "-",
            saldo: parseFloat(this.#saldo.toFixed(2))
        })
        console.table(ext)
    }

    getExtratoLeasing(){

    }
    deposito(valor){
        this.objeto = {
            tipo:'Depósito',
            valor: parseFloat(valor.toFixed(2)),
            data:dthoje,
            saldo: parseFloat(this.#saldo.toFixed(2))
        }
        this.extrato.push(this.objeto)
        this.#saldo += parseFloat(valor.toFixed(2))
    }
    // métodos
    transferencia (valorDaTranferencia, agenciaDestino,contaDestino){
        if (valorDaTranferencia <= this.#saldo || this.leasing){
            this.objeto = {
                tipo:'Transferência',
                valor: parseFloat(valorDaTranferencia.toFixed(2)) * (-1),
                data:dthoje,
                saldo: parseFloat(this.#saldo.toFixed(2))
            }
            this.#saldo = parseFloat(this.#saldo.toFixed(2)) - parseFloat(valorDaTranferencia.toFixed(2));
            this.extrato.push(this.objeto)
            console.log(`Transferência realizada com sucesso. Saldo atual: ${this.#saldo}`)
        } else {
            console.log("Seu saldo é insuficiente para essa operação. Você pode ativar a função Leasing com seu gerente.")
        }
    }

    saque (valorDoSaque){
        if (valorDoSaque <= this.#saldo || this.leasing){
            this.#saldo -=  parseFloat(valorDoSaque.toFixed(2));
            this.objeto = {
                tipo:'Saque',
                valor: parseFloat(valorDoSaque.toFixed(2)) * (-1),
                data:dthoje,
                saldo: parseFloat(this.#saldo.toFixed(2))
            }
            this.extrato.push(this.objeto)
            console.log(`Saque realizado com sucesso. Saldo atual: ${this.#saldo}`)
        } else {
            console.log("Não é possivel sacar")
        }
    }

    pagarBoleto(valorBoleto, vencimento){
        if (!(validaData(vencimento))){
            return console.log('Não é possível pagar o boleto. Data inválida')
        } 
        var dia = parseInt(vencimento.substring(0,2));
        var mes = parseInt(vencimento.substring(3,5));
        var ano = parseInt(vencimento.substring(6,10));
        var venc = new Date(ano,(mes-1),dia);


        function calcjuros(dias = 0) {
            if (dias < 1) {
                return 0.00;
            }else if (dias == 1) {
                return parseFloat((valorBoleto * 1.01).toFixed(2));
            }else if (dias == 2) {
                return parseFloat((valorBoleto * 1.025).toFixed(2));
            } else{
                return ((valorBoleto * 0.03) * dias);
            }
        }


        var diasAtraso = Math.abs(dthj.getTime() - venc.getTime());
        diasAtraso = Math.ceil(diasAtraso / (1000 * 60 * 60 * 24)) - 1;
        var multa = parseFloat(valorBoleto) * 0.1;
        var totjuros = parseFloat(calcjuros(diasAtraso).toFixed(2))
       
        var valTot = parseFloat(valorBoleto) + parseFloat(multa) + parseFloat(totjuros)

        this.#saldo -= parseFloat((valTot).toFixed(2));
        this.objeto = {
            tipo:'Pag Boleto',
            data:dthoje,
            valor: parseFloat(valTot.toFixed(2) * -1),
            saldo: parseFloat(this.#saldo.toFixed(2))
        }

        this.extrato.push(this.objeto);
    }
    novodia(dias = 1){
        for (let index = 1; index <= dias; index++) {
            dthj = new Date(dthj.getTime() + (24 * 60 * 60 * 1000)); 
            dthoje = dthj.toLocaleDateString()
            this.calcLeasing()
        }
    }
    calcLeasing (){
        if (this.#saldo < 0 ){
            var valor = parseFloat((this.#saldo * this.txLeasing).toFixed(2));
            this.objeto = {
                tipo:'Juros Cheque Especial',
                valor: valor,
                data: dthoje,
                saldo: parseFloat(this.#saldo.toFixed(2))
            }
            this.#saldo += valor;
            this.extrato.push(this.objeto)
        }
    }
}

// classe "Filho"
class PF extends Conta{
    #CPF// propriedade privada

    // função construtora
    constructor(nome, cpf, conta, agencia, saldo,leasing){
      super (nome,conta, agencia, saldo,leasing)
      this.#CPF = cpf;
      this.txLeasing = 0.01;
    }

    // método dados da pessoa física
    get dadosPf(){
        return `Seu nome é ${this.nome}, do CPF ${this.#CPF}, sua conta é ${this.conta} e agência ${this.agencia}`
    }
    // acesso individual a propriedade privada "CPF"
    get CPF(){
        return this.#CPF
    }   
}

// classe "Neto"
class PJ extends Conta{
    #CNPJ // propriedade privada
    // função construtora
    constructor(nome,cnpj, conta, agencia, saldo,leasing){
        super (nome,conta, agencia, saldo,leasing)
        this.#CNPJ = cnpj;
        this.txLeasing = 0.005;
    }
    // método dados de pessoa Jurídica
    get dadosPj(){
        return `Seu nome é ${this.nome}, do CPF ${this.CPF}, sua conta é ${this.conta} e agência ${this.agencia}, CNPJ ${this.#CNPJ} e empresa ${this.empresa}`
    }

    // acesso individual a propriedade privada "CNPJ"
    get CNPJ(){
        return this.#CNPJ
    }
}

const cliente = new PF("Augusto", 123456,'12355-3', "703",500,true);
//const vivo = new PJ ('Vivo',)
console.log(cliente)
// cliente.saque(5000,true);
cliente.saque(200)
cliente.pagarBoleto(597.78,'21/02/2022')
// console.log(cliente.saldo)
cliente.novodia(2)
cliente.deposito(200)
// cliente.saque(200);
cliente.transferencia(50);
// cliente.pagarBoleto(100, "29/01/2022");
// cliente.pagarBoleto(250, "29/01/2022");
// cliente.pagarBoleto(500, "2022/03/10");
// cliente.pagarBoleto(75, "2022/03/23");
cliente.novodia(2)
cliente.deposito(1000)
cliente.getExtrato()


// - Crie um método de Leasing para o cliente
// considerando as seguintes condições:
// - Se cliente PJ, considerar Juros diário de 1%
// - Se cliente PF, considerar juros diário de 0.5 %
// - Sempre que o usuário for fazer um saque, pagar uma conta, ou realizar 
// transferência e o saldo disponível em conta for menor que o valor da operação,  
// verificar se o mesmo quer fazer uso do Leasing, se sim, liberar o saque e informar o 
// valor negativo e a taxa de juros a ser aplicada.
// - Implementar um método que calcule e armazene o saldo do juros do leasing da conta, 
// sendo separado por data, para ser possível ver o quanto de juros de leasing o cliente 
// esta acumulando diariamente.
// [Saldo negativo:
// Juros Diário:
// Data:
// Juros Total Acumulado:]
// OBS: Sempre que o cliente entrar no cheque especial o metodo precisa ser invocado

// - Crie um método que irá verificar se o cliente está com cheque especial, 
// e se ocorrer um depósito em conta, é necessário abater o valor do cheque especial