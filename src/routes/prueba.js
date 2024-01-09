import { Router } from "express";
import {create} from "../models/tables.js"


const router = Router();

router.get("/", (req, res) => {
   res.send('Hello World  desde la ruta prueba');
 });

 router.get("/ejemplo", (req, res) => {
   res.send('Hello World  desde la ruta prueba y ejemplo');
 });

 router.get("/create", create)


export default router;