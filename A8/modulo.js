const path = require('path');
const fs = require('fs');
const r = process.argv[2];

//COMO ARGUNMENTO r es la ruta , e es la extension, y callback 

module.exports = (r,e,callback)=> {

  fs.readdir(r,function(err,lista){

       if(err)

      return callback(err,null);

        for(var archivo in lista){
              if(path.extname(lista[archivo])== "." + e){
                console.log(lista[archivo]);
            //	console.log(archivo);
            }
            callback(null,lista);
          }
        })
  }
