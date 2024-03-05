import { AxiosResponse } from 'axios';
import { cache } from 'react';
import apiHandlers from './api-handler';

import {
  BaseStats,
  NamedAPIResourceList,
  TypePokemonCategory,
  TypePokemonList,
} from '@/app/lib/types';

export const getAllPokenTypes = cache(async function (): Promise<
  AxiosResponse<NamedAPIResourceList>
> {
  return apiHandlers.get('type');
});

export async function getPaginatedCategory(
  name: string,
  page: string | number,
  query?: string
): Promise<{ pokemon: TypePokemonList; totalPages: number }> {
  const {
    data: { pokemon },
  }: AxiosResponse<TypePokemonCategory> = await getCategory(name);

  let results = pokemon;
  // calculate offset and limit
  const offset = +page * 25;
  const limit = (+page - 1) * 25;

  if (query) {
    results = results.filter((poke) =>
      poke.pokemon.name.includes(query.toLowerCase())
    );
  }
  return { pokemon: results.slice(limit, offset), totalPages: results.length };
}

export const getCategory = cache(async function (
  name: string
): Promise<AxiosResponse<TypePokemonCategory>> {
  return apiHandlers.get(`type/${name}`);
});

export async function getPokeman(
  name: string
): Promise<AxiosResponse<BaseStats>> {
  console.log(name);
  return apiHandlers.get(`pokemon/${name}`);
}
