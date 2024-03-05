import { BaseStats } from '@/app/lib/types';
import { PokemonImage } from '.';
import { PokemonInfo } from '.';
import StatsItem from '../common/stats-item';

import Image from 'next/image';
export default function PokemonCard({ statsInfo }: { statsInfo: BaseStats }) {
  console.log('info', statsInfo);
  if (!statsInfo) {
    return <p>An Error Must have occured</p>;
  }
  return (
    <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
      <div className='relative overflow-hidden text-gray-70 shadow-lg bg-clip-border rounded-xl h-80'>
        <PokemonImage
          name={statsInfo.name}
          url={statsInfo.sprites.other['official-artwork'].front_default}
        />
      </div>
      <ul role='list' className='flex flex-col gap-1 my-7'>
        <PokemonInfo info='Name' value={statsInfo.name} />
        <PokemonInfo info='Height' value={statsInfo.height} />
        <PokemonInfo info='Weight' value={statsInfo.weight} />
        <PokemonInfo info='Specie' value={statsInfo.species.name} />
        <PokemonInfo
          info='Types'
          value={statsInfo.types.map((t) => t.type.name).join(', ')}
        />

        <li>
          Stats:
          <ul>
            {statsInfo.stats.map(({ stat, base_stat }) => (
              <StatsItem key={stat.name} name={stat.name} value={base_stat} />
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
