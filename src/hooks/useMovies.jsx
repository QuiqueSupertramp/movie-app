import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import mapTrendingSearch from '../lib/mappers/mapTrendingSearch';

const useMovies = (getFunction, limit = 20) => {
	const location = useLocation();
	const [trendingMovies, setTrendingMovies] = useState({
		movies: [],
		error: {
			status: false,
			statusCode: 0,
			message: '',
		},
	});
	const [isLoading, setIsLoading] = useState(false);

	const setMoviesSearch = async () => {
		setIsLoading(true);

		const { success, data, error } = await getFunction();
		console.log('data', data);

		setTrendingMovies({
			movies: mapTrendingSearch(data.results, limit),
			error: {
				status: !success,
				statusCode: error.code,
				message: error.message,
			},
		});

		setIsLoading(false);
	};

	useEffect(() => {
		setMoviesSearch();
	}, [location.search]);

	return {
		movies: trendingMovies.movies,
		error: trendingMovies.error,
		isLoading,
	};
};

export default useMovies;
