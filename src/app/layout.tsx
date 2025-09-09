import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Hadith Repository",
  description: "Site de hadiths",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-[#FDFDF5] text-gray-900">
        {/* Navbar sticky */}
        <nav className="bg-[#E6F4EA] shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-xl font-bold hover:text-green-700">
              Home
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/about" className="hover:text-green-700">
              À propos
            </Link>
            <Link href="/contact" className="hover:text-green-700">
              Contact
            </Link>
          </div>
        </nav>

        {/* Contenu */}
        <main className="min-h-screen p-6 pt-24"> {/* <-- pt-24 = espace pour navbar */}
          {children}
        </main>
      </body>
    </html>
  );
}