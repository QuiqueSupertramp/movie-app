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
		<div>
			<div>
				<label htmlFor='genre'>Género</label>
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
				<label htmlFor='sortBy'>Ordenar por: </label>
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
				<label htmlFor='sortBy'>Mínimo de votos: </label>
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
						dataset='1000'
						text='1000'
					/>
				</div>
			</div>

			<button
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
