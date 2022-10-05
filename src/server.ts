import app from "./app";
import dotenv from "dotenv";
import db, { setup } from "./config/connection";
//use to read entries from .env file
dotenv.config({path: "./.env"});

const main = () => {
	//Get port
	const PORT: number | string = process.env.PORT || 3000;
	//listen
	app.listen(PORT, ()=>{
		console.log(
			`#### SERVER ON PORT ${PORT} ####`
		);
	});
};
//INITIALIZE SERVER
Promise.all(
	//BEFORE: START DB
	[db()]
).then(([db]) => {
	setup(db);
	main();
}).catch(err=>{
	console.log(`ERROR: Initializing server -> ${err}`);
});
