import { getPokeman } from '@/app/lib/services';
import { BaseStats } from '@/app/lib/types';
import { BackButton } from '@/app/ui';
import { PokemonCard } from '@/app/ui';

export default async function PokemonPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  try {
    const { data } = await getPokeman(id);
    console.log(data);
    return (
      <>
        <div className='self-start max-w-screen-sm mx-auto my-8 w-full'>
          <BackButton />
        </div>
        <PokemonCard statsInfo={data} />
      </>
    );
  } catch (error) {
    console.log(error);
    //TODO: return error response
    return (
      <>
        <PokemonCard statsInfo={{} as BaseStats} />
      </>
    );
  }
}
