import pg from 'pg';
const { Pool } = pg;
export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'codelab',
  password: '0',
  port: 5432, 
});