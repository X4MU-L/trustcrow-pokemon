import { CheckMark } from '.';
import { ProgressBar } from '.';

type StatProp = {
  value: number;
  name: string;
};
export default function StatsItem({ value, name }: StatProp) {
  return (
    <li className='flex items-center gap-2'>
      <CheckMark />{' '}
      <p className=' whitespace-nowrap'>
        <span>{name}</span>
        <span>:</span>
      </p>{' '}
      <ProgressBar value={value} />
    </li>
  );
}
