export default function Card({ title, poster_path, release_date, vote_average, overview }) {
  return (
    <div className="group bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 cursor-pointer">
      {/* Poster/Banner */}
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay con gradiente sutil */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Rating badge */}
        <div className="absolute top-3 right-3 bg-yellow-500 text-black px-2 py-1 rounded-md text-sm font-bold flex items-center gap-1">
          <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          {vote_average}
        </div>
      </div>

      {/* Información de la película */}
      <div className="p-4">
        {/* Nombre */}
        <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 leading-tight group-hover:text-yellow-400 transition-colors duration-200">
          {title}
        </h3>

        {/* Detalles */}
        <div className="text-gray-400 text-sm mb-3 space-y-1">
          <div className="flex items-center gap-2">
            <span>{release_date.split("-")[0]}</span>
            {/* <span>•</span>
            <span>120 min</span> */}
          </div>
          {/* <div className="flex flex-wrap gap-1">
            <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">Acción</span>
            <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">Sci-Fi</span>
          </div> */}
        </div>

        {/* Ver más */}
        <button
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md font-medium transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-red-500"
          onClick={() => document.getElementById(`modal${title}`).showModal()}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8 5v10l8-5z" />
          </svg>
          Ver más
        </button>
      </div>

      <dialog id={`modal${title}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{overview}</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
