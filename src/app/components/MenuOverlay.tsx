import NavLink from "./NavLink";
import { navLinks } from "./Navbar";

export default function MenuOverlay() {
  return (
    <ul className="flex flex-col py-4 items-center md:hidden">
      {navLinks.map((link, index: number) => (
        <li key={index}>
          <NavLink title={link.title} href={link.path} />
        </li>
      ))}
    </ul>
  );
}
