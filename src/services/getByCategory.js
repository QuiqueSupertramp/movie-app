import { API_KEY, API_URL } from '../lib/constants/Api';
import movieFetch from './movieFetch';

const getByCategory = async (searchParams, category) => {
	const genre = category || searchParams.get('genreID');
	const sortBy = searchParams.get('sortBy') ?? 'vote_average.desc';
	const minVotes = searchParams.get('minVotes') ?? 1000;
	const page = searchParams.get('page') ?? 1;
	const year = searchParams.get('year');

	const url = `${API_URL}/discover/movie?api_key=${API_KEY}&language=es&with_genres=${genre}&sort_by=${sortBy}&vote_count.gte=${minVotes}&page=${page}&primary_release_year=${year}`;

	const { data, success, error } = await movieFetch(url);

	return { data, success, error };
};

export default getByCategory;
