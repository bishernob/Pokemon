const { DataTypes } = require('sequelize');

module.exports = ( sequelize,Sequelize) => {
  const Pokemon = sequelize.define('Pokemons_data', {
    row: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pokedex_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    img_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    generation: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    evolution_stage: {
      type: DataTypes.STRING,
    },
    evolved: {
      type: DataTypes.INTEGER,
    },
    family_id: {
      type: DataTypes.INTEGER,
    },
    cross_gen: {
      type: DataTypes.INTEGER,
    },
    type1: {
      type: DataTypes.STRING,
    },
    type2: {
      type: DataTypes.STRING,
    },
    weather1: {
      type: DataTypes.STRING,
    },
    weather2: {
      type: DataTypes.STRING,
    },
    stat_total: {
      type: DataTypes.INTEGER,
    },
    atk: {
      type: DataTypes.INTEGER,
    },
    def: {
      type: DataTypes.INTEGER,
    },
    sta: {
      type: DataTypes.INTEGER,
    },
    legendary: {
      type: DataTypes.INTEGER,
    },
    acquireable: {
      type: DataTypes.INTEGER,
    },
    spawns: {
      type: DataTypes.INTEGER,
    },
    regional: {
      type: DataTypes.INTEGER,
    },
    raidable: {
      type: DataTypes.INTEGER,
    },
    hatchable: {
      type: DataTypes.INTEGER,
    },
    shiny: {
      type: DataTypes.INTEGER,
    },
    nest: {
      type: DataTypes.INTEGER,
    },
    new: {
      type: DataTypes.INTEGER,
    },
    not_gettable: {
      type: DataTypes.INTEGER,
    },
    future_evolve: {
      type: DataTypes.INTEGER,
    },
    cp_100_40: {
      type: DataTypes.INTEGER,
    },
    cp_100_39: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Pokemons_data',
    timestamps: true,
    tableName: 'Pokemons_data',
  });
  return Pokemon
}
