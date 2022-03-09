let aluno = {
    nome:"",
    setnome: function(curso = ""){
        this.nome = curso;
    },
    matricula:"",
    setmtr: function(curso = ""){
        this.matricula = curso;
    },
    idade:"",
    setidade: function(curso = ""){
        this.idade = curso;
    },
    curso:"",
    setcurso: function(curso = ""){
        this.curso = curso;
    }
}

console.log(aluno);
aluno.setnome ('João')
aluno.setmtr('01234')
aluno.setidade('14')
aluno.setcurso('ingles')
console.log(aluno);


let ave = {
    especie:"Arara",
    getespecie: function (){
        return this.especie;
    }
};
console.log(ave.getespecie())

let peixe = {
    especie: "Lambari"
};
console.log(ave.getespecie.bind(peixe)())

function alunos(nome,idade,email,matricula,curso){
    this.nome = nome,
    this.idade = idade,
    this.email = email,
    this.matricula = matricula,
    this.curso = curso,

    this.getcurso = function () {
        return this.curso;
    }
}

let aluno01 = new alunos('Pedro','22','pedro@bol.com','02566','Português');

console.log(aluno01);
console.log(aluno01.getcurso());