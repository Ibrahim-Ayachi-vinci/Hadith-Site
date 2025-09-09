import Link from "next/link";
import data from "@/data/muwatta.json";

export default function MuwattaPage() {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Muwatta – <span className="text-green-700">Imam Malik Ibn Anas</span>
      </h1>

<div className="grid gap-4">
  {data.chapters.map((chapter) => (
    <Link
      key={chapter.id}
      href={`/muwatta/${chapter.id}`}
      className="block bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
    >
      <div className="flex justify-between items-center">
        {/* Titre français à gauche */}
        <h2 className="text-xl font-bold text-gray-900 text-left">
          {chapter.id} {chapter.title_fr}
        </h2>

        {/* Titre arabe à droite */}
        <h2 className="text-xl font-bold text-gray-900 text-right">
          {chapter.title_ar}
        </h2>
      </div>
    </Link>
  ))}
</div>

    </div>
  );
}
