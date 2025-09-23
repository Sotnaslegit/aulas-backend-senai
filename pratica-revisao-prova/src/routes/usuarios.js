import express from 'express';
import db from '../config/db';
app.use(express.json());
const router = express.Router()

router.get('/usuarios', async(res, req) => {
    try {
        const [results] = await db.query(
            'SELECT * FROM usuario'
        );
        res.send(results)
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: 'Erro ao buscar'})
    }
});

router.get('/usuarios/:id', async(res, req) => {
    try {
        const {id} = req.params;
        const [results] = await db.query(
            'SELECT * FROM usuario WHERE id=?', id
        );
        res.send(results)
    } catch (error) {
        console.error(error);
        res.status(404).json({msg: 'Usuario não encontrado'})
    }
});

module.exports = router