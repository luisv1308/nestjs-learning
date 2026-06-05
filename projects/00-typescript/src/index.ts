import { PokemonType, Pokemon } from './pokemon.types';

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

console.log(pokemon[0]);