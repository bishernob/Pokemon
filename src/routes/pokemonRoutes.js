const express = require('express');
const router = express.Router();
const { getAllPokemon , createPokemon , updatePokemon, deletePokemon , filterPokemon} = require('../controllers/pokemonController'); 

// Get all Pokemon
router.get('/', getAllPokemon);

//Create new Pokemon
router.post('/create', createPokemon);

//Update Pokemon
router.put('/:id/update', updatePokemon);

// Delete Pokemon
router.delete('/:id/delete', deletePokemon);

//Filter Pokemon
router.get('/filter', filterPokemon);

module.exports = router;
