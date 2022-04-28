import { useEffect, useRef } from 'react';

const FilterButton = ({ dataset, filters, setFilter, text, filter }) => {
	const ref = useRef();

	useEffect(() => {
		if (filters[filter] === ref?.current?.dataset.filterss) {
			ref.current.classList.add('bg-orange-600');
			ref.current.classList.remove('bg-slate-400');
		} else {
			ref.current.classList.remove('bg-orange-600');
			ref.current.classList.add('bg-slate-400');
		}
	}, [filters]);

	return (
		<button
			ref={ref}
			data-filterss={dataset}
			className='px-3 py-1 m-2 bg-slate-400 rounded-sm hover:scale-105'
			onClick={() => {
				setFilter(ref.current.dataset.filterss, ref.current.innerText);
			}}>
			{text}
		</button>
	);
};

export default FilterButton;
