import dbService from "./db.service";
import { DataAdmin } from "../interfaces/user";

export const authService = async (data: DataAdmin) => {
	const result = await dbService.get(
		`SELECT email, password FROM admin WHERE email = '${data.email}'`
	);
	if (!result) return false; //NO match
	const { email, password } = result;
	//validate credentials
	const { email: inputEmail, password: inputPwd } = data;
	if (email === inputEmail && password === inputPwd) return true;
	else return false;
};
