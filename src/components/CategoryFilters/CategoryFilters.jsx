import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterButton from './FilterButton';

const CategoryFilters = ({ toggleModal, params, genres }) => {
	const navigate = useNavigate();
	const [filters, setFilters] = useState({
		genre: params.get('genreID'),
		title: params.get('genreName'),
		sortBy: params.get('sortBy') ?? 'vote_average.desc',
		minVotes: params.get('minVotes') ?? '100',
		page: params.get('page'),
	});

	const setFilterGenre = (genre, title) =>
		setFilters(prevFilters => ({ ...prevFilters, genre, title }));
	const setFilterSortBy = sortBy =>
		setFilters(prevFilters => ({ ...prevFilters, sortBy }));
	const setFilterMinVotes = minVotes =>
		setFilters(prevFilters => ({ ...prevFilters, minVotes }));

	return (
		<div className='m-10'>
			<div className='flex flex-wrap gap-y-5 gap-x-20'>
				<div className='w-full'>
					<label htmlFor='genre' className='font-bold'>
						Género
					</label>
					<div>
						{genres &&
							genres.map(genre => {
								return (
									<FilterButton
										key={genre.id}
										filters={filters}
										filter={'genre'}
										setFilter={setFilterGenre}
										dataset={genre.id}
										text={genre.name}
									/>
								);
							})}
					</div>
				</div>
				<div>
					<label htmlFor='sortBy' className='font-bold'>
						Ordenar por:{' '}
					</label>
					<div>
						<FilterButton
							filters={filters}
							filter={'sortBy'}
							setFilter={setFilterSortBy}
							dataset='vote_average.desc'
							text='Votos'
						/>
						<FilterButton
							filters={filters}
							filter={'sortBy'}
							setFilter={setFilterSortBy}
							dataset='popularity.desc'
							text='Popularidad'
						/>
						<FilterButton
							filters={filters}
							filter={'sortBy'}
							setFilter={setFilterSortBy}
							dataset='revenue.desc'
							text='Ingresos'
						/>
					</div>
				</div>
				<div>
					<label htmlFor='sortBy' className='font-bold'>
						Mínimo de votos:{' '}
					</label>
					<div>
						<FilterButton
							filters={filters}
							filter={'minVotes'}
							setFilter={setFilterMinVotes}
							dataset='1'
							text='1'
						/>
						<FilterButton
							filters={filters}
							filter={'minVotes'}
							setFilter={setFilterMinVotes}
							dataset='100'
							text='100'
						/>
						<FilterButton
							filters={filters}
							filter={'minVotes'}
							setFilter={setFilterMinVotes}
							dataset='500'
							text='500'
						/>
						<FilterButton
							filters={filters}
							filter={'minVotes'}
							setFilter={setFilterMinVotes}
							dataset='1000'
							text='1000'
						/>
					</div>
				</div>
			</div>

			<button
				className='px-14 py-2 w-full lg:w-fit bg-slate-900 text-slate-50 rounded-sm mt-14 hover:scale-105'
				onClick={() => {
					navigate(
						`/categories?genreID=${filters.genre}&genreName=${
							filters.title
						}&minVotes=${filters.minVotes || '1000'}&sortBy=${
							filters.sortBy || 'vote_average.desc'
						}&page=1`
					);
					toggleModal();
				}}>
				Filtrar
			</button>
		</div>
	);
};

export default CategoryFilters;
