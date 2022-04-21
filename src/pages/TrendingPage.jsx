// import { useSearchParams } from 'react-router-dom';
import MovieGrid from '../components/layout/MovieGrid';
import Pagination from '../components/Pagination';

const TrendingPage = () => {
	return (
		<div className='flex flex-col justify-center items-center my-20 gap-10'>
			<MovieGrid by='trending' />
			<Pagination />
		</div>
	);
};

export default TrendingPage;
