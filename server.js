const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

const SCORES_PATH = path.join(__dirname, 'scores.json');

// Esta línea le dice a Express que sirva los archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Función auxiliar para leer scores.json
function readScoresFile(callback) {
    fs.readFile(SCORES_PATH, 'utf8', (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                return callback(null, {}); // Archivo no existe
            }
            return callback(err); // Otro error
        }
        try {
            if (data.trim() === "") return callback(null, {});
            const scores = JSON.parse(data);
            return callback(null, scores);
        } catch (parseErr) {
            return callback(parseErr);
        }
    });
}

// Función auxiliar para escribir en scores.json
function writeScoresFile(scores, callback) {
    fs.writeFile(SCORES_PATH, JSON.stringify(scores, null, 2), 'utf8', callback);
}

app.get('/api/scores', (req, res) => {
    readScoresFile((err, scores) => {
        if (err) {
            console.error("Error al leer scores.json para GET /api/scores:", err);
            return res.status(500).json({ success: false, error: 'No se pudo leer el archivo de puntuaciones.' });
        }
        res.json(scores);
    });
});
app.post('/api/register', (req, res) => {
    const { username, groupId, groupName } = req.body;
    if (!username || !groupId || !groupName) {
        return res.status(400).json({ success: false, error: 'Faltan datos: username, groupId y groupName son requeridos.' });
    }
    readScoresFile((err, scores) => {
        if (err) {
            console.error("Error al leer scores.json para POST /api/register:", err);
            return res.status(500).json({ success: false, error: 'No se pudo procesar el registro (lectura).' });
        }
        if (!scores[groupId]) {
            scores[groupId] = { name: groupName, score: 0 };
            console.log(`Nuevo grupo "${groupName}" (ID: ${groupId}) creado por usuario ${username}.`);
        } else {
            console.log(`Usuario ${username} se registró en el grupo existente "${scores[groupId].name}" (ID: ${groupId}).`);
        }
        writeScoresFile(scores, (writeErr) => {
            if (writeErr) {
                console.error("Error al escribir en scores.json para POST /api/register:", writeErr);
                return res.status(500).json({ success: false, error: 'No se pudo guardar la información de registro.' });
            }
            console.log(`Registro procesado para ${username} en grupo ${groupId}. scores.json actualizado.`);
            res.json({ success: true, message: 'Registro exitoso.', currentGroupData: scores[groupId] });
        });
    });
});

app.post('/api/scores', (req, res) => {
    const { groupId, groupName, score } = req.body;
    if (groupId === undefined || score === undefined) {
        return res.status(400).json({ success: false, error: 'Faltan datos: groupId y score son requeridos.' });
    }
    const numericScore = parseInt(score, 10);
    if (isNaN(numericScore)) {
        return res.status(400).json({ success: false, error: 'El puntaje debe ser un número.' });
    }
    readScoresFile((err, scores) => {
        if (err) {
            console.error("Error al leer scores.json para POST /api/scores:", err);
            return res.status(500).json({ success: false, error: 'No se pudo procesar la actualización de puntuación (lectura).' });
        }
        if (scores[groupId]) {
            scores[groupId].score = numericScore;
            if (groupName && scores[groupId].name !== groupName) {
                scores[groupId].name = groupName;
            }
            console.log(`Puntuación actualizada para el grupo "${scores[groupId].name}" (ID: ${groupId}) a ${numericScore}.`);
        } else {
            if (!groupName) {
                 console.warn(`Intento de actualizar score para groupId ${groupId} no existente sin groupName.`);
            }
            scores[groupId] = { name: groupName || groupId, score: numericScore };
            console.log(`Nuevo grupo "${scores[groupId].name}" (ID: ${groupId}) creado con puntuación ${numericScore} vía /api/scores.`);
        }
        writeScoresFile(scores, (writeErr) => {
            if (writeErr) {
                console.error("Error al escribir en scores.json para POST /api/scores:", writeErr);
                return res.status(500).json({ success: false, error: 'No se pudo guardar la puntuación.' });
            }
            console.log(`Puntuaciones guardadas en scores.json tras actualizar grupo ${groupId}.`);
            res.json({ success: true, message: 'Puntuación actualizada exitosamente.', updatedGroupData: scores[groupId] });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});