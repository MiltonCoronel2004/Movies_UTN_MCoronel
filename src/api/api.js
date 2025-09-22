export async function getMovies(page) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?language=es-ES&page=${page}`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
      },
    });

    const data = await res.json();

    return data ?? [];
  } catch (e) {
    console.error(e);
  }
}

export async function searchMovie(query, page = 1) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true&language=es-ES&page=${page}`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      }
    );

    const data = await res.json();
    return data.results ?? [];
  } catch (e) {
    console.error(e);
    return [];
  }
}
