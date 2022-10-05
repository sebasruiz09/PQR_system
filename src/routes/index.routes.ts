import { Application,Router } from "express";
import dataRouter from "./createData.routes";
import loginRouter from "./login.routes";

//save all routes
const _routes:[Router][] = [
	[dataRouter],
	[loginRouter]
];

//Usar cada Ruta-Endpoint Guardado
export const useRoutes = (app:Application):void => {
	//Pasamos por cada ruta guardada
	_routes.forEach(route => {
		//Obtenemos la ruta
		const [url] = route;
		//Usamos la ruta
		app.use(url);
	});
};