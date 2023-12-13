const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/pokemonRoutes'); 
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../config/swagger.json');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/pokemons', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
