const express = require('express');
const app = express();
const cors = require("cors");

//middleWare
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors());
app.use('/usuarios', require('./routes/jugadores'))



const db = require("./models");


const server = app.listen(process.env.PORT || 5000, () => {
  const port = server.address().port;
  console.log(`Servidor corriendo en el puerto ${port}`);

  db.sequelize.sync().then(() => {
    console.log("Base de datos creada");
})
});