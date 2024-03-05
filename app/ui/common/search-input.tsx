'use client';

import { Input } from '.';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('q', term);
    } else {
      params.delete('q');
    }
    replace(`${pathname}?${params.toString()}`);
    console.log(params.get('query'));
  }, 300);

  return (
    <label
      className='flex flex-col items-center  w-full'
      htmlFor='search-pokemons'
    >
      <span className='  whitespace-nowrap inline-block capitalize'>
        Search Pokemons
      </span>
      <div className='pb-2 pt-4'>
        <input
          autoComplete='off'
          onChange={(e) => handleSearch(e.target.value)}
          className='w-full px-4 py-3 shadow-lg focus:bg-gray-800 bg-gray-800 focus:text-inherit placeholder-gray-400 text-gray-700 rounded-full  focus:ring focus:outline-none  text-xl font-semibold transition-colors'
          type='search'
          id='search-pokemons'
          defaultValue={searchParams.get('q')?.toString()}
          name='search-pokemons'
          placeholder='Search pokemon...'
        />
      </div>
    </label>
  );
}
