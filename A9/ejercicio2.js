const http = require('http')
const url = 'http://nodeprogram.com'
var x = 0;

http.get(url, (response) =>{
  let rawData = ''
    response.on('data',(chunk) =>{
      rawData += chunk
      x++;

    })

    response.on('end',()=>{

      process.stdout.write("Caracteres totales: " + rawData.length + "\n")
      process.stdout.write(rawData)
      //console.log('TOtal de eventos ' + x)
    })
    //fin del http.get
}).on('error',(error)=>{

    console.error(`Ha ocurrido un error: ${error.message}`)

})
