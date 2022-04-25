import { Link } from 'react-router-dom';

const MovieCard = ({ id, title, overview, image, average, year }) => {
	return (
		<Link
			to={`/movies/${id}`}
			className='relative text-white flex flex-col items-center justify-center'>
			<div className='h-[400px] relative w-[280px] '>
				<div className='absolute h-full w-full bottom-0 flex items-end opacity-0 hover:opacity-100 transition-opacity duration-100'>
					<div className='flex flex-col bg-black bg-opacity-80 p-6 h-3/5 w-full overflow-auto no-scroll backdrop-blur-sm rounded-sm no-scroll'>
						<h3 className='font-bold italic pb-4 text-2xl'>
							{title}
							<span className='text-sm font-normal not-italic'>
								{'  '}({year})
							</span>
						</h3>

						<p className='text-sm leading-relaxed text-ellipsis'>{overview}</p>
					</div>
				</div>
				<img
					src={`https://image.tmdb.org/t/p/w300/${image}`}
					alt={title}
					loading='lazy'
					className='h-full w-full object-cover rounded-md'
				/>
			</div>
			<span className='drop-shadow-[0_0_5px_rgba(255,255,255,0.1)] absolute -top-5 -left-5 rounded-full bg-slate-900 p-2 font-bold text-2xl'>
				{average}
			</span>
		</Link>
	);
};

export default MovieCard;
