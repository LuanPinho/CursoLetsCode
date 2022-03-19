let lancamento = [];

let objeto = {
  nome:"",
  valor:"",
  tipo:"",
  data:""
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
    }
    set deposito(i){
        this.#saldo += i;
    }
    set saldo(saldo){
        this.#saldo = saldo;
    }
    get saldo(){
        return this.#saldo;
    }

    // métodos
    transferencia (valorDaTranferencia){
        if (valorDaTranferencia <= this.#saldo || this.leasing){
            this.#saldo = this.#saldo - valorDaTranferencia;
            var data = new Date();
            objeto = {
                nome:this.nome,
                valor:valorDaTranferencia,
                tipo:"Transferencia",
                data:`${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
              }
            lancamento.push(objeto)
            return `Seu saldo é ${this.#saldo} e foi transferido ${valorDaTranferencia}`
        } else {
            return ("Saldo insuficiente. Leasing está desativado.")
        }
    }

    saque (valorDoSaque){
        if (valorDoSaque <= this.#saldo || this.leasing){
            this.#saldo = this.#saldo - valorDoSaque;
            var data = new Date();
            objeto = {
                nome:this.nome,
                valor:valorDoSaque,
                tipo:"Saque",
                data:`${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
              }
            lancamento.push(objeto)
            console.log(`Seu saldo é ${this.#saldo} e foi sacado ${valorDoSaque}`)
        } else {
            console.log("Não é possivel sacar")
        }
    }

    pagarBoleto(valorBoleto, diaVencimento){
        var venc = new Date(diaVencimento);
        var hoje = new Date();
        
        var objetoBoleto = {
            nome:this.nome,
            valor:valorBoleto,
            tipo:"Pagamento Boleto",
            data:`${hoje.getDate()}/${hoje.getMonth()}/${hoje.getFullYear()}`
        }
        
        var diff = venc - hoje;
        var diasAtraso = ((diff / 86400000) + 1).toFixed();
        var umDia = (valorBoleto * 1.01).toFixed(2).replace('.', ',');
        var doisDias = (valorBoleto + valorBoleto * 0.025).toFixed(2).replace('.', ',');
        var composto = valorBoleto + (valorBoleto * (1.03 * (diasAtraso * -1 / 100)));

        if(diasAtraso <= -3 && (composto <= this.#saldo || this.leasing)){
            this.#saldo = this.#saldo - parseFloat(composto);
            objeto.valor = parseFloat(composto);
            lancamento.push(objetoBoleto);
        } else if (diasAtraso <= -2 && (doisDias <= this.#saldo || this.leasing)){
            this.#saldo = this.#saldo - parseFloat(doisDias);
            objeto.valor = parseFloat(doisDias);
            lancamento.push(objetoBoleto);
        } else if (diasAtraso <= -1 && (umDia <= this.#saldo || this.leasing)){
            this.#saldo = this.#saldo - parseFloat(umDia);
            objeto.valor = parseFloat(umDia);
            lancamento.push(objetoBoleto);
        } else if (valorBoleto <= this.#saldo || this.leasing){
            this.#saldo = this.#saldo - valorBoleto;
            lancamento.push(objetoBoleto);
        } else {
            console.log("Sem Saldo");
        }
    }
}

// classe "Filho"
class PF extends Conta{
    #CPF// propriedade privada

    // função construtora
    constructor(nome, CPF, conta, agencia, saldo,leasing){
      super (nome,conta, agencia, saldo,leasing)
      this.#CPF = CPF;
    }

    // método dados da pessoa física
    get dadosPf(){
        return `Seu nome é ${this.nome}, do CPF ${this.#CPF}, sua conta é ${this.conta} e agência ${this.agencia}`
    }
    // acesso individual a propriedade privada "CPF"
    get CPF(){
        return this.#CPF
    }
    novodia(){
        this.calcLeasing()
    }
    calcLeasing (){
        if (this.saldo < 0 ){
            this.saldo = (this.saldo * 1.005);
        }
    }
}

// classe "Neto"
class PJ extends Conta{
    #CNPJ // propriedade privada
    // função construtora
    constructor(nome, CPF, conta, agencia, saldo, CNPJ = '', empresa = '',leasing){
        super (nome, CPF, conta, agencia, saldo,leasing)
        this.#CNPJ = CNPJ;
        this.empresa = empresa;
    }
    // método dados de pessoa Jurídica
    get dadosPj(){
        return `Seu nome é ${this.nome}, do CPF ${this.CPF}, sua conta é ${this.conta} e agência ${this.agencia}, CNPJ ${this.#CNPJ} e empresa ${this.empresa}`
    }

    // acesso individual a propriedade privada "CNPJ"
    get CNPJ(){
        return this.#CNPJ
    }
    novodia(){
        this.calcLeasing()
    }
    calcLeasing (){
        if (this.saldo < 0 ){
            this.saldo = (this.saldo * 1.01);
        }
    }
}

const cliente = new PF("Augusto", 123456,'12355-3', "703",4000,true);

console.log(cliente)
// cliente.saque(5000,true);
cliente.pagarBoleto(4100,'2022/03/10')
cliente.saque(200)
// console.log(cliente.saldo)
cliente.novodia()


// cliente.saque(200);
// cliente.transferencia(50);
// cliente.pagarBoleto(100, "2022/03/17");
// cliente.pagarBoleto(250, "2022/03/16");
// cliente.pagarBoleto(500, "2022/03/10");
// cliente.pagarBoleto(75, "2022/03/23");
// console.log(lancamento);


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