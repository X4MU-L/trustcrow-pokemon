export type BaseApiResponseType<T> = {
  count: 20;
  next: string | null;
  previous: string | null;
  results: Array<T>;
};

export type NamedAPIResource = {
  name: string;
  url: string;
};

export type TypePokemon = {
  pokemon: NamedAPIResource;
  slot: number;
};

export type BaseStats = {
  name: string;
  height: number;
  species: NamedAPIResource;
  stats: TypeStats;
  types: Array<TypeStartType>;
  weight: number;
  sprites: TypeStatsOther;
};

export type TypeStatsOther = {
  other: {
    ['official-artwork']: {
      front_default: string;
      front_shiny: string;
    };
  };
};

export type TypeStats = Array<TypeStatsInfo>;

export type TypeStatsInfo = {
  base_stat: number;
  effort: 0;
  stat: NamedAPIResource;
};

export type TypeStartType = {
  slot: number;
  type: NamedAPIResource;
};

export type TypePokemonCategory = {
  id: number;
  name: string;
  pokemon: TypePokemonList;
};
export type TypePokemonList = Array<TypePokemon>;

export type NamedAPIResourceList = BaseApiResponseType<NamedAPIResource>;
