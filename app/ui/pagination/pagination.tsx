'use client';
import PaginationArrow from './pagination-arrow';
import PaginationItem from './pagination-item';

import { generatePagination } from '@/app/lib/utils';
import { useSearchParams, usePathname } from 'next/navigation';
import { createPageURL } from '@/app/lib/utils';

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page') || '1');
  const allPages = generatePagination(currentPage, totalPages);

  console.log(allPages);
  return (
    <div className='inline-flex mt-auto'>
      <PaginationArrow
        direction='left'
        href={createPageURL(currentPage - 1, searchParams, pathname)}
        isDisabled={currentPage <= 1}
      />

      <div className='flex -space-x-px'>
        {allPages.map((page, index) => {
          let position: 'first' | 'last' | 'single' | 'middle' | undefined;

          if (index === 0) position = 'first';
          if (index === allPages.length - 1) position = 'last';
          if (allPages.length === 1) position = 'single';
          if (page === '...') position = 'middle';

          return (
            <PaginationItem
              key={page}
              hreF={createPageURL(page, searchParams, pathname)}
              page={page}
              position={position}
              isActive={currentPage === page}
            />
          );
        })}
      </div>

      <PaginationArrow
        direction='right'
        href={createPageURL(currentPage + 1, searchParams, pathname)}
        isDisabled={currentPage >= Math.ceil(totalPages / 25)}
      />
    </div>
  );
}
