//libreria para comunicación: axios

const axios = require('axios').default; //import de axios


const main = async () => { //funcion anonima tipo async

const {data} = await axios("https://pokeapi.co/api/v2/pokemon/ditto"); //retorna una promesa, la variable data es para 
//desenstructurar la respuesta y solo ver la parte de data

const abilityList =  data.abilities.map( ({ ability})=> ability.name)


 
    Nombre="Nombre: "+data.name;
    Idpokedex="ID en la Pokedex: " + data.id;
    altura="Altura: "+data.height;
    peso="Peso: "+data.weight;
    ability="Habilidades: "+abilityList.join(",");
 

var Array= [Nombre,Idpokedex,altura,peso,ability]

console.log(Array)
}


  main();


  



  