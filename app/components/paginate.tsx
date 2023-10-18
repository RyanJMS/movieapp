import { Props } from "../interface/interface";
import Link from "next/link";

export default function Paginate({ params }: Props) {
  return (
    <>
      <div className="flex justify-between">
        <Link
          href={`/searchResults/${params.searchResults[0]}/${
            params.searchResults[1]
          }/${Number(params.searchResults[2]) - 1}`}
        >
          Prev
        </Link>

        <Link
          href={`/searchResults/${params.searchResults[0]}/${
            params.searchResults[1]
          }/${Number(params.searchResults[2]) + 1}`}
        >
          Next
        </Link>
      </div>
    </>
  );
}
