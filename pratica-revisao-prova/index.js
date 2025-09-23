import express from 'express';
import router from './src/routes/usuarios.js'
const app = express();
const PORT = 3000;
app.use(express.json());
app.use('/usuarios', router);

app.listen(PORT, (req, res) => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});