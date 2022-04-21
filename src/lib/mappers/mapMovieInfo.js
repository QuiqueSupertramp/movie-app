export default function mapMovieInfo(movie) {
	if (!movie) return [];
	const data = {
		title: movie.title || movie.name || 'not name',
		tagline: movie.tagline || '',
		image: movie.poster_path,
		voteAverage: movie.vote_average.toFixed(1) || '-',
		voteCount: Number(movie.vote_count)?.toLocaleString() || undefined,
		overview: movie.overview || 'No hay descripción de la película.',
		trailer: movie.videos?.results[0]?.key || undefined,
	};
	return data;
}
