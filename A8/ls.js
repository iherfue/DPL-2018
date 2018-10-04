var modulo = require('./modulo.js');
const r = process.argv[2];
function ls(r,e){

  console.log("Buscando archivos en " + r + " Con la extension "+ e);
setTimeout(() =>
  modulo(r,e, (err,modulo) =>{

    if(err){
      console.log("error: " , "Ha ocurrido un problema");
    }
  }),2000);

};

ls('/home/ivan/node/A8','txt')
