import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import '@fontsource/ubuntu';
import App from '$/components/App';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<App />
	</StrictMode>
);
