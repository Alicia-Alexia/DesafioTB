//carregando modulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser');
const app = express();
const admin = require("./routes/admin")
const path = require("path")
const mongoose = require('mongoose')

      // parse application/x-www-form-urlencoded
      app.use(express.urlencoded({ extended: true }))
      // parse application/json
  app.use(express.json())
  //HANDLEBARS
  app.engine('handlebars', handlebars({defaultLayout: 'main'}))
  app.set('view engine', 'handlebars');
 
  //Conexão com mongoDB
const url = "senha"

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Conectado ao banco ')
    })
    .catch( (err) => {
        console.error(`erro ao conectar ao banco. \n${err}`);
    })

    //pasta de arquivos estaticos bootstrap
    app.use(express.static(path.join(__dirname,"public")))
    
    // Rotas
app.use('/admin', admin)

// porta
const PORT = 8081;
app.listen(PORT, () => {
    console.log("Servidor rodando na url http://localhost:8081")
})
