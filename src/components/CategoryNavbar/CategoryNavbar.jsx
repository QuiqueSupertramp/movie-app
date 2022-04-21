import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import GenresContext from '../../Context/GenresContext';
import useModal from '../../hooks/useModal';
import CategoryFilters from '../CategoryFilters/CategoryFilters';
import Modal from '../Modal/Modal';

const CategoryNavbar = () => {
	const { genres } = useContext(GenresContext);
	const [searchparams, setSearchParams] = useSearchParams();
	const sortBy = searchparams.get('sortBy') ?? 'vote_average.desc';
	const setSortByParam = sortBy => {
		searchparams.set('sortBy', sortBy);
		searchparams.set('page', 1);
		setSearchParams(searchparams);
	};
	const title =
		searchparams.get('genreName') === 'null' || !searchparams.get('genreName')
			? 'Categorías'
			: searchparams.get('genreName');

	const { isOpen, toggleModal } = useModal();

	return (
		<>
			{isOpen && (
				<Modal toggleModal={toggleModal} isOpen={isOpen}>
					<CategoryFilters
						toggleModal={toggleModal}
						params={searchparams}
						genres={genres}
					/>
				</Modal>
			)}
			<header className='flex items-center justify-between rounded-sm mt-8 mb-4 bg-slate-700 text-slate-50 w-3/4 px-10 py-4'>
				<div className='text-left w-full'>
					<label htmlFor='sortBy' className='text-white'>
						Ordenar por:{' '}
					</label>
					<select
						className='py-1 px-3 text-black border-0 outline-none rounded-sm ml-2'
						name='sortBy'
						value={sortBy}
						onChange={e => setSortByParam(e.target.value)}>
						<option value='popularity.desc'>Popularidad</option>
						<option value='vote_average.desc'>Votos</option>
						<option value='revenue.desc'>Ingresos</option>
					</select>
				</div>
				<h2 className='font-bold text-center w-full text-3xl'>{title}</h2>
				<button className='text-right w-full' onClick={toggleModal}>
					Filtro avanzado
				</button>
			</header>
		</>
	);
};

export default CategoryNavbar;
