import MovieCard from './MovieCard';

const MovieList = ({ movies, error, isLoading }) => {
	return (
		<div className='flex gap-10 items-start px-16 py-12 h-full overflow-x-auto no-scroll min-h-[300px]'>
			{isLoading && <h2>Cargando...</h2>}
			{error.status !== false && (
				<div>
					<p>{error.statusCode}</p>
					<p>{error.message}</p>
				</div>
			)}
			<>
				{movies &&
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
			</>
		</div>
	);
};

export default MovieList;
