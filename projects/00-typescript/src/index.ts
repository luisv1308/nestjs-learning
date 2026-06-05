import { PokemonType, Pokemon, PokemonId } from './pokemon.types';
import { getPokemonById, findByProperty } from './pokemon.utils';

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


const existingId: PokemonId = 1;
const missingId: PokemonId = 999;

console.log(getPokemonById(pokemon, existingId));
console.log(getPokemonById(pokemon, missingId));

console.log(findByProperty(pokemon, 'name', 'Pikachu'));
console.log(findByProperty(pokemon, 'id', existingId));