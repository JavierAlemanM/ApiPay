import { pool } from "../db/db.js";

export const users = async (req , res) =>{
   let process = "Insert User";
   let status = true;
   let id = null;
   try {
      
      await pool.query(
         `INSERT INTO public.users
         (id, "name", "document", phone, email, gender, username, "password", typeuser, create_at, update_at)
         VALUES(1, 'Carlos Perez', 1118167123, 3124568789, 'correo@correo.com', 'M', 'caperez', '123456789', 1, now(), now());`
      ); 
     //const resultQuery = await pool.query('SELECT lastval()');
     //id = resultQuery.rows[0].lastval;
   } catch (error) {

      console.log(error);
      status = error;
   }
   res.send({process,status,id});
}