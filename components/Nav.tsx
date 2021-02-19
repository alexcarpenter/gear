import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/posts", label: "Posts" },
  { href: "/newsletter", label: "Newsletter" },
];

const Nav: React.FC = () => {
  return (
    <nav className='mb-8'>
      <ul className='flex items-center mt-4 sm:mt-0 space-x-4 sm:space-x-8 font-mono'>
        {navItems.map((item) => {
          return (
            <li key={item.href}>
              <Link href={item.href}>
                <a className={`hover:text-gray-900 transition-colors`}>
                  {item.label}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
