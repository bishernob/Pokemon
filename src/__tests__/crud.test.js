const {
    getAllPokemon,
    createPokemon,
    updatePokemon,
    deletePokemon,
    filterPokemon,
  } = require('../controllers/pokemonController');
  
  const db = require('../models');
  const Pokemon = db.pokemon;
  
  jest.mock('../models', () => ({
    pokemon: {
      findAll: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      findByPk: jest.fn(),
      destroy: jest.fn(),
    },
  }));
  
  describe('Pokemon Controller', () => {
  
    test('Create Pokemon with Missing Fields', async () => {
      const req = { body: {} };
      const res = { status: jest.fn(), json: jest.fn() };
  
      await createPokemon(req, res);
  
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'Missing required fields' });
    });
  
    test('Update Pokemon with Invalid ID', async () => {
      const req = { params: { id: 'invalid' }, body: {} };
      const res = { status: jest.fn(), json: jest.fn() };
  
      await updatePokemon(req, res);
  
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'Invalid Pokemon ID' });
    });
  
    test('Delete Pokemon with Invalid ID', async () => {
      const req = { params: { id: 'invalid' } };
      const res = { status: jest.fn(), json: jest.fn() };
  
      await deletePokemon(req, res);
  
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'Invalid Pokemon ID' });
    });
  
    test('Filter Pokemon with Unknown Parameter', async () => {
      const req = { query: { unknownParameter: 'value' } };
      const res = { status: jest.fn(), json: jest.fn() };
  
      await filterPokemon(req, res);
  
      expect(console.warn).toHaveBeenCalledWith(
        'Ignoring unknown or disallowed filter parameter: unknownParameter'
      );
    });
    
  });
  