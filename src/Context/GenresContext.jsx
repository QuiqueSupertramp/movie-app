import { createContext, useEffect, useState } from 'react';
import getGenres from '../services/getGenres';

const GenresContext = createContext();

export const GenresProvider = ({ children }) => {
	const [genres, setGenres] = useState({
		genres: [],
		success: false,
		error: false,
	});

	const loadGenres = async () => {
		const genres = await getGenres();
		setGenres({
			genres: genres.data.genres,
			success: genres.success,
			error: genres.error,
		});
	};

	useEffect(() => {
		loadGenres();
	}, []);

	return (
		<GenresContext.Provider value={genres}>{children}</GenresContext.Provider>
	);
};

export default GenresContext;
