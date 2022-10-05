import {Request, Response} from "express";
import { authService } from "../services/auth.service";
import { DataAdmin } from "../interfaces/user";

export const login = async (req:Request, res:Response):Promise<Response> => {
    //Get data
    const { email, password } = req.body as DataAdmin;
    //pass on data
    const login = await authService({email, password});      

    if (!login) res.status(401).json({msg: "Wrong Credentials"});
    return res.status(200).json({msg: "Success login in"});
}