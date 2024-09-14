import express from 'express';
import path from 'path';

const app = express();
const PORT = 8081;

// Sirve archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para otras plantillas
app.get('/plantilla/:nombre', (req, res) => {
  const nombrePlantilla = req.params.nombre;
  res.sendFile(path.join(__dirname, 'public', `${nombrePlantilla}.html`));
});

app.listen(PORT, () => {
  console.log(`Servidor webplantilla escuchando en el puerto ${PORT}`);
});