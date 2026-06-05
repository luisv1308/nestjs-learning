import { Pokemon, PokemonId } from './pokemon.types';

function getPokemonById(pokemons: Pokemon[], id: PokemonId): Pokemon | undefined {
    return pokemons.find(pokemon => pokemon.id === id);
}

export { getPokemonById };