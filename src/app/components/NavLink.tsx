import Link from "next/link";

interface NavLinkInterface<T> {
  href: string;
  title: string;
}

export default function NavLink<T>(props: NavLinkInterface<T>) {
  const { href, title } = props;

  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-c2 sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
}
