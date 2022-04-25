import useObserver from '@/hooks/useObserver';
import usePeliculas from '../../hooks/usePeliculas';
import MovieList from './MovieList';
import Section from './Section';

const Category = ({ category, title }) => {
	const { ref, isVisible } = useObserver();

	const { movies, error, isLoading } = usePeliculas(
		'category',
		category,
		isVisible
	);

	return (
		<div ref={ref}>
			<Section title={title} link={category}>
				<MovieList movies={movies} error={error} isLoading={isLoading} />
			</Section>
		</div>
	);
};

export default Category;
