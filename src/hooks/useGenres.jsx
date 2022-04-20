import { useEffect, useState } from 'react';
import getGenres from '../services/getGenres';

const useGenres = () => {
	console.log('holaaa');
	const [genres, setGenres] = useState({});
	const [isLoading, setisLoading] = useState(false);
	const x = async () => {
		setisLoading(true);
		const { data, success, error } = await getGenres();
		setGenres({
			genres: data.genres,
			error: {
				status: !success,
				statusCode: error.code,
				message: error.message,
			},
		});
		setisLoading(false);
	};
	useEffect(() => {
		x();
	}, []);

	return {
		genres: genres.genres,
		error: genres.error,
		isLoading,
	};
};

export default useGenres;
