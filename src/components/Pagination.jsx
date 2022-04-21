import { useSearchParams } from 'react-router-dom';

const Pagination = () => {
	const [searchParams, setSearchparams] = useSearchParams();

	const page = Number(searchParams.get('page')) || 1;

	const setPageParam = page => {
		searchParams.set('page', page);
		setSearchparams(searchParams);
	};

	return (
		<div className='flex items-center gap-5'>
			<button
				className='bg-slate-400 py-1 px-3 rounded-sm disabled:hidden'
				onClick={() => setPageParam(page - 1)}
				disabled={page === 1}>
				Página anterior
			</button>
			<div className='text-white'>Página: {page}</div>
			<button
				className='bg-slate-400 py-1 px-3 rounded-sm '
				onClick={() => setPageParam(page + 1)}>
				Página siguiente
			</button>
		</div>
	);
};

export default Pagination;
