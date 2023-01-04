import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@pages/App.jsx';
import './index.scss';

function react() {
	const container = document.getElementById('root');
	const root = createRoot(container);

	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	);
}

export default react;
