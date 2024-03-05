import { Metadata } from 'next';

import { getPaginatedCategory } from '@/app/lib/services';
import { PokemonCategoryDisplay } from '@/app/ui';
import { TypePokemonList } from '@/app/lib/types';
import { generateSSGParams } from '@/app/lib/utils';

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { categoryName: string };
  searchParams: { q?: string };
}): Promise<Metadata> {
  const { categoryName } = params;
  const { q } = searchParams;

  return {
    title: q
      ? `Category - ${categoryName} | search for ${q}`
      : `Pokeman Api | Category - ${categoryName}`,
  };
}

export async function generateStaticParams() {
  return await generateSSGParams();
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { categoryName: string };
  searchParams: { page?: string | number; q?: string };
}) {
  const { categoryName } = params;
  const { page, q } = searchParams;
  let totalPages;
  let pokemon;

  try {
    const data = await getPaginatedCategory(
      categoryName,
      // possible no page params if user navigated
      page || 1,
      // possibly undefined unless user searched
      q || ''
    );
    totalPages = data.totalPages;
    pokemon = data.pokemon;
  } catch (error) {
    console.log(error);
    totalPages = 0;
    pokemon = [] as TypePokemonList;
  }

  return (
    <PokemonCategoryDisplay
      pokemonTypes={pokemon}
      totalPages={totalPages}
      categoryName={categoryName}
    />
  );
}
