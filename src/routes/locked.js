import { Router } from "express";
import {createAll,dropAll,truncateAll} from "../locked/all.js"
import {users} from "../locked/insert.js"


const router = Router();

router.get("/all/create",createAll);

router.get("/all/truncate",truncateAll);

router.get("/all/drop",dropAll);

router.get("/insert/user",users);
/*

router.get("/all/drop", (req, res) => {
  res.send('Hello World  desde la ruta prueba y ejemplo');
});

*/


export default router;