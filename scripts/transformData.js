function transformData(pokemon) {
  const currentDate = new Date();

    return {
      name: pokemon.Name,
      pokedex_number: pokemon['Pokedex Number'],
      img_name: pokemon['Img name'],
      generation: pokemon.Generation,
      evolution_stage: pokemon['Evolution Stage'],
      evolved: pokemon.Evolved,
      family_id: pokemon.FamilyID,
      cross_gen: pokemon['Cross Gen'],
      type1: pokemon['Type 1'],
      type2: pokemon['Type 2'],
      weather1: pokemon['Weather 1'],
      weather2: pokemon['Weather 2'],
      stat_total: pokemon['STAT TOTAL'],
      atk: pokemon.ATK,
      def: pokemon.DEF,
      sta: pokemon.STA,
      legendary: pokemon.Legendary,
      acquireable: pokemon.Aquireable,
      spawns: pokemon.Spawns,
      regional: pokemon.Regional,
      raidable: pokemon.Raidable,
      hatchable: pokemon.Hatchable,
      shiny: pokemon.Shiny,
      nest: pokemon.Nest,
      new: pokemon.New,
      not_gettable: pokemon['Not-Gettable'],
      future_evolve: pokemon['Future Evolve'],
      cp_100_40: pokemon['100% CP @ 40'],
      cp_100_39: pokemon['100% CP @ 39'],
      createdAt: currentDate,
      updatedAt: currentDate,
    };
}

module.exports = transformData