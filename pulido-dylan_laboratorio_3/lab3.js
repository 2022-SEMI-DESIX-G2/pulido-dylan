const ps= require("prompt-sync");
const prompt = ps();

function  palindromo(n,n1)
{
    n=n+"";
    var obj= {Numero:"",Binario:"",Palindromo:""};        
    var palin = n.split("").reverse().join("");

    if (palin == n) {
        
        const binario = n1.split("").reverse().join("");
        if (n1== binario){//es palindromo de doble base
            obj.Numero=n;
            obj.Binario=n1;
            obj.Palindromo=true;
            return obj;
        }
        else{//es palindromo pero no de doble base
            obj.Numero=n;
            obj.Binario=n1;
            obj.Palindromo=false;
            return obj;
        }
    }
    else{//no es palindromo ni palindromo de doble base
        obj.Numero=n;
        obj.Binario=n1;
        obj.Palindromo=false;
        return obj;
    }
    return n1;
}

function contarLetras(cadena){
    if (typeof cadena != "string"){
        throw TypeError("Se debe ingresar una cadena.");
    }

    let cont ={};
    
    cadena.replace(/\S/g, function(p) {
        cont[p] = isNaN(cont[p]) ? 1 : cont[p]+1;
    });

    return cont;


}

function year(y){
    var bisiesto;
    if((y%4==0) && (y%100 !=0 || y%400==0)){
        return bisiesto=" es un año bisiesto";
    }
    else{
        return bisiesto=" no es un año bisiesto";;
    }
}

/*function primo(nume){
    var cont=0;
    for(var i=2; i<nume; i++){
        for(var j=2; j<=i; j++){
        if(i%j==0){
            break;
        }else{
            if(j==i){
                console.log(i);
                cont=cont+i;
            }
        }        
       
        }
        
        
        
    }
    return cont;
}
*/

var num;
var resp;

num=parseInt(prompt('Ingrese un número decimal: '))
const n1 = num.toString(2);
resp= palindromo(num,n1)//llama la funcion que calcula si es palindromo doble base

console.log(resp);

try {
    var t=(prompt('Ingrese una cadena: '))
    console.log(contarLetras(t));//llama la funcion para contar letras
} catch  (e){
    console.log(Error, $,{e:message});
    
}

var año=parseInt(prompt("Ingrese un año: "));
resp=year(año);//llama la funcion para ver si el año es bisiesto
console.log(año + resp);

/*var num1=parseInt(prompt("Ingrese un numero mayor a 0 y menor a 1000000: "));

if ((num1>0) && num1<1000000){
    resp=primo(num1);//llama la funcion que suma los numeros primos
    console.log("La suma de los números primos desde 0 hasta "+num1+" es de: "+ resp);
}
else{
console.log("El número ingresado esta fuera del rango permitido");
}
*/


