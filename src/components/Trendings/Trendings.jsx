import usePeliculas from '../../hooks/usePeliculas';
import MovieList from '../layout/MovieList';
import Section from '../layout/Section';

const Trendings = () => {
	const { movies, error, isLoading } = usePeliculas('trending');

	return (
		<Section title='Tendencias Ahora'>
			<MovieList movies={movies} error={error} isLoading={isLoading} />
		</Section>
	);
};

export default Trendings;
