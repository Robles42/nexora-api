const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'robles',
    password: '4268', 
    database: 'nexora_db'
});

app.get('/api/books', (req, res) => {
    db.query('SELECT * FROM books', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

app.listen(5000, () => console.log('Backend en http://localhost:5000'));
