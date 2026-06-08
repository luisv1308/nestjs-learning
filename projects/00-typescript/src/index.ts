import { PokemonType, Pokemon, PokemonId } from './pokemon.types';
import { Pokedex } from './pokedex';

const pokemon: Pokemon[] = [{
    id   : 1,
    name : 'Pikachu',
    types: [PokemonType.Electric],
    hp   : 100,
}, {
    id   : 2,
    name : 'Charizard',
    types: [PokemonType.Fire, PokemonType.Fire],
    hp   : 150,
}, {
    id   : 3,
    name : 'Bulbasaur',
    types: [PokemonType.Grass, PokemonType.Grass],
    hp   : 100,
}];

const pokedex = new Pokedex(pokemon);
console.log('All pokemons:', pokedex.getAll().length);
console.log('Pokemon by id 1:', pokedex.getById(1));
console.log('Find by property name Charizard:', pokedex.findByProperty('name', 'Charizard'));
pokedex.add({
    id   : 4,
    name : 'Squirtle',
    types: [PokemonType.Water],
    hp   : 100,
});
console.log('All pokemons:', pokedex.getAll().length);
async function main() {
    const notFoundPokemon = await pokedex.getByIdAsync(999);
    console.log('Pokemon by id 999:', notFoundPokemon);
}
main().catch(console.error);
