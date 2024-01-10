import express from "express"
import morgan from "morgan";
import cors from "cors"

//importando rutas 
import  locked from "./routes/locked.js"
import login from "./routes/login.js"

const app = express()



// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('combined'));



//usando rutas
app.use("/locked", locked)
app.use("/login", login)




//ruta de prueba
app.get('/', (req, res) => {
  res.send('Hello World!!!!!!')
})



app.set('port', process.env.PORT || 8200);
app.listen(app.get('port'),()=>{
   console.log('servidor corriendo en el puerto',app.get('port'));
});