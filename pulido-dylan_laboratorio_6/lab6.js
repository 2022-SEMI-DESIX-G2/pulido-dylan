
var n=5;
var numv = 0;
var numn = 1;
var r=0;

console.log("La secuenecia fibonacci para el número 5 es:")
      for(i=0;i<n;i++)
          {
                    
              console.log(i);
              if(i==1)
              {
               i=n+1;
                  
              }
          }


          for(i=2;i<n;i++)
          {

          r=numv+numn;    
          numv=numn;    
          numn=r;  


          console.log(r);
          }
  
  


