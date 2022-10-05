import { Request, Response } from "express";
import { DataUser } from "../interfaces/user";
import { DataPqr } from "../interfaces/pqr";
import { createDataService, getAllPqr ,changeStatus, changeSeveralStatus } from "../services/pqr.service";
//make controller
export const createPqr = async (req: Request, res: Response) => {
	// Get data from request
	const {
		document,
		typedoc,
		username,
		lastname,
		phonenumber,
		landline,
		email,
	} = req.body as DataUser;
	const { 
		title, 
		pqrtype, 
		description,
		status,
		date
	} = req.body as DataPqr;

	//pass data to service, validate data
	const result : boolean | null = await createDataService(
		{document, typedoc, username, lastname, phonenumber, landline, email},
		{title, pqrtype, description, status, date}
	);

	//get response from service and validate response
	if(!result) return res.status(400).json({message: "Error creating user"});
	//response to client
	return res.status(200).json({
		message: "User created",
	});
};

//Show PQRS
export const showPqr = async (req:Request,res:Response) => {
	//Get all PQRS
	const result: DataPqr[] = await getAllPqr();
	//all ok
	return res.status(200).json({
		data:result
	});
};

//Change status Pqr
export const changePqr = async (req:Request, res:Response) => {
	//Get option
	const {status} = req.params;
	const {id} = req.body;
	// Pass on data
	const result:boolean|null = await changeStatus(status,id);
	//Validate resi¿ult
	if(result === null) {
		console.log("PQR not found!");
		return res.status(404).json({msg:"PQR not found!"});
	}
	if(result === false)return res.status(500).json({msg:"ERROR: update status PQR"});

	return res.status(200).json({
		msq:"Update successful"
	});
};

//Change several pqr
export const changeSeveralPqrs = async (req:Request, res:Response):Promise<Response> => {
	//Get data
	const {ids, type} = req.body;
	console.log(ids);
	const result:boolean = await changeSeveralStatus(ids,type);
	//Validate
	if(!result) return res.status(500).json({msq:"ERROR: updating prq"});
	return res.status(200).json({
		msg:"Change Successful"
	});
};