"use client";

import { Circles } from "react-loader-spinner";

export default function LoadingSkeleton() {
  return (
    <div className="flex h-screen items-center">
      <div className="mx-auto">
        <Circles
          height="80"
          width="80"
          color="#ADD8E6"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );
}
