import { DataPqr } from "../interfaces/pqr";
import { DataUser } from "../interfaces/user";
import PqrModel from "../models/Pqr.model";
import UserModel from "../models/User.model";
import { typeStatus } from "../types/enums";

export const createDataService = async ( dataUser : DataUser , dataPqr : DataPqr ) : Promise<boolean | null> => {
	console.table(dataUser);
	console.table(dataPqr);	
	//validate user if exist
	const user : DataUser | undefined = await UserModel.getByDoc(dataUser.document);
	//get User
	console.log("User obtained:");
	console.table(user);
	if(user){
		//create pqr
		await PqrModel.createPqr(dataPqr, user.id);
		return true;
	}
	//else
	//create user
	await UserModel.createUser(dataUser);
	//Get user created
	const lastUser:DataUser = await UserModel.getLastCreatedUser();
	//Create pqr
	await PqrModel.createPqr(dataPqr, lastUser.id);
	//validate pqr
	return true;
};

export const getAllPqr = async () : Promise<DataPqr[]> => {
	const dataPqr: DataPqr[] = await PqrModel.getAll();
	return dataPqr;
};

//eslint-disable-next-line
export const changeStatus = async (status:string, id:number): Promise<boolean|null> => {
	//Validate pqr if exist
	const findPqr:DataPqr = await PqrModel.getById(id);
	if(!findPqr) return null; //not exist pqr
	//Update
	try{
		await PqrModel.updateStatusPqr(status,id);
	}catch(err){
		throw new Error(`ERROR: Update status pqr = ${err}`);
		return false;
	}
	//All ok
	return true;
};

export const changeSeveralStatus = async (ids:number[], type:string):Promise<boolean> => {
	const typeMap: {[key: string]: number} = {
		"deleted": 0,
		"approved": 1,
	};
	const enumType = type in typeMap ?  typeMap[type] : 0;
	console.warn({type, typeMap, enumType, ids, typeStatus});
	//Validated type
	if(typeStatus.Approved === enumType || typeStatus.Deleted === enumType){
		for(const id of ids){
			try{
				await PqrModel.updateStatusPqr(type,id);
			}catch(err){
				throw new Error("ERROR: Update status several pqr");
				return false;
			}
		}
		return true;
	}
	return true;
};