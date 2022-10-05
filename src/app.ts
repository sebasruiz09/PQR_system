import express, { Application } from "express";
import morgan from "morgan";
import { useRoutes } from "./routes/index.routes";
import cors from "cors";

//Create app
const app:Application = express();

//Use Cors options
const options: cors.CorsOptions = {
	origin: "http://localhost:4200",
	methods: ["GET","POST","PATCH","PUT","DELETE"]
};   

//--> Middlewares <--
app.use(cors(options));
app.use(morgan("dev"));
app.use(express.json());
//--> Routes <--
useRoutes(app);

//Exporting app
export default app;