// Importar express
const express = require("express");
const app = express();

// Puerto donde se ejecutará el servidor
const PORT = 3001;

// Endpoint básico
app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
