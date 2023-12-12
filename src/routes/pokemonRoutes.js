const express = require('express');
const router = express.Router();
const { getAllPokemon , createPokemon , updatePokemon, deletePokemon , filterPokemon} = require('../controllers/pokemonController'); 

// Get all Pokemon
router.get('/', getAllPokemon);

//Create new Pokemon
router.post('/', createPokemon);

//Update Pokemon
router.put('/:id', updatePokemon);

// Delete Pokemon
router.delete('/:id', deletePokemon);

//Filter Pokemon
router.get('/filter', filterPokemon);

module.exports = router;
