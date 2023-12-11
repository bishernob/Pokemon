const xlsx = require('xlsx');
const { xlsxFilePath } = require('../../config/config');
const transformData = require('./transformData');
const {db , pgp} = require('../../db/db');


// Read data from XLSX file
const workbook = xlsx.readFile(xlsxFilePath);
const sheetName = workbook.SheetNames[0];
const pokemonData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);


// Choose the number of rows to process in each batch
const randomRowNumberOfData = pokemonData.slice(0,50)

// Function to insert data
async function insertBatch(data) {
    const transformedData = transformData(data);
    const insertQuery = pgp.helpers.insert(transformedData, null, 'Pokemons_data');
    try {
      console.log(db.none)
      await db.none(insertQuery);
      console.log('Data inserted successfully.');
    } catch (error) {
      console.error('Error inserting data:', error);
    }
}
  
async function processBatches() {
    for (const data of randomRowNumberOfData) {
      await insertBatch(data);
    }
}
  
  processBatches()
    .then(() => {
      console.log('All data processed successfully.');
    })
    .catch((error) => {
      console.error(`Error: ${error}`);
    })
    .finally(() => {
      pgp.end()
});