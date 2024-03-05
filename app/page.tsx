import { getAllPokenTypes } from '@/app/lib/services';

import PokemonGridDisplay from './ui/pokemon/pokemon-grid-display';
import { NamedAPIResource } from './lib/types';

export const fetchCache = 'force-cache';

export default async function Page() {
  let results;
  try {
    const { data } = await getAllPokenTypes();
    results = data.results;
  } catch (error: any) {
    console.error(error, error.message, '/page error');
    results = [] as NamedAPIResource[];
  }

  return (
    <>
      <PokemonGridDisplay pokemonTypes={results} />
    </>
  );
}
