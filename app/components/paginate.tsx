import { PaginateProps, Props, TotalPages } from "../interface/interface";
import Link from "next/link";

export default function Paginate({ params, total_pages }: PaginateProps) {
  let isNext = true;
  let isPrev = true;

  if (Number(params.search ? params.search[2] : params.genre[2]) - 1 === 0) {
    isPrev = false;
  }

  if (
    Number(params.search ? params.search[2] : params.genre[2]) + 1 >
      total_pages ||
    Number(params.search ? params.search[2] : params.genre[2]) === total_pages
  ) {
    isNext = false;
  }

  const currentPage = Number(
    params.search ? params.search[2] : params.genre[2]
  );

  const firstPage = Math.max(1, currentPage - 2);
  const lastPage = Math.min(total_pages, currentPage + 2);

  return (
    <>
      <div className="flex justify-center items-center">
        <Link
          href={`/search/${
            params.search ? params.search[0] : params.genre[0]
          }/${params.search ? params.search[1] : params.genre[1]}/${
            Number(params.search ? params.search[2] : params.genre[2]) - 1
          }`}
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
              href={`/${params.search ? "search" : "genre"}/${
                params.search ? params.search[0] : params.genre[0]
              }/${params.search ? params.search[1] : params.genre[1]}/${page}`}
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
          href={`/${params.search ? "search" : "genre"}/${
            params.search ? params.search[0] : params.genre[0]
          }/${params.search ? params.search[1] : params.genre[1]}/${
            Number(params.search ? params.search[2] : params.genre[2]) + 1
          }`}
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
