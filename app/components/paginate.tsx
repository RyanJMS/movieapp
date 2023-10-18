import { PaginateProps, Props, TotalPages } from "../interface/interface";
import Link from "next/link";

export default function Paginate({ params, total_pages }: PaginateProps) {
  let isNext = true;
  let isPrev = true;

  if (Number(params.searchResults[2]) - 1 === 0) {
    isPrev = false;
  }

  if (
    Number(params.searchResults[2]) + 1 > total_pages ||
    Number(params.searchResults[2]) === total_pages
  ) {
    isNext = false;
  }

  const currentPage = Number(params.searchResults[2]);

  const firstPage = Math.max(1, currentPage - 2);
  const lastPage = Math.min(total_pages, currentPage + 2);

  return (
    <>
      <div className="flex justify-center items-center">
        <Link
          href={`/searchResults/${params.searchResults[0]}/${
            params.searchResults[1]
          }/${Number(params.searchResults[2]) - 1}`}
          className={
            isPrev
              ? "text-white hover:text-slate-300 mr-5 text-2xl font-semibold"
              : "disabled text-white hover:text-slate-300 mr-5 text-2xl font-semibold"
          }
        >
          Prev
        </Link>
        {Array.from({ length: lastPage - firstPage + 1 }, (_, index) => {
          const page = firstPage + index;
          return (
            <Link
              key={page}
              href={`/searchResults/${params.searchResults[0]}/${params.searchResults[1]}/${page}`}
              className={
                page === currentPage
                  ? "text-2xl mx-1 text-blue-500 font-bold"
                  : "text-2xl mx-1 text-white hover:text-slate-300"
              }
            >
              {page}
            </Link>
          );
        })}
        <Link
          href={`/searchResults/${params.searchResults[0]}/${
            params.searchResults[1]
          }/${Number(params.searchResults[2]) + 1}`}
          className={
            isNext
              ? "text-white hover:text-slate-300 ml-5 text-2xl font-semibold"
              : "disabled text-white hover:text-slate-300 ml-5 text-2xl font-semibold"
          }
        >
          Next
        </Link>
      </div>
    </>
  );
}
