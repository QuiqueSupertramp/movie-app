import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../lib/constants/Api';
import mapTrendingSearch from '../lib/mappers/mapTrendingSearch';
import movieFetch from '../services/movieFetch';

const useCategoryMovies = (genre, params, setPage) => {
	const [categoryMovies, setCategoryMovies] = useState({
		movies: [],
		error: {
			status: false,
			statusCode: 0,
			message: '',
		},
	});
	const [isLoading, setIsLoading] = useState(false);

	const url = `${API_URL}/discover/movie?api_key=${API_KEY}&language=es&vote_count.gte=${params.get(
		'minVotes'
	)}&with_genres=${genre}&sort_by=${params.get('sortBy')}&page=${params.get(
		'page'
	)}`;

	const y = async () => {
		setIsLoading(true);
		try {
			const { data, success, error } = await movieFetch(url);
			console.log('data', data);
			if (data === null || data.total_pages <= data.page) return setPage(1);
			setCategoryMovies({
				movies: mapTrendingSearch(data.results, 20),
				error: {
					status: !success,
					statusCode: error.code,
					message: error.message,
				},
			});
		} catch (error) {
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		y();
	}, [genre, params]);

	return {
		movies: categoryMovies.movies,
		error: categoryMovies.error,
		isLoading,
	};
};

export default useCategoryMovies;
