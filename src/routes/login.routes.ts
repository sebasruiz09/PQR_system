import { Router } from "express";
import {login} from "../controllers/login.controller";
//Make Router
const router: Router = Router();

//Creamos End-Point
router.route("/login")
    .post(login);
//Exporting router
export default router;