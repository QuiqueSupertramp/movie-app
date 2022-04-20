import { API_KEY, API_URL } from '../lib/constants/Api';
import movieFetch from './movieFetch';

const url = `${API_URL}/genre/movie/list?api_key=${API_KEY}&language=es`;

const getGenres = async () => {
	const { data, error, success } = await movieFetch(url);
	return { data, error, success };
};

export default getGenres;
