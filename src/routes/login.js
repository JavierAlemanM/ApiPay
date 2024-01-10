import { Router } from "express";

import {loginUser} from "../locked/login.js"

const router = Router();

router.post("/",loginUser);
export default router;