import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';

const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const SearchResultsPage = lazy(() => import('./pages/SearchResultsPage'));
const TrendingPage = lazy(() => import('./pages/TrendingPage'));

function App() {
	return (
		<>
			<BrowserRouter basename='/movie-app'>
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
