/*Enunciado
Crie um objeto do tipo curso que tenha os seguintes atributos:

nome
p1
p2
media
Usando o setter insira o nome do curso, p1 e p2. Para a média considere a seguinte condição: Se, nota da p1 for 0, retorne a mensagem: "A nota da p1 foi 0, não vai ser possível fazer uma média" Se, nota da p1 maior que 0, faça o seguinte calculo: p1 + p2 / 2

Crie um get que retorne uma mensagem informando o nome do curso e sua média.*/

class curso {
    constructor (nome,p1,p2) {
        this._nome = nome,
        this._p1 = p1,
        this._p2 = p2,
        this._media = this._setmedia(this._p1,this._p2)
    }
    _setmedia(n1=0,n2=0){
        if (n1 > 0){
            return (n1 + n2) / 2;
        }else{
            return `Não é possível calcular a média com a nota p1 = ${n1}` 
        }
    }
    _getcurso(){
       return `Curso: ${this._nome}. Média: ${this._media}`
    }
}
let curso1 = new curso('Matematica', 0, 5)
console.log(curso1._getcurso())