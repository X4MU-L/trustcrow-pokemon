import Link from 'next/link';

interface CardProps {
  name: string;
  pokemon?: boolean;
}
export default function PokemonItem({ name, pokemon }: CardProps) {
  return (
    <Link
      key={name}
      href={pokemon ? `pokemon/${name}` : name}
      className='group m-3 max-w- dark:border-gray-500 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
      rel='noopener noreferrer'
    >
      <h2
        className={`text-2xl font-semibold max-w-full capitalize overflow-hidden text-ellipsis whitespace-nowrap`}
      >
        {name}
      </h2>
    </Link>
  );
}
