import Link from "next/link";

export default function MyLink({ props, children }: any) {
  // defaults prefetch to false if `prefetch` is not true
  return (
    <Link {...props} prefetch={props.prefetch ?? false}>
      {children}
    </Link>
  );
}
