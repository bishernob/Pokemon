'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pokemons_data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      row: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      pokedex_number: {
        type: Sequelize.INTEGER
      },
      img_name: {
        type: Sequelize.STRING
      },
      generation: {
        type: Sequelize.INTEGER
      },
      evolution_stage: {
        type: Sequelize.STRING
      },
      evolved: {
        type: Sequelize.INTEGER
      },
      family_id: {
        type: Sequelize.INTEGER
      },
      cross_gen: {
        type: Sequelize.INTEGER
      },
      type1: {
        type: Sequelize.STRING
      },
      type2: {
        type: Sequelize.STRING
      },
      weather1: {
        type: Sequelize.STRING
      },
      weather2: {
        type: Sequelize.STRING
      },
      stat_total: {
        type: Sequelize.INTEGER
      },
      atk: {
        type: Sequelize.INTEGER
      },
      def: {
        type: Sequelize.INTEGER
      },
      sta: {
        type: Sequelize.INTEGER
      },
      legendary: {
        type: Sequelize.INTEGER
      },
      acquireable: {
        type: Sequelize.INTEGER
      },
      spawns: {
        type: Sequelize.INTEGER
      },
      regional: {
        type: Sequelize.INTEGER
      },
      raidable: {
        type: Sequelize.INTEGER
      },
      hatchable: {
        type: Sequelize.INTEGER
      },
      shiny: {
        type: Sequelize.INTEGER
      },
      nest: {
        type: Sequelize.INTEGER
      },
      new: {
        type: Sequelize.INTEGER
      },
      not_gettable: {
        type: Sequelize.INTEGER
      },
      future_evolve: {
        type: Sequelize.INTEGER
      },
      cp_100_40: {
        type: Sequelize.INTEGER
      },
      cp_100_39: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pokemons_data');
  }
};