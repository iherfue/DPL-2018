const http = require('http')
const url = 'http://nodeprogram.com'
var x = 0;

http.get(url, (response) =>{

    response.on('data',(chunk) =>{
      x++;
      console.log('Evento ' + x)
      console.log(chunk.toString('utf-8'))
    })

    response.on('end',()=>{
      console.log('la respuesta ha terminado')
      console.log('TOtal de eventos ' + x)
    })
    //fin del http.get
}).on('error',(error)=>{

    console.error(`Ha ocurrido un error: ${error.message}`)

})
