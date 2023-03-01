"use client";

export default function BackLink() {
  return (
    <a
      href="#"
      onClick={() => window.history.back()}
      className="text-left w-full px-4 rounded-md hover:bg-slate-400"
    >
      Back
    </a>
  );
}
