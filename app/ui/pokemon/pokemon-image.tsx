'use client';

import Image from 'next/image';

type ImageProps = {
  url: string;
  name: string;
};
export default function PokemonImage({ url, name }: ImageProps) {
  return (
    <Image
      src={url}
      alt={`pokemon image of ${name}`}
      priority
      fill
      className='transition-opacity opacity-0 duration-300 object-contain'
      onLoadingComplete={(ref) => ref.classList.remove('opacity-0')}
    />
  );
}
