'use client';
import { useState } from 'react';
import { PokemonItem } from '.';

import { Input } from '@/app/ui/common';
import { NamedAPIResource } from '@/app/lib/types';

export default function PokemonGridDisplay({
  pokemonTypes,
}: {
  pokemonTypes: NamedAPIResource[];
}) {
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredCategories = pokemonTypes.filter((poke) =>
    poke.name.includes(search.toLowerCase())
  );
  return (
    <div className='flex flex-col items-center'>
      <Input
        type='text'
        value={search}
        setValue={handleSearch}
        name='search-types'
        placeholder='search here..'
      />
      <h3 className='text-xl lg:text-3xl pt-12 pb-6 text-center'>
        Pokemon Categories/Types
      </h3>
      <div
        className={`mb-32 items-center w-full grid text-center lg:mb-0 ${
          filteredCategories.length
            ? 'gird_flow md:grid-cols-4 '
            : 'md:grid-cols-1'
        } lg:text-left`}
      >
        {filteredCategories.length ? (
          filteredCategories.map(({ name }) => (
            <PokemonItem key={name} name={name} />
          ))
        ) : (
          <p className='text-center'>
            {search
              ? `No pokemon category/type maches - ${search}`
              : 'No resource found!'}
          </p>
        )}
      </div>
    </div>
  );
}
