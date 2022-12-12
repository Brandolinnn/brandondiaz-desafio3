const express = require("express");

const app = express();
const PORT = 3000;
const server = app.listen(PORT, () => {

  console.log(`Servidor escuchando ${server.address().port}`)
})

app.get("/productos", (req, res) => {
  res.json(productos)
})

app.get("/productosRandom", (req, res) => {
  let objeto = productos.id;
  res.send(console.log(objeto))
  
  if (objeto == 1) {
    res.json(productos[1])
    
  } else {
    res.json(productos[0])
    
  }

})
server.on("error", error => console.log("error de sv"))

let productos = [];

productos.push({
  nombre: "Buzo",
  id: 1,
  precio: "600",
  image: ""
},
  {
    nombre: "Buzo",
    id: 2,
    precio: "600",
    image: ""
  })


