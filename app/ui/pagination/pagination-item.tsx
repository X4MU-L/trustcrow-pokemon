import Link from 'next/link';

export default function PaginationItem({
  page,
  hreF,
  isActive,
  position,
}: {
  page: number | string;
  hreF: string;
  position?: 'first' | 'last' | 'middle' | 'single';
  isActive: boolean;
}) {
  const className = `flex transition-all duration-150 h-10 w-12 items-center justify-center text-sm border
      ${position === 'first' || position === 'single' ? 'rounded-l-md' : ''}
        ${position === 'last' || position === 'single' ? 'rounded-r-md' : ''}
        ${isActive && 'z-10 bg-blue-600 border-blue-600 text-white '}
        ${
          !isActive && position !== 'middle'
            ? 'hover:bg-[#3f3e3e70] hover:text-blue-600'
            : ''
        }
        ${'text-gray-300' && position === 'middle'}
      `;

  return isActive || position === 'middle' ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={hreF} className={className} replace scroll={false}>
      {page}
    </Link>
  );
}
