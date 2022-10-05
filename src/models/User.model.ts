import { DataUser } from "../interfaces/user";
import dbService from "../services/db.service";

export default {
	createUser: async (data: DataUser) => {
		const query = `INSERT INTO user (document , typedoc ,username, lastname, phonenumber , landline , email ) VALUES ('${data.document}' , '${data.typedoc}' ,'${data.username}', '${data.lastname}', '${data.phonenumber}', '${data.landline}', '${data.email}')`;
		return await dbService.exec(query);
	},

	getByDoc: async (doc : string) : Promise<DataUser | undefined > => {
		const query = `SELECT * FROM user WHERE document = '${doc}'`;
		return await dbService.get(query);
	},
	getLastCreatedUser: async ():Promise<DataUser> => {
		return await dbService.get("SELECT * FROM user ORDER BY id DESC LIMIT 1");
	}
};
