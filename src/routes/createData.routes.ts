import { Router } from "express";
import { createPqr, showPqr, changePqr, changeSeveralPqrs } from "../controllers/pqr.controller";
//Make Router
const router: Router = Router();

//Creamos End-Point
router.route("/pqrs")
	.get(showPqr)
	.post(createPqr)
	.put(changeSeveralPqrs);

router.route("/pqrs/:status")
	.patch(changePqr);

//Exporting router
export default router;
