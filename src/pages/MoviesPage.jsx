import useMovie from '../hooks/useMovie';

const MoviesPage = () => {
	const { movie, isLoading } = useMovie();

	const title = movie.data?.title || '';
	const tagline = movie.data?.tagline;
	const voteAverage = movie.data?.voteAverage;
	const voteCount = Number(movie.data?.voteCount).toLocaleString();
	const overview = movie.data?.overview;
	const image = movie.data?.image;
	const trailer = movie.data?.trailer;

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
					<article className='flex justify-between gap-32 w-4/5 xl:w-9/12 mx-auto my-20'>
						<div className='flex flex-col gap-14 text-slate-50 p-2'>
							<div className='flex items-center gap-10 xl:gap-20'>
								<div>
									<h2 className='text-5xl font-bold'>{title}</h2>
									<p className='mt-2 text-slate-300 italic'>{tagline}</p>
								</div>
								<div className='flex gap-5 items-stretch'>
									<div className='flex flex-col items-center gap-2 rounded-md bg-slate-600 w-max p-4'>
										<span className='text-5xl font-bold italic text-slate-400'>
											{voteAverage}
										</span>
										<span className=''>{voteCount} votos</span>
									</div>
								</div>
							</div>
							<div className='text-lg'>{overview}</div>
						</div>
						<div className=' '>
							<img
								className='rounded-sm max-w-none'
								width='300'
								src={`https://image.tmdb.org/t/p/w300/${image}`}
								alt=''
							/>
						</div>
					</article>
					{movie.data?.trailer && (
						<iframe
							className='mx-auto h-[70vw] max-h-screen w-full py-20 px-20 lg:px-40 rounded-md'
							src={`https://www.youtube.com/embed/${trailer}`}></iframe>
					)}
				</section>
			)}
		</div>
	);
};

export default MoviesPage;
