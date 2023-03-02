"use client";

export default function BackLink() {
  return (
    <a
      href="#"
      onClick={() => window.history.back()}
      className="text-left w-full px-4 sm:text-2xl xs:text-2xl text-xl rounded-md hover:bg-slate-400"
    >
      Back
    </a>
  );
}
