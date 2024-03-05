type InfoProps = {
  info: string;
  value: string | number;
};

export default function PokemonInfo({ info, value }: InfoProps) {
  return (
    <li className='flex items-center decoration-gray-500'>
      {info}:
      <span className='text-base font-normal leading-tight text-gray-500 ms-3'>
        {value}
      </span>
    </li>
  );
}
