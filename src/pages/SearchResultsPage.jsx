import MovieGrid from '@/components/layout/MovieGrid';
import Pagination from '@/components/Pagination';
import usePeliculas from '../hooks/usePeliculas';

const SearchResultsPage = () => {
	const { movies, error, isLoading } = usePeliculas('query');
	if (movies.length === 0) return <div>No hay peliculas</div>;

	return (
		<div className='flex flex-wrap gap-10 justify-center m-20'>
			{isLoading && <h2>Cargando...</h2>}
			{error?.status === true && (
				<div>
					<p>{error.statusCode}</p>
					<p>{error.message}</p>
				</div>
			)}
			{movies && <MovieGrid by='query' />}
			<Pagination />
		</div>
	);
};

export default SearchResultsPage;
