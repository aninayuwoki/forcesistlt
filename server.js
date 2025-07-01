const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

const SCORES_PATH = path.join(__dirname, 'scores.json');

// Esta línea le dice a Express que sirva los archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

app.get('/api/scores', (req, res) => {
    fs.readFile(SCORES_PATH, 'utf8', (err, data) => {
        if (err) {
            // Si el archivo no existe, devuelve un objeto vacío
            if (err.code === 'ENOENT') {
                return res.json({});
            }
            return res.status(500).json({ error: 'No se pudo leer el archivo de puntuaciones.' });
        }
        res.json(JSON.parse(data));
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});