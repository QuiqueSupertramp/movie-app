import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GenresContext from '../Context/GenresContext';

const NavBar = () => {
	const navigate = useNavigate();
	const [query, setQuery] = useState('');
	const [show, setShow] = useState(false);

	const { genres } = useContext(GenresContext);

	return (
		<div className='flex justify-between items-center px-10 py-4 bg-slate-900'>
			<div
				onClick={() => setShow(!show)}
				className='w-full relative text-slate-50'>
				<button onClick={() => setShow(!show)}>Categorias ▼</button>
				<div
					className={`absolute z-10 p-4 bg-opacity-60 mt-2 backdrop-blur-md origin-bottom-left left-0 bg-slate-300 rounded-sm columns-4 whitespace-nowrap ${
						show ? 'normal' : 'hidden'
					}`}>
					{genres &&
						genres.map(genre => (
							<Link
								className='text-black hover:text-orange-700'
								key={genre.id}
								to={`categories?genreID=${genre.id}&genreName=${genre.name}&page=1`}>
								<p>{genre.name}</p>
							</Link>
						))}
				</div>
			</div>
			<Link
				className='w-full text-center font-bold text-2xl text-slate-400'
				to='/'>
				Movies-app
			</Link>
			<form
				className='w-full text-right'
				onSubmit={async e => {
					e.preventDefault();
					navigate(`search?query=${query}&page=1`);
				}}>
				<input
					type='text'
					placeholder='Buscar película...'
					onChange={e => setQuery(e.target.value)}
					value={query}
					className='bg-slate-50 outline-none border-0 rounded-sm px-3 py-1'
				/>
			</form>
		</div>
	);
};

export default NavBar;
