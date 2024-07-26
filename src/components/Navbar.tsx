import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-xl font-semibold">Cronulla Ink Tattoo Studio</a>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/" legacyBehavior>
            <a className="hover:text-gray-300">Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="hover:text-gray-300">About</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="hover:text-gray-300">Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
