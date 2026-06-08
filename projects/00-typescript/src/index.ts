import { PokemonType, Pokemon, PokemonId } from './pokemon.types';
import { getPokemonById, findByProperty } from './pokemon.utils';
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


const existingId: PokemonId = 2;
const missingId: PokemonId = 999;

async function main() {
    const pokedex = new Pokedex(pokemon);
    
    const foundPokemon = await pokedex.getByIdAsync(existingId);
    console.log(foundPokemon);

    const notFoundPokemon = await pokedex.getByIdAsync(missingId);
    console.log(notFoundPokemon);
}

main().catch(console.error);
