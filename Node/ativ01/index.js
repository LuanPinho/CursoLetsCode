import fetch from "node-fetch";
const link = 'https://pokeapi.co/api/v2/pokemon/?limit=15'
export default async function Buscar1(link) {
    await fetch(link)
    .then((resp) => resp.json())
    .then(function(data) {
      return console.log(data);
      })
    .catch(()=>{
        return console.log('erro na fase1');
    });
}
// Buscar1(link)

function Buscar2(link){
    return new Promise((resolve) => {
        resolve(
            fetch(link)
                .then((resp) => resp.json())
                .then(function(data) {
                    return console.log(data);
                })
        )
    })
}

Buscar2(link)
