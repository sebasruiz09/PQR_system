import { open, Database } from "sqlite";
import sqlite3 from "sqlite3";

const db = async () : Promise<Database<sqlite3.Database,sqlite3.Statement>> => {
	return await open({
		filename: "./dbdata.sqlite",
		driver: sqlite3.Database,
	});
};

export const setup = async (db : Database<sqlite3.Database,sqlite3.Statement>) => {	
	await db.exec(
		"CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, document TEXT NOT NULL, typedoc TEXT NOT NULL, username TEXT NOT NULL, lastname TEXT NOT NULL, phonenumber TEXT NOT NULL, landline TEXT, email TEXT NOT NULL)"
	);
	await db.exec(
		"CREATE TABLE IF NOT EXISTS pqr (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, pqrtype TEXT NOT NULL, description TEXT NOT NULL, status TEXT NOT NULL, date TEXT , userId INTEGER, FOREIGN KEY(userId) REFERENCES user(id))"
	);
	await db.exec(
		"CREATE TABLE IF NOT EXISTS admin (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, password TEXT);"
	);
	await db.exec(
		"INSERT INTO admin (email, password) VALUES ('admin@admin.admin', 'admin');"
	);
};

export default db;
