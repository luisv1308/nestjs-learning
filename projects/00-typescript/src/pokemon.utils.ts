import { Pokemon, PokemonId } from './pokemon.types';

function getPokemonById(pokemons: Pokemon[], id: PokemonId): Pokemon | undefined {
    return pokemons.find(pokemon => pokemon.id === id);
}

function findByProperty<T, K extends keyof T>(items: T[], key: K, value: T[K]): T | undefined {
    return items.find(item => item[key] === value);
}

export { getPokemonById, findByProperty };