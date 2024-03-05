import { ReadonlyURLSearchParams } from 'next/navigation';
import { getAllPokenTypes, getCategory } from './services';

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  let pages = Math.ceil(totalPages / 25);
  if (pages <= 5) {
    return Array.from({ length: pages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage < 3) {
    return [1, 2, 3, '...', pages - 1, pages];
  }

  console.log(currentPage, pages);
  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (
    (currentPage > pages - 2 && currentPage % 2 === 0) ||
    currentPage >= pages - 1
  ) {
    return [1, 2, '...', pages - 2, pages - 1, pages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    pages,
  ];
};

export const createPageURL = (
  pageNumber: number | string,
  searchParams: ReadonlyURLSearchParams,
  pathname: string
) => {
  const params = new URLSearchParams(searchParams);
  params.set('page', pageNumber.toString());
  return `${pathname}?${params.toString()}`;
};

export async function generateSSGParams() {
  try {
    const { data } = await getAllPokenTypes();
    return data.results.map((n) => ({ categoryName: n.name }));

    // const data = await Promise.all(
    //   objs.map((e) => getCategory(e.categoryName))
    // );

    // let i = 0;
    // const allPages = [] as { categoryName: string }[];
    // data.forEach((d) => {
    //   let pages = [];
    //   let len = d.data.pokemon.length;
    //   const pageNum = Math.ceil(len / 25);
    //   for (let m = 1; m < pageNum; m++) {
    //     pages.push({ categoryName: `${objs[i].categoryName}?page=${m}` });
    //   }
    //   i++;
    //   allPages.push(...pages);
    // });

    // console.log(allPages);
    // return allPages;
  } catch (error) {
    console.error(error, 'generateSSG');
    return [] as { categoryName: string }[];
  }
}
