(() => {
    const Utils = {
        methods: {
            fibonacci: (n) => {
                
                var numv = 0;
                var numn = 1;
                var r=0;
                for(i=0;i<n;i++)
            {
            //Primeras 2 cartas
            //crea la carta
            let newDiv = document.createElement('div');
            newDiv.setAttribute("id",i);
            newDiv.setAttribute("class","card");   
            newDiv.setAttribute("onclick","Utils.methods.borrar(this.id)");
            //agrega el numero a la carta
            let p = document.createElement('p');
                p.textContent = "\n"+i+"\n";
                newDiv.appendChild(p);

            document.body.appendChild(newDiv);
                if(i==1)
                {
                 i=n+1;6
                    
                }
            }


            for(i=2;i<n;i++)
            {

            //calculo del fibonacci
            r=numv+numn;    
            numv=numn;    
            numn=r;  

            //Otras cartas
            //crea la carta
            let newDiv = document.createElement('div');
            newDiv.setAttribute("id",r);
            newDiv.setAttribute("class","card");
            newDiv.setAttribute("onclick","Utils.methods.borrar(this.id)");

            //agrega el numero a la carta
            let p = document.createElement('p');
                p.textContent = "\n"+r+"\n";
                newDiv.appendChild(p);

            document.body.appendChild(newDiv);
            }
    
            },
            borrar: (clicked_id) => {
                var mensaje = confirm("Deseas borrar "+clicked_id);

                //Verificamos si acepto borar 
            if (mensaje) {
                const elmnt = document.getElementById(clicked_id); elmnt.remove();
                }
                //Verificamos si no desea borrar no hace nada
                else {
                }
             
            }
        }
    }
    document.Utils = Utils;
})();