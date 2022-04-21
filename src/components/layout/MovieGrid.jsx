import usePeliculas from '../../hooks/usePeliculas';
import MovieCard from './MovieCard';

const MovieGrid = ({ by }) => {
	const { movies, error, isLoading } = usePeliculas(by);

	return (
		<div>
			<div className='flex flex-wrap gap-10 justify-center mx-20'>
				{isLoading && <h2>Cargando...</h2>}
				{error.status !== false && <h2>Error...</h2>}
				{!isLoading &&
					// movies &&
					movies.map(movie => {
						return (
							<MovieCard
								key={movie.id}
								id={movie.id}
								title={movie.title}
								overview={movie.overview}
								image={movie.image}
								average={movie.average}
								year={movie.year}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default MovieGrid;
