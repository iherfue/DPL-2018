var fs = require('fs')
const uuidv1 = require('uuid/v1')
const folderName = uuidv1();
const http = require('https')
const url = process.argv[2]
var x = 0;

http.get(url, (response) =>{
  let rawData = ''
    response.on('data',(chunk) =>{
      rawData += chunk
      x++;

    })

    response.on('end',()=>{

      process.stdout.write("Caracteres totales: " + rawData.length + "\n")
      //process.stdout.write(rawData)
      fs.mkdirSync(folderName)
      fs.writeFileSync(folderName + '/file.html',rawData)
      //console.log('TOtal de eventos ' + x)
    })
    //fin del http.get
}).on('error',(error)=>{

    console.error(`Ha ocurrido un error: ${error.message}`)

})
