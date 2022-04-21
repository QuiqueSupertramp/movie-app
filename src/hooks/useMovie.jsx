import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import mapMovieInfo from '../lib/mappers/mapMovieInfo';
import getMovie from '../services/getMovie';

const useMovie = () => {
	const { id } = useParams();

	const [movie, setMovie] = useState({
		data: null,
		succes: true,
		error: false,
	});

	const [isLoading, setisLoading] = useState(true);

	const getMovieInfo = async () => {
		setisLoading(true);
		const data = await getMovie(id);
		setMovie({
			data: mapMovieInfo(data.data),
			success: data.success,
			error: data.error,
		});
		setisLoading(false);
	};

	useEffect(() => {
		getMovieInfo();
	}, []);

	return { movie, isLoading };
};

export default useMovie;
