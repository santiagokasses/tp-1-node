const matematica = require("./src/modules/matematica")
const fs = require('fs');
const readline = require('readline');



fs.readFile("./txt/dai.txt", "utf8", (err, data) => {
  if (err) return console.error(err)
  console.log(data)
  fs.writeFile("./txt/dai2.txt", data , err =>{
    if (err) return console.log(err)
    console.log("El archivo fue creado correctamente")
  })
})

var nombre = "axel"
var apellido = "navarro"

console.log(`Hola ${nombre} ${apellido}`)


console.log(matematica.PI)