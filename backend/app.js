const usuarios = require('./usuario');
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000

app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send(usuarios)
});

app.post('/login', (req,res)=>{
    const {email, senha} = req.body;
    
    let usuarioencontrado = usuarios.find( u => u.email == email && u.senha == senha);
    if(usuarioencontrado)
        res.send({ message : "Bem Vindo " + usuarioencontrado.nome } )
    else
        res.send({ message : "usuario não cadastrado"})
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})