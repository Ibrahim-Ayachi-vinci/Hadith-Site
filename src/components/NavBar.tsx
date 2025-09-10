import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-[#E6F4EA] shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Left side */}
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-xl font-bold hover:text-green-700">
          Home
        </Link>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        <Link href="/about" className="hover:text-green-700">
          À propos
        </Link>
        <Link href="/contact" className="hover:text-green-700">
          Contact
        </Link>
      </div>
    </nav>
  );
}
