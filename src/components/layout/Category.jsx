import usePeliculas from '../../hooks/usePeliculas';
import MovieList from './MovieList';
import Section from './Section';

const Category = ({ category, title }) => {
	const { movies, error, isLoading } = usePeliculas('category', category.id);

	return (
		<Section title={title} link={category}>
			<MovieList movies={movies} error={error} isLoading={isLoading} />
		</Section>
	);
};

export default Category;
