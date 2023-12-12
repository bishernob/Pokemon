const express = require('express');
const router = express.Router();
const { getAllPokemon , createPokemon , updatePokemon, deletePokemon} = require('../controllers/pokemonController'); 

// Get all Pokemon
router.get('/', getAllPokemon);

//Create new Pokemon
router.post('/', createPokemon);

//Update Pokemon
router.put('/:id', updatePokemon);

// Delete Pokemon
router.delete('/:id', deletePokemon);

module.exports = router;
