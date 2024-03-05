import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: 'left' | 'right';
  isDisabled?: boolean;
}) {
  const className = `
      'flex h-10 w-10 transition-all duration-150 items-center justify-center rounded-md border'
        ${isDisabled ? 'pointer-events-none text-gray-300' : ''}
        ${!isDisabled ? 'hover:bg-[#3f3e3e70]' : ''}
        ${direction === 'left' ? 'mr-2 md:mr-4' : ''}
        ${direction === 'right' ? 'ml-2 md:ml-4' : ''}
    `;

  const icon =
    direction === 'left' ? (
      <div className='flex   items-center justify-center h-10 w-10'>
        <ArrowLeftIcon
          className={`w-5 ${isDisabled ? 'text-[#85848493]' : ''}`}
        />
      </div>
    ) : (
      <div className='flex items-center justify-center h-10 w-10'>
        <ArrowRightIcon
          className={`w-5 ${isDisabled ? 'text-[#85848493]' : ''}`}
        />
      </div>
    );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href} replace scroll={false}>
      {icon}
    </Link>
  );
}
