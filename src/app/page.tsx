import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center h-screen overflow-hidden px-6 bg-[#FDFDF5]">

      {/* Conteneur pour phrase et recherche */}
      <div className="relative w-full mt-6 flex flex-col items-center md:flex-row md:items-start">
        {/* Phrase centrée */}
        <h2 className="text-lg md:text-xl text-gray-700 font-medium text-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 px-2">
          Les enseignements du Prophète Mohammed (ﷺ) toujours disponibles
        </h2>

        {/* Barre de recherche collée à droite sur grand écran */}
        <div className="w-full md:w-64 mt-4 md:mt-0 md:absolute md:right-0">
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
      </div>

      {/* Carré Muwatta centré */}
      <div className="flex-grow flex justify-center items-center w-full">
        <Link
          href="/muwatta"
          className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg
                     transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl 
                     cursor-pointer block text-center"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3 hover:text-green-700 transition-colors duration-300">
            Muwatta
          </h1>

          <p className="text-lg text-gray-600">Imam Malik Ibn Anas</p>

          <div className="mt-6 w-16 h-1 bg-green-600 mx-auto rounded-full"></div>
        </Link>
      </div>
    </div>
  );
}
