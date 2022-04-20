import { API_KEY, API_URL } from '../lib/constants/Api';
import movieFetch from './movieFetch';

const types = {
	all: 'all',
	movies: 'movies',
	tv: 'tv',
	person: 'person',
};

const time = {
	day: 'day',
	week: 'week',
};

const language = {
	es: 'es',
	en: 'en',
};

const getTrending = async () => {
	const url = `${API_URL}/trending/${types.movies}/${time.week}?api_key=${API_KEY}&language=${language.es}`;

	const { data, success, error } = await movieFetch(url);
	return { data, success, error };
};

export default getTrending;
