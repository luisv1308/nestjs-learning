import { Pokemon, PokemonId } from "./pokemon.types";
import { getPokemonById } from "./pokemon.utils";

class Pokedex {
    private pokemons: Pokemon[] = [];

    constructor(pokemons: Pokemon[]) {
        this.pokemons = pokemons;
    }

    getAll(): Pokemon[] {
        return this.pokemons;
    }

    getById(id: PokemonId): Pokemon | undefined {
        return getPokemonById(this.pokemons, id);
    }

    getByIdAsync(id: PokemonId): Promise<Pokemon | undefined> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.getById(id));
            }, 1000);
        });
    }

    add(pokemon: Pokemon): void {
        this.pokemons.push(pokemon);
    }

    update(pokemon: Pokemon): void {
        const index = this.pokemons.findIndex(p => p.id === pokemon.id);
        if (index !== -1) {
            this.pokemons[index] = pokemon;
        }
    }
}

export { Pokedex };