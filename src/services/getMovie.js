import { API_KEY } from '../lib/constants/Api';
import movieFetch from './movieFetch';

const getMovie = async id => {
	const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es&append_to_response=videos&include_image_language=es,null`;

	const { data, success, error } = await movieFetch(url);
	return { data, success, error };
};

export default getMovie;
