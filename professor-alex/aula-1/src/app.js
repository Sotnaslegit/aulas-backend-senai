import express from 'express';
import mysql from 'mysql2/promise'
const pool = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'senai',
    database: 'api_node'
});
const app = express();

app.get('/', (req, res) => {
    res.send("Olá Mundo");
});

app.get('/usuarios', async (req, res) => {
    const [results] = await pool.query(
        'SELECT * FROM usuario'
    );
    res.send(results);
});

app.get('/usuarios/:id', async (req, res) => {
    const {id} = req.params;
    const [results] = await pool.query(
        'SELECT * FROM usuario WHERE id=?', id
    );
    res.send(results);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});