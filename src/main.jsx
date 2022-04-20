import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { GenresProvider } from './Context/GenresContext';

const container = document.getElementById('root');

createRoot(container).render(
	<StrictMode>
		<GenresProvider>
			<App />
		</GenresProvider>
	</StrictMode>
);
