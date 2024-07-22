// server.js
import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'elixir'
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('Conectado a la base de datos MySQL');
});

app.use(bodyParser.json());
app.use(cors());

app.post('/api/contact', (req, res) => {
    const { nombre, asunto, mensaje, correo } = req.body;
    const query = 'INSERT INTO tbl_usuario (usu_nombre, usu_asunto, usu_mensaje, usu_correo) VALUES (?, ?, ?, ?)';

    db.query(query, [nombre, asunto, mensaje, correo], (err, result) => {
        if (err) {
            console.error('Error al insertar datos:', err);
            res.status(500).send('Error al insertar datos');
        } else {
            res.status(200).send('Datos insertados correctamente');
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
