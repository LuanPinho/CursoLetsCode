// Enunciado
// Faça uma classe Perfil que tem as seguintes informações: nome, avatar (foto de perfil) e tema. Utilize acessors (get/set) para garantir que o tema só pode ser "light" ou "dark" e que a foto de perfil deve ser uma url (iniciada com http ou https).


class perfil {
    #tema
    #avatar
    constructor (nome,avatar = '',tema = 0){
        this._nome = nome,
        this.setavatar(avatar),
        this.settema(tema)
    }

    settema (tema){
        if (tema == '0'){
           this.#tema = 'light'
        } else if (tema == '1'){
           this.#tema = 'dark'
        } else {
            if(this.#tema != undefined){
                console.log('Tema não alterado, pois o valor do parametro deve ser 0 para light ou 1 para dark')
            }{
                console.log('Valor de tema inválido, deve ser 0 para light ou 1 para dark. Foi atribuido o tema padrão.')
                this.#tema = 'light'
            }
        }
    }
    gettema(){
        return this.#tema
    }
    setavatar(avatar){
        var string = avatar.toString()
        if(string.substring(0,4).toUpperCase() == 'HTTP' || string.substring(0,5).toUpperCase() == 'HTTPS' ) {
            this.#avatar = string
        } else {
            if(this.#avatar != undefined){
                console.log('Avatar não alterado, pois o url é inválido, e deve começar com http ou https.')
            }else{
                console.log('Avatar não atribuido, pois o url é inválido, e deve começar com http ou https.')
                this.#avatar = 'vazio'
            }
        }
    }
    getavatar(){
        return this.#avatar
    }
}

const pess1 = new perfil('luan','http://1',1)

// pess1.settema(1)
console.log(pess1.gettema())

// pess1.setavatar('http//123')
console.log(pess1.getavatar())


// Faça uma classe SmartWatch com a contagem dos passos diários de uma pessoa (pedômetro). Garanta utilizando acessors (get/set) que os passos apenas podem ser incrementados e um método resetOnMidnight() que reseta os passos para 0.

class SmartWatch {
    #dia
    #mes
    #ano
    #passos
    constructor (){
        this.setData()
        this.#passos = 0   
    }
    setData(){
        this.#dia = (new Date()).getDate()
        this.#mes = (new Date()).getDay()
        this.#ano = (new Date()).getFullYear()
    }
    setDataManual(dia,mes,ano){
        this.#dia = dia;
        this.#mes = mes;
        this.#ano = ano;
    }
    getData(){
        return `${this.#dia}/${this.#mes}/${this.#ano}`
    }

    andar(passos = 1){
        this.resetOnMidnight()
        this.#passos += passos;
    }
    getpassos(){
        return this.#passos
    }
    resetOnMidnight(){
        if (this.hoje() != this.getData()){
            this.setData()
            this.resetpassos()
        }
    }
    resetpassos(){
        this.#passos = 0
    }
    hoje(){
        return `${(new Date()).getDate()}/${(new Date()).getDay()}/${(new Date()).getFullYear()}`;
    }
    
   
}
var sm = new SmartWatch()
console.log(sm)
sm.andar(50)
sm.andar(200)
console.log(sm)
sm.setDataManual(18,03,2022)
console.log(sm)
sm.andar(10)
console.log(sm.getpassos())


// Construa uma classe Veiculo que tem como propriedades rodas (1 a n), usaCombustivel (true/false), uma classe Carro (tipoDecombustivel: 'gasolina', 'álcool', 'flex') que herda de Veiculo e Bicicleta (infantil: true/false - tem que ter mais que 2 rodas) que também herda as características de Veiculo.

