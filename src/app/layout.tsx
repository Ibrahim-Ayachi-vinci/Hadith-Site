import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Hadith Repository",
  description: "Site de hadiths",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-[#FDFDF5] text-gray-900">
        <NavBar />
        <main className="p-6 bg-[#FDFDF5]">{children}</main> {/* ⬅️ plus de pt-24 */}
      </body>
    </html>
  );
}
