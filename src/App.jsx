import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import CategoryPage from './pages/CategoryPage';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import SearchResultsPage from './pages/SearchResultsPage';
import TrendingPage from './pages/TrendingPage';

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />

				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='categories' element={<CategoryPage />} />
					<Route path='categories/trendings' element={<TrendingPage />} />
					<Route path='search' element={<SearchResultsPage />} />
					<Route path='movies/:id' element={<MoviesPage />} />
					<Route path='*' element={<div>404, NOT FOUND</div>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
