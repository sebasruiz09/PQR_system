import open  from "../config/connection";

export default {
	exec : async (query : string) => {
		const db = await open();
		db.exec(query);
	},
	get : async (query : string) => {
		const db = await open();
		return await db.get(query);
	},
	all : async (query : string) => {
		const db = await open();
		return await db.all(query);
	},
	getLastId : async () => {
		const db = await open();
		return await db.get("SELECT last_insert_rowId()");
	}		
};