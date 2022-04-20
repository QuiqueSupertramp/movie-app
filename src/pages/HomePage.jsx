import { useContext } from 'react';
import Category from '../components/layout/Category';
import Trendings from '../components/Trendings/Trendings';
import GenresContext from '../Context/GenresContext';
// import useGenres from '../hooks/useGenres';

const HomePage = () => {
	const { genres, error, isLoading } = useContext(GenresContext);

	return (
		<>
			<Trendings />
			{isLoading && <h2>Cargando...</h2>}
			{error?.status === true && (
				<div>
					<p>{error.statusCode}</p>
					<p>{error.message}</p>
				</div>
			)}
			{genres &&
				genres.map(genre => (
					<Category key={genre.id} category={genre} title={genre.name} />
				))}
		</>
	);
};

export default HomePage;
