import { ChangeEvent } from 'react';

interface Props {
  value?: string;
  setValue: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  defaultValue?: string;
  type: 'text' | 'search' | 'email';
  name: string;
}
export default function Input({
  value = '',
  setValue,
  name,
  type,
  defaultValue,
  placeholder,
}: Props) {
  return (
    <label className='flex flex-col items-center mt-8  w-full' htmlFor={name}>
      <span className='  whitespace-nowrap inline-block capitalize'>
        {name.split('-').join(' ')}
      </span>
      <div className='pb-2 pt-4'>
        <input
          autoComplete='off'
          onChange={setValue}
          value={value}
          className='w-full px-3  lg:px-4 py-3  shadow-lg focus:bg-gray-800 bg-gray-800 focus:text-inherit placeholder-gray-400 text-gray-700 rounded-full  focus:ring focus:outline-none  text-xl font-semibold transition-colors'
          type={type}
          id={name}
          defaultValue={defaultValue}
          name={name}
          placeholder={placeholder}
        />
      </div>
    </label>
  );
}
