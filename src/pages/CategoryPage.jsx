import CategoryNavbar from '../components/CategoryNavbar/CategoryNavbar';
import MovieGrid from '../components/layout/MovieGrid';
import Pagination from '../components/Pagination';

const CategoryPage = () => {
	return (
		<>
			<section className='flex flex-col justify-center items-center gap-10 mb-20'>
				<CategoryNavbar />
				<MovieGrid by='category' />
				<Pagination />
			</section>
		</>
	);
};

export default CategoryPage;
