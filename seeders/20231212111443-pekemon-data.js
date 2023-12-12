"use strict";

require("dotenv").config();
const xlsx = require("xlsx");
const transformData = require("../lib/transformData");

// Read data from XLSX file
const workbook = xlsx.readFile(process.env.XLSX_FILE_PATH);
const sheetName = workbook.SheetNames[0];
const pokemonData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

const getData = () => {
  return pokemonData.map((data) => {
    return transformData(data);
  });
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = getData();
    return queryInterface.bulkInsert("Pokemons_data", data);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Pokemons_data", null, {});
  },
};
