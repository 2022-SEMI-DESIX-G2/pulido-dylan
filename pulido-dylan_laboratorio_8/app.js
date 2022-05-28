const express = require('express')
const app = express() //estas 2 lineas es como se importa express

app.use(express.urlencoded({
  extended: true
}))

app.get('/lab8', function (req, res) {
    const { name } =req.params;
   res.send(`<section>
    <form id="form" action="/submit-form" method="POST" >
        <label for="num">Ingrese el número: </label>
        <input name="num" type="text">
        <button type="submit">Calcular</button>
    </form>
</section>`);
  })
//para meter una variable en el url es /:nombrevariable/

app.post('/submit-form', (req, res) => {
  const n = req.body.num

  var numv = 0;
var numn = 1;
var r=0;
var resp=[];

          for(i=0;i<n;i++)
          {
                    
              a=i
              if(i==1)
              {
               i=n+1;
               
              }
              resp.push(a);
          }


          for(i=2;i<n;i++)
          {

          r=numv+numn;    
          numv=numn;    
          numn=r;  


          resp.push(r);
          }

          res.send(resp);

})



          

        

app.listen(3000)