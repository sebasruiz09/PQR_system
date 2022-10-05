import { DataPqr } from "../interfaces/pqr";
import dbService from "../services/db.service";

export default {
	getById: async (id: number) : Promise<DataPqr> => {
		const query = `SELECT * FROM pqr WHERE id = ${id}`;
		return await dbService.get(query);
	},
	getAll: async () : Promise<DataPqr[]> => {
		console.warn("Get pqrs");
		const query = "SELECT * FROM pqr WHERE status != 'deleted'";
		return await dbService.all(query);
	},
	createPqr: async (data: DataPqr, userId?:number) => {
		const query = `INSERT INTO pqr (title, pqrtype, description, status, date, userId) VALUES ('${data.title}', '${data.pqrtype}', '${data.description}', '${data.status}', '${data.date}', '${userId}')`;
		return await dbService.exec(query);
	},
	updateStatusPqr: async (status:string, id:number) => {
		const query = `UPDATE pqr SET status = '${status}' WHERE id = ${id}`;
		console.warn({status, id, query});
		return await dbService.exec(query);
	},

};

