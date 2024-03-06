import { PokemonItem } from '.';
import Search from '../common/search-input';
import { Pagination } from '../pagination';

import { TypePokemonList } from '@/app/lib/types';

type NamePokemonProps = {
  pokemonTypes: TypePokemonList;
  totalPages: number;
  categoryName: string;
};
export default function PokemonGridDisplay({
  pokemonTypes,
  totalPages,
  categoryName,
}: NamePokemonProps) {
  return (
    <div className='flex flex-col items-center min-h-[85vh]'>
      <Search />
      <h3 className='text-xl lg:text-3xl pt-12 pb-6 text-center'>
        Pokemon Under {categoryName} Category
      </h3>
      <div className='mb-32 items-center justify-center w-full grid gird_flow text-center min-h-full lg:mb-0 lg:grid-cols-5 lg:text-left'>
        {pokemonTypes.map(({ pokemon: { name } }) => (
          <PokemonItem key={name} name={name} pokemon />
        ))}
      </div>
      {totalPages > 25 ? <Pagination totalPages={totalPages} /> : null}
    </div>
  );
}
