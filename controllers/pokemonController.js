
const db = require("../models");
const pokemon = db.pokemon

const getAllPokemon = async (req, res) => {
  try {

    const allPokemon = await pokemon.findAll();
    res.status(200).json(allPokemon);

  } catch (error) {
    console.error('Error getting all Pokemon:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createPokemon = async (req, res) => {
  try {
    const { name , pokedex_number , img_name , generation} = req.body;

    const fields = req.body;

    // Check if required fields
    if (!name ,!pokedex_number,img_name, generation) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create a new Pokemon
    const newPokemon = await pokemon.create(fields);
    return res.status(201).json(newPokemon);

  } catch (error) {
    console.error('Error creating Pokemon:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updatePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const fieldsToUpdate = req.body;

    // Check if Pokemon ID exists
    const existingPokemon = await pokemon.findByPk(id);

    if (!existingPokemon) {
      return res.status(404).json({ error: 'Pokemon not found' });
    }

    // Update the Pokemon
    await existingPokemon.update({fieldsToUpdate});

    return res.status(200).json(existingPokemon);

  } catch (error) {
    console.error('Error updating Pokemon:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deletePokemon = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if Pokemon ID exists
    const existingPokemon = await pokemon.findByPk(id);

    if (!existingPokemon) {
      return res.status(404).json({ error: 'Pokemon not found' });
    }

    // Delete the Pokemon
    await existingPokemon.destroy();

    return res.status(204).end();

  } catch (error) {
    console.error('Error deleting Pokemon:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllPokemon,
  createPokemon,
  updatePokemon,
  deletePokemon,
};
