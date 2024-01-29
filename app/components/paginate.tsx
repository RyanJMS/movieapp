import { PaginateProps } from "../interface/interface";
import Link from "next/link";

export default function Paginate({ params, total_pages }: PaginateProps) {
  let currentPage = Number(params.search ? params.search[2] : params.genre[2]);

  return (
    <>
      <div className="flex justify-center items-center">
        <Link
          href={`/${params.search ? "search" : "genre"}/${
            params.search ? params.search[0] : params.genre[0]
          }/${params.search ? params.search[1] : params.genre[1]}/${
            currentPage - 1 !== 0 ? currentPage - 1 : currentPage
          }`}
          className={
            currentPage !== 1
              ? "text-white hover:text-slate-300 mr-5 text-2xl font-semibold"
              : "disabled text-white hover:text-slate-300 mr-5 text-2xl font-semibold"
          }
        >
          Prev
        </Link>
        <h2 className="text-white hover:text-slate-300 text-2xl font-semibold">
          {currentPage}
        </h2>
        <Link
          href={`/${params.search ? "search" : "genre"}/${
            params.search ? params.search[0] : params.genre[0]
          }/${params.search ? params.search[1] : params.genre[1]}/${
            currentPage + 1 <= total_pages ? currentPage + 1 : currentPage
          }`}
          className={
            currentPage + 1 <= total_pages
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
