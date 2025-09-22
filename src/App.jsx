import { useEffect, useState } from "react";
import { getMovies, searchMovie } from "./api/api";
import Card from "./components/Card";
import Container from "./components/Container";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const fetchMovies = async () => {
    setLoading(true);
    let data = [];

    if (search.trim()) {
      data = await searchMovie(search, page);
    } else {
      const res = await getMovies(page);
      data = res.results ?? [];
    }
    setMovies(data);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchMovies();
  }, [page, search]);

  const nextPage = () => setPage((p) => p + 1);
  const previousPage = () => setPage((p) => (p > 1 ? p - 1 : 1));

  return (
    <main className="min-h-screen bg-base-100 py-8 px-4 space-y-5">
      <div className="flex justify-center">
        <label className="input max-w-lg w-full">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            placeholder="Search Movies..."
            value={search}
            onChange={(e) => {
              setPage(1);
              setSearch(e.target.value);
            }}
          />
        </label>
      </div>

      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <button className="btn btn-outline" onClick={previousPage}>
          Previous
        </button>
        <div className="space-x-4">
          {page > 1 && (
            <div className="join">
              <button className="join-item btn" onClick={() => setPage(page - 1)}>
                {page - 1}
              </button>
            </div>
          )}
          <div className="join">
            <button className="join-item btn bg-gray-700">{page}</button>
          </div>
          <div className="join">
            <button className="join-item btn" onClick={() => setPage(page + 1)}>
              {page + 1}
            </button>
          </div>
        </div>

        <button className="btn btn-outline" onClick={nextPage}>
          Next
        </button>
      </div>

      <Container loading={loading}>
        {movies.map((movie) => (
          <Card
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            vote_average={movie.vote_average.toFixed(1)}
            overview={movie.overview}
          />
        ))}
      </Container>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <button className="btn btn-outline" onClick={previousPage}>
          Previous
        </button>
        <div className="space-x-4">
          {page > 1 && (
            <div className="join">
              <button className="join-item btn" onClick={() => setPage(page - 1)}>
                {page - 1}
              </button>
            </div>
          )}
          <div className="join">
            <button className="join-item btn bg-gray-700">{page}</button>
          </div>
          <div className="join">
            <button className="join-item btn" onClick={() => setPage(page + 1)}>
              {page + 1}
            </button>
          </div>
        </div>

        <button className="btn btn-outline" onClick={nextPage}>
          Next
        </button>
      </div>
    </main>
  );
}

export default App;
