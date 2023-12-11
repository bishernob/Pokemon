'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {  
    static associate(models) {
      // define association models here
    }
  }
  
  Pokemon.init({
    row: DataTypes.INTEGER,
    name: DataTypes.STRING,
    pokedex_number: DataTypes.INTEGER,
    img_name: DataTypes.STRING,
    generation: DataTypes.INTEGER,
    evolution_stage: DataTypes.STRING,
    evolved: DataTypes.INTEGER,
    family_id: DataTypes.INTEGER,
    cross_gen: DataTypes.INTEGER,
    type1: DataTypes.STRING,
    type2: DataTypes.STRING,
    weather1: DataTypes.STRING,
    weather2: DataTypes.STRING,
    stat_total: DataTypes.INTEGER,
    atk: DataTypes.INTEGER,
    def: DataTypes.INTEGER,
    sta: DataTypes.INTEGER,
    legendary: DataTypes.INTEGER,
    acquireable: DataTypes.INTEGER,
    spawns: DataTypes.INTEGER,
    regional: DataTypes.INTEGER,
    raidable: DataTypes.INTEGER,
    hatchable: DataTypes.INTEGER,
    shiny: DataTypes.INTEGER,
    nest: DataTypes.INTEGER,
    new: DataTypes.INTEGER,
    not_gettable: DataTypes.INTEGER,
    future_evolve: DataTypes.INTEGER,
    cp_100_40: DataTypes.INTEGER,
    cp_100_39: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pokemon',
  });
  return Pokemon;
};