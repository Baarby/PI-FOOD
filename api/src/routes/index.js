const { Router } = require("express");
const axios = require("axios");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// [ ] GET /recipes?name="...":
// Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
// Si no existe ninguna receta mostrar un mensaje adecuado

router.get("/", async (req, res) => {
  const { addRecipeInformation } = req.query;
  var url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}`;
  if (addRecipeInformation === "true") {
    url = `${url}&addRecipeInformation=true`;
  }
  const response = await axios.get(url);
  res.send(response.data);
});
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
