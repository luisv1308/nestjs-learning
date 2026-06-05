enum PokemonType {
    Fire     = "fire",
    Water    = "water",
    Grass    = "grass",
    Electric = "electric",
    Ground   = "ground",
    Psychic  = "psychic",
    Rock     = "rock",
    Ice      = "ice",
    Bug      = "bug",
    Dragon   = "dragon",
    Ghost    = "ghost",
    Dark     = "dark",
    Steel    = "steel",
    Fairy    = "fairy"
}

interface Pokemon {
    id: number;
    name: string;
    types: PokemonType[];
    hp: number;
}

type PokemonId = number;

export { PokemonType, Pokemon, PokemonId };