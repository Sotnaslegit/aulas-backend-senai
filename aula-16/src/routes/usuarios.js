const express = require ('express');
const router = express.Router();
const db = require("../config/db");

//localhost:3000/usuarios
router.get('/', async(req, res) => {
    try{
        const [rows] = await db.query("SELECT id_usuario, nome, email, data_nascimento FROM usuarios");
        res.json(rows); //mostra
    } catch (error){
        console.log('Error: ', error);
        res.status(500).json({erro: "Erro ao buscar ususarios"})
    }
});

module.exports = router;