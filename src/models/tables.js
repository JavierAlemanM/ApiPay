import { pool } from "../db/db.js";


export const create = async () =>{

   await createUser();

}


const createUser = async () =>{
   try {
      await pool.query(
         `create table users(
            id serial primary key,
            name varchar(60),
            document int,
            phone int,
            email varchar(60),
            gender varchar(1),
            username varchar(60),
            password varchar(60),
            typeuser int
         )`); 
   } catch (error) {
      console.log('error creando tabla users: '+error); 
   }
}