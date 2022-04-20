import { API_KEY, API_URL } from '../lib/constants/Api';
import movieFetch from './movieFetch';

const getByQuery = async searchParams => {
	const url = `${API_URL}/search/movie?api_key=${API_KEY}&query=${searchParams.get(
		'query'
	)}&language=es&page=${searchParams.get('page') ?? 1}`;

	const { success, data, error } = await movieFetch(url);
	return { success, data, error };
};

export default getByQuery;
