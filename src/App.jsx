import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
// import CategoryPage from './pages/CategoryPage';
import HomePage from './pages/HomePage';
// import MoviesPage from './pages/MoviesPage';
// import SearchResultsPage from './pages/SearchResultsPage';
// import TrendingPage from './pages/TrendingPage';

const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const SearchResultsPage = lazy(() => import('./pages/SearchResultsPage'));
const TrendingPage = lazy(() => import('./pages/TrendingPage'));

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />

				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route
						path='categories'
						element={
							<Suspense fallback='Cargando...'>
								<CategoryPage />
							</Suspense>
						}
					/>
					<Route
						path='categories/trendings'
						element={
							<Suspense fallback='Cargando...'>
								<TrendingPage />
							</Suspense>
						}
					/>
					<Route
						path='search'
						element={
							<Suspense fallback='Cargando...'>
								<SearchResultsPage />
							</Suspense>
						}
					/>
					<Route
						path='movies/:id'
						element={
							<Suspense fallback='Cargando...'>
								<MoviesPage />
							</Suspense>
						}
					/>
					<Route path='*' element={<div>404, NOT FOUND</div>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
