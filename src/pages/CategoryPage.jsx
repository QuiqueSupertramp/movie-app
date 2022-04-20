import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import CategoryFilters from '../components/CategoryFilters/CategoryFilters';
import MovieCard from '../components/layout/MovieCard';
import Modal from '../components/Modal/Modal';
import GenresContext from '../Context/GenresContext';
import useModal from '../hooks/useModal';
import usePeliculas from '../hooks/usePeliculas';

const CategoryPage = () => {
	const { genres } = useContext(GenresContext);

	const [params, setParams] = useSearchParams();

	const setGenreParam = (genreID, genreName) => {
		params.set('genreID', genreID);
		params.set('genreName', genreName);
		setParams(params);
	};
	const setMinVotesParam = minVotes => {
		params.set('minVotes', minVotes);
		setParams(params);
	};
	const setSortByParam = sortBy => {
		params.set('sortBy', sortBy);
		setParams(params);
	};
	const setPageParam = page => {
		params.set('page', page);
		setParams(params);
	};

	const title = params.get('genreName');
	if (params.get('page') === null) setPageParam(1);

	const { movies, error, isLoading } = usePeliculas('category');
	const { isOpen, toggleModal } = useModal();

	return (
		<>
			<section className='flex flex-col justify-center items-center gap-10 mb-20'>
				{isOpen && (
					<Modal toggleModal={toggleModal} isOpen={isOpen}>
						<CategoryFilters
							setGenreParam={setGenreParam}
							setMinVotesParam={setMinVotesParam}
							setSortByParam={setSortByParam}
							setPageParam={setPageParam}
							toggleModal={toggleModal}
							params={params}
							genres={genres}
						/>
					</Modal>
				)}
				<header className='flex gap-10 items-center justify-evenly my-4'>
					<h2 className='font-bold text-slate-50 text-3xl'>{title}</h2>
					<div>
						<label htmlFor='sortBy' className='text-white'>
							Ordenar por:{' '}
						</label>
						<select
							className='py-1 px-3 border-0 outline-none rounded-sm ml-2'
							name='sortBy'
							value={params.get('sortBy') ?? 'vote_average.desc'}
							onChange={e => {
								setSortByParam(e.target.value);
								setPageParam(1);
							}}>
							<option value='popularity.desc'>Popularidad</option>
							<option value='vote_average.desc'>Votos</option>
							<option value='revenue.desc'>Ingresos</option>
						</select>
					</div>
					<button onClick={toggleModal}>Filtrar</button>
				</header>
				<div className='flex flex-wrap gap-10 justify-center mx-20'>
					{isLoading && <h2>Cargando...</h2>}
					{error.status !== false && <h2>Error...</h2>}
					{!isLoading &&
						movies &&
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
				<div className='flex items-center gap-5'>
					<button
						className='bg-slate-400 py-1 px-3 rounded-sm disabled:hidden'
						onClick={() => setPageParam(Number(params.get('page')) - 1)}
						disabled={Number(params.get('page')) === 1}>
						Página anterior
					</button>
					<div className='text-white'>Page: {params.get('page')}</div>
					<button
						className='bg-slate-400 py-1 px-3 rounded-sm '
						onClick={() => setPageParam(Number(params.get('page')) + 1)}>
						Página siguiente
					</button>
				</div>
			</section>
		</>
	);
};

export default CategoryPage;
