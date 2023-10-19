"use client";
import { useRouter } from "next/navigation";

export default function BackLink() {
  const router = useRouter();
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        router.back();
      }}
      className="text-left w-full px-4 sm:text-2xl xs:text-2xl text-xl rounded-md hover:bg-slate-400"
    >
      Back
    </a>
  );
}
