import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-full">
      <Link
        href="/muwatta"
        className="bg-white w-full max-w-sm p-2 rounded-lg shadow-lg
                   transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer block text-center"
      >
        <h1 className="text-3xl font-bold text-gray-900 hover:text-green-700 transition-colors duration-300">
          Muwatta
        </h1>
        <p className="text-sm text-gray-500 mb-1">Imam Malik Ibn Anas</p>
      </Link>
    </div>
  );
}
