import { useEffect, useRef } from 'react';

const FilterButton = ({ dataset, filters, setFilter, text, filter }) => {
	const ref = useRef();

	useEffect(() => {
		filters[filter] === ref?.current?.dataset.filterss
			? ref.current.classList.add('scale-150')
			: ref.current.classList.remove('scale-150');
	}, [filters]);

	return (
		<button
			ref={ref}
			data-filterss={dataset}
			className='px-3 py-1  m-2 bg-slate-600 rounded-sm'
			onClick={() => {
				setFilter(ref.current.dataset.filterss, ref.current.innerText);
			}}>
			{text}
		</button>
	);
};

export default FilterButton;
