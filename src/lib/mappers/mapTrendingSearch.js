export default function mapTrendingSearch(results) {
	if (results.length === 0) return [];
	const data = results.map((movie, index) => ({
		id: movie.id || index,
		title: movie.title || movie.name || 'not name',
		image: movie.poster_path,
		average: movie.vote_average.toFixed(1) || '-',
		overview: movie.overview || '-',
		year: new Date(movie.release_date).getFullYear() || '-',
	}));
	return data;
}
