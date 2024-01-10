import { pool } from "../db/db.js";


export const createAll = async (req,res) =>{
   let processUsers = true
   try {
      processUsers = await createUsers();
   } catch (error) {
      processUsers = error;
   }
   res.send({processUsers});
}


export const truncateAll = async (req,res) =>{

   let processUsers = true
   try {
      processUsers = await truncateUsers();
   } catch (error) {
      processUsers = error;
   }
   res.send({processUsers});

}

export const dropAll = async (req,res) =>{
   let processUsers = true
   try {
      processUsers =  await dropUsers();
   } catch (error) {
      processUsers = error;
   }
   res.send({processUsers});
}



const createUsers = async () =>{
   let process = "create Users";
   let status = true;
   try {
      await pool.query(
         `CREATE TABLE IF NOT EXISTS  users(
            id serial primary key,
            name varchar(60),
            document bigint,
            phone bigint,
            email varchar(60),
            gender varchar(1),
            username varchar(60),
            password varchar(60),
            typeuser int,
            create_at timestamp,
            update_at timestamp
         )`); 
   } catch (error) {
      status = error;
   }
   return {process,status}
}

const truncateUsers = async () =>{
   let process = "truncate Users";
   let status = true;
   try {
      await pool.query(`TRUNCATE   users`);   
   } catch (error) {
      status = error;
   }
   return {process,status}
}


const dropUsers = async () =>{
   let process = "Drop Users";
   let status = true;
   try {
      await pool.query(`DROP table  users`); 
   } catch (error) {
      status = error; 
   }
   return {process,status}
}

