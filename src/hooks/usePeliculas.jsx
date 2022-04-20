import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import mapTrendingSearch from '../lib/mappers/mapTrendingSearch';
import getByCategory from '../services/getByCategory';
import getByQuery from '../services/getByQuery';
import getTrending from '../services/getTrending';

const initialState = {
	movies: [],
	error: {
		status: false,
		statusCode: 0,
		message: '',
	},
};

const usePeliculas = (by, category) => {
	const location = useLocation();
	const [searchParams, setSearchParams] = useSearchParams();
	const [trendingMovies, setTrendingMovies] = useState(initialState);
	const [isLoading, setIsLoading] = useState(false);

	const setPageParam = page => {
		searchParams.set('page', page);
		setSearchParams(searchParams);
	};

	const setMoviesSearch = async () => {
		setIsLoading(true);
		setTrendingMovies(initialState);

		const getFunction = () => {
			if (by === 'trending') return getTrending();
			if (by === 'query') return getByQuery(searchParams);
			if (by === 'category') return getByCategory(searchParams, category);
		};

		const { success, data, error } = await getFunction();

		if (data.page > data.total_pages) {
			setPageParam(1);
			return;
		}

		setTrendingMovies({
			movies: mapTrendingSearch(data.results),
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

export default usePeliculas;
