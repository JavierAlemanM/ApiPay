import { pool } from "../db/db.js";
export const loginUser = async(req, res) =>{
    const {username, password} = req.body;
    const sql = `select  * from users u  where u.username = '${username}' and u.password  = '${password}'`;
    const result = await pool.query(sql); 
    let numResult = result.rowCount;
    let data = result.rows;
    res.send({numResult,data})
}