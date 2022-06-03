const http = require('http')
const fs = require('fs')

const porta = process.env.PORT

const server = http.createServer((req,res)=>{
    if (req.method == "GET"){
        resp = fs.readFile('index.html',(err,arquivo)=>{
       
            res.write(arquivo)
        })
        return res.end()
    }
    if (req.method == "POST"){

    }
    res.end()
})

server.listen(porta || 3000,()=>{console.log('Servidor rodando')})