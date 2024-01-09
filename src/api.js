import express from "express"
import morgan from "morgan";
import cors from "cors"

//importando rutas 
import prueba from "./routes/prueba.js"

const app = express()



// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('combined'));



//usando rutas
app.use("/prueba",prueba)




//ruta de prueba
app.get('/', (req, res) => {
  res.send('Hello World!!!!!!')
})



app.set('port', process.env.PORT || 8200);
app.listen(app.get('port'),()=>{
   console.log('servidor corriendo en el puerto',app.get('port'));
});