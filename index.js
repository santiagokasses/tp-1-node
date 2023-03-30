const matematica = require("./src/modules/matematica")
const fs = require('fs');

//Ejercicio 1

var nombre = "axel"
var apellido = "navarro"

console.log(`Hola ${nombre} ${apellido}`)

//Ejercicio 2

console.log(matematica.PI)

//Ejercicio 3

// Ejercico 4

fs.readFile("./txt/dai.txt", "utf8", (err, data) => {
  if (err) return console.error(err)
  console.log(data)
  fs.writeFile("./txt/dai2.txt", data , err =>{
    if (err) return console.log(err)
    console.log("El archivo fue creado correctamente")
  })
})

//Ejercicio 5

//Ejercicio 6

//Ejercicio 7

