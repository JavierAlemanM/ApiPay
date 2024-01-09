import { Router } from "express";


const router = Router();

router.get("/", (req, res) => {
   res.send('Hello World  desde la ruta prueba');
 });

 router.get("/ejemplo", (req, res) => {
   res.send('Hello World  desde la ruta prueba y ejemplo');
 });


export default router;