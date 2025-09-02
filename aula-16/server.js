const express = require('express'); //importando modulo externo, cria instancia express
const app = express();
const port = 3000;

const usuarioRoute = require ('./src/routes/usuarios')

app.use('/usuarios', usuarioRoute)

app.use(express.json());

app.get('/', (req, res) =>{
    res.send("Olá pessoal, estou no navegador.")
})

//iniciar
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}. Abra http://localhost:${port}`);
});