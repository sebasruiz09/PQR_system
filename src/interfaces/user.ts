export interface DataUser {
    id?:number,
    document: string;
    typedoc: string;
    username: string;
    lastname: string;
    phonenumber: string;
    landline: string;
    email: string;
}

//Data Admin
export interface DataAdmin{
    id?:number;
    email:string;
    password:string;
}