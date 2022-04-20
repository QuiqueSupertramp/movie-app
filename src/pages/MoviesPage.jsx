import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMovie from '../services/getMovie';

const MoviesPage = () => {
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
		setMovie(data);
		setisLoading(false);
	};

	useEffect(() => {
		getMovieInfo();
	}, []);

	const ingresos = Number(movie.data?.revenue).toLocaleString() || 0;
	console.log('ingresos', ingresos);

	return (
		<div>
			{isLoading === true && <h2>Cargando...</h2>}
			{movie.error && (
				<div>
					<p>{movie.error.code}</p>
					<p>{movie.error.message}</p>
				</div>
			)}
			{movie.data && (
				<section>
					<article className='flex gap-20 w-4/5 xl:w-8/12 mx-auto my-20'>
						<div className='flex flex-col gap-14 w-6/12 xl:w-7/12 text-slate-50 p-2'>
							<div className='flex items-center gap-10 xl:gap-20'>
								<div>
									<h2 className='text-5xl font-bold'>{movie.data.title}</h2>
									<p className=''>{movie.data.tagline}</p>
									{/* <p>FECHA DE ESTRENO : {movie.data.release_date}</p> */}
								</div>
								<div className='flex gap-5 items-stretch'>
									<div className='flex flex-col items-center gap-2 rounded-md bg-slate-600 w-max p-4'>
										<span className='text-5xl font-bold italic text-slate-400'>
											{movie.data.vote_average}
										</span>
										<span className=''>
											{Number(movie.data.vote_count).toLocaleString()} votos
										</span>
									</div>
								</div>
							</div>
							<div className='text-lg'>{movie.data.overview}</div>
						</div>
						<div className='w-5/12 xl:w-4/12 object-contain '>
							<img
								className='rounded-sm'
								src={`https://image.tmdb.org/t/p/w500/${movie?.data?.poster_path}`}
								alt=''
							/>
						</div>
					</article>
					{movie?.data?.videos?.results[0] && (
						<iframe
							className='mx-auto h-[70vw] max-h-screen w-full py-20 px-40 rounded-md'
							src={`https://www.youtube.com/embed/${movie.data.videos.results[0].key}`}></iframe>
					)}
				</section>
			)}
		</div>
	);
};

export default MoviesPage;
