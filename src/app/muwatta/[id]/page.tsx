import data from "@/data/muwatta.json";

interface ChapterPageProps {
  params: { id: string };
}

export default function ChapterPage({ params }: ChapterPageProps) {
  const chapterId = parseInt(params.id, 10);
  const chapter = data.chapters.find((c) => c.id === chapterId);

  if (!chapter) {
    return <p className="text-center py-10">Chapitre introuvable.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto py-10">
      {/* Titre du chapitre principal */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {chapter.id} {chapter.title_fr}
        </h2>
        <h1 className="text-2xl font-bold text-gray-900 text-right">
          {chapter.title_ar}
        </h1>
      </div>

      {/* Sous-chapitres et leurs hadiths */}
      {chapter.sub_chapters.map((sub, index) => (
        <div key={sub.id} className="mb-8">
          {/* Titre du sous-chapitre avec numéro */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              {chapter.id}.{index + 1} {sub.title_fr}
            </h2>
          </div>

          {/* Liste des hadiths du sous-chapitre */}
          <div className="space-y-6">
            {(Array.isArray(sub.hadiths[0]) 
              ? (sub.hadiths as any[]).flat() 
              : sub.hadiths
            ).map((hadith: any) => (
              <div
                key={hadith.hadith_id}
                className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition"
              >
                <p className="text-left text-gray-800 mb-2">{hadith.text_fr}</p>
                <p className="text-xl text-right text-gray-800 font-arabic">
                  {hadith.text_ar}
                </p>
                <p className="text-sm text-gray-500 mb-2">{hadith.book_ref}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
